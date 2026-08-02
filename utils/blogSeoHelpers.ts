import { BlogPost, PagePath } from '../types';

export interface ContextualSeoLink {
  label: string;
  anchorText: string;
  path: PagePath;
  description: string;
  isAuditModal?: boolean;
}

export const CORE_SEO_RESOURCES: ContextualSeoLink[] = [
  {
    label: 'Pricing & Plans',
    anchorText: 'Compare AI Receptionist Pricing & Plans →',
    path: '/pricing',
    description: 'Evaluate transparent monthly investment tiers with zero per-minute latency surcharges.'
  },
  {
    label: 'Interactive Demo',
    anchorText: 'Test Live AI Voice Agent Demo →',
    path: '/demo',
    description: 'Experience instant sub-second speech synthesis and conversational intake live in your browser.'
  },
  {
    label: 'Strategy Audit',
    anchorText: 'Book Free Voice Infrastructure Audit →',
    path: '/book-audit',
    isAuditModal: true,
    description: 'Get a 30-minute bespoke call flow audit with a PEXEK Voice Systems Architect.'
  },
  {
    label: 'ROI Calculator',
    anchorText: 'Calculate Unanswered Call Revenue Loss →',
    path: '/roi-calculator',
    description: 'Model your exact monthly revenue leak from missed calls and delayed intake callbacks.'
  },
  {
    label: 'Case Studies',
    anchorText: 'View Verified Client Case Studies →',
    path: '/case-studies',
    description: 'Analyze real-world deployment data, appointment conversion spikes, and ROI metrics.'
  },
  {
    label: 'Founder Blueprint',
    anchorText: 'Read Architectural Principles by Founder →',
    path: '/founder',
    description: 'Understand the technical vision behind zero-latency autonomous voice infrastructure.'
  }
];

/**
 * Automatically calculates topic similarity between current blog post and all other posts
 */
export function getRelatedArticles(
  currentPost: BlogPost,
  allPosts: BlogPost[],
  maxCount: number = 2
): BlogPost[] {
  const candidates = allPosts.filter((p) => p.id !== currentPost.id);

  const scored = candidates.map((post) => {
    let score = 0;

    // 1. Category match (+15 pts)
    if (post.category === currentPost.category) {
      score += 15;
    }

    // 2. Explicit relatedPostIds (+20 pts)
    if (currentPost.relatedPostIds?.includes(post.id) || currentPost.relatedPostIds?.includes(post.slug || '')) {
      score += 20;
    }

    // 3. Keyword & focusKeyword overlap (+8 pts per match)
    const currentKeywords = [
      currentPost.focusKeyword.toLowerCase(),
      ...(currentPost.keywords || []).map((k) => k.toLowerCase())
    ];
    const postKeywords = [
      post.focusKeyword.toLowerCase(),
      ...(post.keywords || []).map((k) => k.toLowerCase())
    ];

    currentKeywords.forEach((ck) => {
      postKeywords.forEach((pk) => {
        if (ck === pk || (ck.length > 4 && pk.includes(ck)) || (pk.length > 4 && ck.includes(pk))) {
          score += 8;
        }
      });
    });

    // 4. Title word overlap (+3 pts per word)
    const currentWords = currentPost.title
      .toLowerCase()
      .split(/\s+/)
      .filter((w) => w.length > 3 && !['with', 'from', 'that', 'this', 'your', 'more', 'cost', 'have'].includes(w));
    const postWords = post.title.toLowerCase().split(/\s+/);

    currentWords.forEach((word) => {
      if (postWords.includes(word)) {
        score += 3;
      }
    });

    return { post, score };
  });

  // Sort descending by similarity score
  scored.sort((a, b) => b.score - a.score);

  return scored.slice(0, maxCount).map((s) => s.post);
}

/**
 * Gets Previous and Next articles based on chronological / array ordering
 */
export function getPrevNextArticles(
  currentPost: BlogPost,
  allPosts: BlogPost[]
): { prevPost: BlogPost | null; nextPost: BlogPost | null } {
  const index = allPosts.findIndex((p) => p.id === currentPost.id || p.slug === currentPost.slug);
  if (index === -1) {
    return { prevPost: null, nextPost: null };
  }

  const prevPost = index > 0 ? allPosts[index - 1] : allPosts[allPosts.length - 1];
  const nextPost = index < allPosts.length - 1 ? allPosts[index + 1] : allPosts[0];

  return {
    prevPost: prevPost.id !== currentPost.id ? prevPost : null,
    nextPost: nextPost.id !== currentPost.id ? nextPost : null
  };
}
