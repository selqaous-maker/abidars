import { IndustryPlaybook, Pillar, CaseStudy, BlogPost, FAQItem } from '../types';

export const PILLARS: Pillar[] = [
  {
    id: 'voice-os',
    name: 'VoiceOS™',
    trademark: 'VoiceOS™',
    subtitle: 'AI Receptionist That Answers Every Call 24/7',
    shortDesc: 'AI Receptionist That Answers Every Call 24/7',
    fullDesc: 'Never miss a customer call again. PEXEK deploys an AI voice system that handles your phones around the clock with zero hold times.',
    features: [
      '✓ Never miss a customer call — even after hours, weekends, or lunch breaks',
      '✓ Handles unlimited concurrent callers with zero hold time',
      '✓ Speaks 100+ languages with your brand\'s exact tone and voice'
    ],
    metricType: 'SYSTEM CAPABILITY:',
    metrics: '24/7 Phone Answering & Unlimited Concurrent Caller Capacity',
    icon: 'PhoneCall'
  },
  {
    id: 'lead-engine',
    name: 'LeadEngine™',
    trademark: 'LeadEngine™',
    subtitle: 'Qualifies Every Caller Before Your Team Gets Involved',
    shortDesc: 'Qualifies Every Caller Before Your Team Gets Involved',
    fullDesc: 'Filters out unqualified prospects and spam calls so your sales team only speaks to high-intent, ready-to-buy prospects.',
    features: [
      '✓ Filters spam and cold calls automatically',
      '✓ Identifies hot buyers and transfers them instantly to your team',
      '✓ Captures budget, timeline, and decision authority in under 60 seconds'
    ],
    metricType: 'SYSTEM CAPABILITY:',
    metrics: 'Real-time Lead Scoring & Instant Hot-Lead Live Transfer',
    icon: 'Filter'
  },
  {
    id: 'booking-os',
    name: 'BookingOS™',
    trademark: 'BookingOS™',
    subtitle: 'Books Appointments Automatically Without Back-and-Forth Calls',
    shortDesc: 'Books Appointments Automatically Without Back-and-Forth Calls',
    fullDesc: 'Direct bi-directional calendar integration that locks in appointments, sends instant SMS/WhatsApp confirmations, and prevents double bookings.',
    features: [
      '✓ Syncs with your existing calendar in real time',
      '✓ Sends instant SMS/WhatsApp confirmations to reduce no-shows',
      '✓ Detects scheduling conflicts before they happen'
    ],
    metricType: 'PROJECTED OUTCOME:',
    metrics: 'Automated Calendar Lock & Multi-Channel Confirmations',
    icon: 'Calendar'
  },
  {
    id: 'workflow-os',
    name: 'WorkflowOS™',
    trademark: 'WorkflowOS™',
    subtitle: 'Automatically Updates Your CRM & Sends Confirmations',
    shortDesc: 'Automatically Updates Your CRM & Sends Confirmations',
    fullDesc: 'Extracts caller details, generates complete transcripts, updates your database, and dispatches instant post-call follow-ups automatically.',
    features: [
      '✓ Every call logged in your CRM with full transcript and audio',
      '✓ Instant WhatsApp, SMS, and email follow-ups to callers',
      '✓ Zero manual data entry for your front desk or sales team'
    ],
    metricType: 'SYSTEM CAPABILITY:',
    metrics: 'Automated CRM Sync & Multi-Channel Post-Call Dispatch',
    icon: 'Zap'
  },
  {
    id: 'insight-os',
    name: 'InsightOS™',
    trademark: 'InsightOS™',
    subtitle: 'See Every Call, Every Lead, and Every Booking in One Place',
    shortDesc: 'See Every Call, Every Lead, and Every Booking in One Place',
    fullDesc: 'Comprehensive dashboard and analytics reporting showing call volume, conversion rates, and revenue impact across all campaigns.',
    features: [
      '✓ Real-time dashboard showing call volume, conversion rates, and revenue impact',
      '✓ Weekly performance reports delivered to your inbox',
      '✓ Identifies exactly where leads drop off so you can fix it'
    ],
    metricType: 'SYSTEM CAPABILITY:',
    metrics: 'Real-time Call Analytics & Conversion Revenue Intelligence',
    icon: 'Activity'
  }
];

export const INDUSTRIES: IndustryPlaybook[] = [
  {
    id: 'healthcare',
    name: 'Healthcare & Medical',
    tagline: 'Never Lose Another Patient to Voicemail',
    heroHeadline: 'Never Lose Another Patient to Voicemail or Long Hold Times',
    iconName: 'Stethoscope',
    stat: '$8,000/mo',
    statLabel: 'Avg revenue lost per clinic from missed calls',
    description: 'Answers patient inquiries and triage calls 24/7, books appointments directly into your clinic calendar, and sends automated SMS/WhatsApp reminders.',
    capabilities: [
      '✓ Answers patient inquiries and triage calls 24/7',
      '✓ Books appointments directly into your clinic calendar',
      '✓ Sends automated SMS/WhatsApp reminders to eliminate no-shows'
    ],
    useCases: [
      {
        title: 'After-Hours Patient Triage',
        description: 'Answers midnight caller questions, screens urgent medical emergencies for physician escalation, and books routine visits.',
        outcome: 'Estimated capture of 40+ after-hours bookings monthly based on industry call volume data.'
      },
      {
        title: 'Insurance & Appointment Intake',
        description: 'Collects insurance carrier info, policy numbers, and primary chief complaint before saving directly into the EHR.',
        outcome: 'Estimated 65% reduction in front-desk phone intake workload.'
      }
    ],
    sampleCallTranscript: [
      { speaker: 'Caller', text: 'Hi, I need to see a doctor for severe lower back pain that started this morning. Are you open?', timestamp: '00:01' },
      { speaker: 'PEXEK AI', text: 'Hello! I can get you scheduled right away. Are you experiencing any numbness, fever, or pain radiating down your leg?', timestamp: '00:04' },
      { speaker: 'Caller', text: 'No numbness, just intense aching when I bend.', timestamp: '00:08' },
      { speaker: 'PEXEK AI', text: 'Got it. Dr. Aris has an urgent slot open today at 2:30 PM or tomorrow at 9:00 AM at our Central Clinic. Which works best for you?', timestamp: '00:12' },
      { speaker: 'Caller', text: 'Today at 2:30 PM please.', timestamp: '00:15' },
      { speaker: 'PEXEK AI', text: 'Perfect. I have booked you for 2:30 PM today with Dr. Aris. I just sent a WhatsApp confirmation with a 1-click intake form. What is your full name for the record?', timestamp: '00:18' }
    ]
  },
  {
    id: 'dental',
    name: 'Dental Practice',
    tagline: 'Never Miss Another Patient Call',
    heroHeadline: 'Eliminate Empty Dental Chairs with Autonomous Patient Intake',
    iconName: 'Smile',
    stat: '40%',
    statLabel: 'Reduction in practice no-show rates',
    description: 'Answers emergency and routine calls 24/7, books appointments directly into your calendar, and sends automated reminders to reduce no-shows.',
    capabilities: [
      '✓ Answers emergency and routine calls 24/7',
      '✓ Books appointments directly into your calendar',
      '✓ Sends automated reminders to reduce no-shows'
    ],
    useCases: [
      {
        title: 'Emergency Patient Intake',
        description: 'Captures patients suffering from acute dental pain who call after hours, booking them directly into emergency slots.',
        outcome: 'Estimated $12,000–$15,000 monthly emergency production value based on average dental emergency fees.'
      },
      {
        title: 'Inactive Patient Reactivation',
        description: 'Outbound voice agent contacts patients overdue for hygiene cleanings and books them in under 2 minutes.',
        outcome: 'Estimated 150–200 patient reactivations monthly based on standard hygiene recall list sizes.'
      }
    ],
    sampleCallTranscript: [
      { speaker: 'Caller', text: 'I broke my tooth while eating lunch and I am in a lot of pain. Can I come in today?', timestamp: '00:01' },
      { speaker: 'PEXEK AI', text: 'I am so sorry to hear that. We hold dedicated emergency slots every day for situations like this. Are you bleeding or swelling right now?', timestamp: '00:05' },
      { speaker: 'Caller', text: 'No bleeding, but it hurts when I drink anything cold.', timestamp: '00:09' },
      { speaker: 'PEXEK AI', text: 'Understood. Dr. Miller can see you today at 3:15 PM at our Downtown practice. Can you make that time?', timestamp: '00:13' },
      { speaker: 'Caller', text: 'Yes, I can be there at 3:15.', timestamp: '00:16' },
      { speaker: 'PEXEK AI', text: 'Great. Please avoid hot or cold liquids until your appointment. I have reserved 3:15 PM for you and texted directions to your phone.', timestamp: '00:20' }
    ]
  },
  {
    id: 'real-estate',
    name: 'Real Estate & Property',
    tagline: 'Convert Inbound Buyer Leads Instantly',
    heroHeadline: 'Qualify High-Intent Buyers & Schedule Viewings in Seconds',
    iconName: 'Building',
    stat: '21x',
    statLabel: 'Higher conversion when responding within 5 mins',
    description: 'Responds to property inquiries in under 60 seconds, qualifies buyers by budget, location, and timeline, and transfers hot prospects directly to your agents.',
    capabilities: [
      '✓ Responds to property inquiries in under 60 seconds',
      '✓ Qualifies buyers by budget, location, and timeline',
      '✓ Transfers hot prospects directly to your agents'
    ],
    useCases: [
      {
        title: 'Sign-Call Lead Capture',
        description: 'Captures drive-by callers 24/7, answers specific price/square-footage questions, and books listing tours.',
        outcome: 'Sub-8-second answer speed on all inbound calls.'
      },
      {
        title: 'Buyer Pre-Qualification',
        description: 'Filters out un-funded browsers by verifying mortgage pre-approval status before locking calendar slots.',
        outcome: 'Estimated savings of 12–15 hours weekly per agent through automated pre-screening.'
      }
    ],
    sampleCallTranscript: [
      { speaker: 'Caller', text: 'I am calling about the property on 742 Evergreen Terrace. What is the asking price?', timestamp: '00:01' },
      { speaker: 'PEXEK AI', text: 'Thanks for calling! That 4-bedroom home is listed at $685,000 and features a newly renovated kitchen. Are you currently pre-approved or purchasing cash?', timestamp: '00:05' },
      { speaker: 'Caller', text: 'I have a conventional pre-approval letter up to $720,000.', timestamp: '00:09' },
      { speaker: 'PEXEK AI', text: 'Excellent! The listing agent Sarah is hosting private showings tomorrow between 10 AM and 2 PM. Would 11:00 AM work for a private tour?', timestamp: '00:14' },
      { speaker: 'Caller', text: '11:00 AM works great.', timestamp: '00:17' },
      { speaker: 'PEXEK AI', text: 'You are all set for 11:00 AM tomorrow at 742 Evergreen Terrace. Sarah will meet you at the door. I have texted you her cell and directions.', timestamp: '00:21' }
    ]
  },
  {
    id: 'e-commerce',
    name: 'E-commerce & Brands',
    tagline: 'Automate Phone Support & Recover Abandoned Carts',
    heroHeadline: 'Deliver Instant Phone Order Tracking, Returns, & Upsells 24/7',
    iconName: 'ShoppingBag',
    stat: '60%',
    statLabel: 'Reduction in customer support overhead',
    description: 'Resolves order status and shipping questions automatically, sends instant payment links to recover abandoned orders, and reduces seasonal customer support costs.',
    capabilities: [
      '✓ Resolves order status and shipping questions automatically',
      '✓ Sends instant payment links to recover abandoned orders',
      '✓ Reduces seasonal customer support costs by up to 60%'
    ],
    useCases: [
      {
        title: 'WISMO ("Where Is My Order?") Voice Bot',
        description: 'Verifies caller phone number, checks live tracking status, and reads real-time courier updates in 15 seconds.',
        outcome: 'Estimated resolution of 70–80% of routine WISMO calls without human agent touch.'
      },
      {
        title: 'Phone Sales & Checkout Help',
        description: 'Assists callers having checkout friction, sends direct SMS pay-links, and upsells related items.',
        outcome: 'Estimated 15–20% increase in phone order conversions via instant checkout assistance.'
      }
    ],
    sampleCallTranscript: [
      { speaker: 'Caller', text: 'Hi, I placed an order three days ago and haven’t gotten a shipping confirmation yet. Order number 48291.', timestamp: '00:01' },
      { speaker: 'PEXEK AI', text: 'Let me check order 48291 for you right now... Great news, your package was picked up by FedEx this morning and is scheduled for delivery this Thursday by 4 PM.', timestamp: '00:06' },
      { speaker: 'Caller', text: 'Awesome, can you text me the tracking link?', timestamp: '00:10' },
      { speaker: 'PEXEK AI', text: 'I just sent the FedEx tracking link directly to your mobile number. Is there anything else I can help you with today?', timestamp: '00:13' },
      { speaker: 'Caller', text: 'Nope, that was super fast. Thanks!', timestamp: '00:16' }
    ]
  },
  {
    id: 'legal',
    name: 'Legal & Law Firms',
    tagline: 'Screen Potential Clients 24/7',
    heroHeadline: 'Qualify Case Fit & Perform Instant Conflict Checks Around the Clock',
    iconName: 'Scale',
    stat: '$1,200',
    statLabel: 'Average value of a single lost legal consultation call',
    description: 'Screens callers against your firm\'s case criteria, collects critical intake details before consults, and books qualified consultations directly onto attorney calendars.',
    capabilities: [
      '✓ Screens callers against your firm\'s case criteria',
      '✓ Collects critical intake details before consults',
      '✓ Books qualified consultations directly onto attorney calendars'
    ],
    useCases: [
      {
        title: 'Personal Injury Emergency Intake',
        description: 'Captures accident victims calling from the hospital or roadside, gathering incident details before booking a consultation.',
        outcome: 'Estimated 25–35% increase in qualified consultation bookings from immediate 24/7 intake.'
      },
      {
        title: 'Conflict & Case Qualification',
        description: 'Screens callers to confirm firm capacity, jurisdiction, and absence of party conflicts.',
        outcome: 'Estimated elimination of 10+ weekly unbillable consultation hours through automated conflict pre-screening.'
      }
    ],
    sampleCallTranscript: [
      { speaker: 'Caller', text: 'I was rear-ended on the highway yesterday by a commercial truck and I need a lawyer.', timestamp: '00:01' },
      { speaker: 'PEXEK AI', text: 'I am glad you called, and I hope you are getting proper medical care. Were you or any passengers injured in the collision?', timestamp: '00:05' },
      { speaker: 'Caller', text: 'Yes, I was taken to the ER with neck injuries and my car is totaled.', timestamp: '00:10' },
      { speaker: 'PEXEK AI', text: 'Understood. Did police arrive at the scene to file an official traffic report?', timestamp: '00:14' },
      { speaker: 'Caller', text: 'Yes, Highway Patrol took a full report.', timestamp: '00:17' },
      { speaker: 'PEXEK AI', text: 'Thank you. Our senior partner David specializes in commercial vehicle accidents and can speak with you today at 4:00 PM for a free case evaluation. Would you like me to connect you?', timestamp: '00:21' },
      { speaker: 'Caller', text: 'Yes, please lock in 4:00 PM.', timestamp: '00:25' }
    ]
  },
  {
    id: 'services',
    name: 'Home & Professional Services',
    tagline: 'Dispatch Emergency Jobs & Book Service Calls',
    heroHeadline: 'Dispatch Technicians, Quote Jobs, and Book Service Calls 24/7',
    iconName: 'Wrench',
    stat: '84%',
    statLabel: 'Of customers hire the first service contractor who answers',
    description: 'Captures after-hours repair and service requests, gathers job details and photos via automated WhatsApp link, and schedules technician service windows automatically.',
    capabilities: [
      '✓ Captures after-hours repair and service requests',
      '✓ Gathers job details and photos via automated WhatsApp link',
      '✓ Schedules technician service windows automatically'
    ],
    useCases: [
      {
        title: 'After-Hours HVAC Emergency Dispatch',
        description: 'Answers AC failure calls in summer heat waves, triaging urgent cases and assigning on-call techs.',
        outcome: 'Estimated $25,000–$30,000 emergency service value based on average HVAC emergency call fees.'
      },
      {
        title: 'Automated Job Quoting & Scheduling',
        description: 'Gathers job photos via SMS link, calculates base estimate, and books technician arrival window.',
        outcome: 'Estimated 100% call capture rate during active field operations.'
      }
    ],
    sampleCallTranscript: [
      { speaker: 'Caller', text: 'My air conditioning completely stopped blowing cold air and it is 95 degrees in my house.', timestamp: '00:01' },
      { speaker: 'PEXEK AI', text: 'I can certainly help get an HVAC tech to your home today. Is the outdoor compressor unit running or making unusual noises?', timestamp: '00:06' },
      { speaker: 'Caller', text: 'It is making a loud buzzing sound but not spinning.', timestamp: '00:10' },
      { speaker: 'PEXEK AI', text: 'Got it. That sounds like a capacitor or fan motor issue. We have an emergency dispatch slot between 1:00 PM and 3:00 PM today. Our diagnostic fee is $89, applied toward any repair. Shall I book that slot for you?', timestamp: '00:15' },
      { speaker: 'Caller', text: 'Yes, please send them as soon as possible!', timestamp: '00:20' }
    ]
  }
];

export const TIMELINE_STEPS = [
  {
    day: 'Day 0',
    title: 'Strategy Audit & Mapping',
    desc: 'We map your existing phone call flows, patient/client intake scripts, objection playbooks, and tech stack.',
    badge: 'Discovery'
  },
  {
    day: 'Day 1–3',
    title: 'AI Prompt Engineering & Knowledge Base Configuration',
    desc: 'We configure your dedicated PEXEK voice agent on your business knowledge base, prompt architecture, tone, pricing rules, and edge cases.',
    badge: 'Prompt Engineering'
  },
  {
    day: 'Day 4–7',
    title: 'Integration Architecture',
    desc: 'Bi-directional sync with your calendar (Google/Outlook/EHR), CRM (HubSpot/Salesforce), WhatsApp API, and telephony.',
    badge: 'API Connectors'
  },
  {
    day: 'Day 8–10',
    title: 'Live Stress-Testing & Polish',
    desc: 'You listen to real test calls under noisy conditions, edge-case questions, and interruptions. We refine until flawless.',
    badge: 'Quality Assurance'
  },
  {
    day: 'Day 11–14',
    title: 'Full Deployment & Live Go-Live',
    desc: 'PEXEK starts handling real inbound/outbound calls. Live human backup monitoring & weekly optimization reports.',
    badge: 'Revenue Live'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'phoenix-dental',
    numberBadge: '#001',
    verticalName: 'Healthcare & Dental',
    typeBadge: 'Industry Benchmark Data',
    clientName: 'Healthcare & Dental',
    location: 'Industry Benchmark Data',
    industry: 'Dental Practice',
    title: 'Sample Deployment: Healthcare & Dental — 40% Projected No-Show Reduction',
    challenge: 'Over 25% of inbound patient calls go to voicemail during peak clinic hours in typical dental practices. No-show rates for hygiene recall appointments average 18% nationwide, causing severe scheduling loss.',
    architectureHeading: 'Sample PEXEK Deployment Architecture',
    systemDeployed: 'AI Receptionist (VoiceOS™) answering every patient call 24/7 + Automatic appointment booking and WhatsApp reminders (BookingOS™)',
    results: [
      { label: 'Projected No-Show Reduction', value: '40%', change: 'Modeled drop from 18% down to 10.8% based on automated recall response rates' },
      { label: 'Projected After-Hours Bookings', value: '+42', change: 'Estimated new patient appointments / month from after-hours call capture' },
      { label: 'Modeled Efficiency Gain', value: 'High ROI', change: 'Based on verified industry dental production metrics' }
    ],
    projectionBullets: [
      '40% projected reduction in hygiene no-shows from automated recall response rates',
      '100% after-hours call capture with instant WhatsApp confirmation',
      'Higher recall attendance through automated reactivation sequences'
    ],
    sources: ['American Dental Association (ADA)', 'Levin Group', 'Dental Economics'],
    quote: '',
    author: '',
    role: '',
    timeframe: 'Modeled Projection'
  },
  {
    id: 'miami-realty',
    numberBadge: '#002',
    verticalName: 'Real Estate Vertical',
    typeBadge: 'Founding Cohort — Open',
    clientName: 'Real Estate Vertical',
    location: 'Selection Cohort Active',
    industry: 'Real Estate',
    title: 'Founding Client Opportunity: Be Our First Documented Real Estate Case Study',
    challenge: 'High-value sign callers hang up when routed to agent voicemail during client showings. Response time averages 3.5 hours per portal lead in traditional brokerages.',
    architectureHeading: 'Proposed Deployment Architecture',
    systemDeployed: 'Lead Qualification (LeadEngine™) configured for instant 8-second buyer pre-qualification + live transfer for hot cash buyers',
    results: [
      { label: 'Target Response Time', value: '<8 sec', change: 'Down from 3.5 hour industry average' },
      { label: 'Expected Lead Conversion', value: 'Up to 21x', change: 'Based on MIT speed-to-lead benchmark data' },
      { label: 'Founding Client Terms', value: 'Reduced Fee', change: 'White-glove onboarding & dedicated setup' }
    ],
    projectionBullets: [
      '8-second average response time for instant buyer pre-qualification',
      'Up to 21x higher lead conversion probability (based on MIT speed-to-lead benchmarks)',
      'White-glove onboarding and dedicated architecture setup for founding cohort partners'
    ],
    sources: ['MIT', 'InsideSales', 'National Association of Realtors'],
    quote: '',
    author: '',
    role: '',
    timeframe: 'Initial Cohort'
  },
  {
    id: 'austin-ecommerce',
    numberBadge: '#003',
    verticalName: 'E-commerce & Retail',
    typeBadge: 'Industry Benchmark Data',
    clientName: 'E-commerce & Retail',
    location: 'Industry Benchmark Data',
    industry: 'E-commerce',
    title: 'Sample Deployment: E-commerce & Retail — 60% Support Cost Optimization',
    challenge: 'Peak season telephone support backlogs e-commerce teams with thousands of "Where is my order?" (WISMO) calls, leading to abandoned carts and high support overhead.',
    architectureHeading: 'Sample PEXEK Deployment Architecture',
    systemDeployed: 'AI Receptionist (VoiceOS™) configured with Shopify API connector + automated SMS pay-link recovery',
    results: [
      { label: 'Projected Support Savings', value: '-60%', change: 'Modeled operational cost reduction in seasonal support hiring' },
      { label: 'Projected WISMO Resolution', value: '88%', change: 'Automated order lookups without human agent touch' },
      { label: 'Modeled Customer CSAT', value: '4.9/5', change: 'Estimated post-call automated rating based on instant lookup' }
    ],
    projectionBullets: [
      '60% operational support cost optimization during peak traffic periods',
      '88% automated WISMO ("Where Is My Order?") query resolution',
      '3x higher customer satisfaction compared to static email queues or text chatbots'
    ],
    sources: ['Gartner', 'Shopify Commerce Reports', 'McKinsey'],
    quote: '',
    author: '',
    role: '',
    timeframe: 'Modeled Projection'
  }
];

export { BLOG_POSTS } from './blogPosts';


export const FAQS: FAQItem[] = [
  {
    question: 'How quickly can PEXEK be fully deployed for my business?',
    answer: 'Standard deployment takes exactly 14 days from our initial Strategy Audit. During this window, we map your call flows, train your custom voice agent on your business documentation, connect your CRM/calendars, and perform rigorous live testing.',
    category: 'Deployment'
  },
  {
    question: 'Does the AI agent sound robotic or fake?',
    answer: 'No. PEXEK VoiceOS utilizes ultra-low-latency (<450ms) neural speech synthesis built specifically for conversational cadence, natural breathing pauses, dynamic tone shifting, and accent adaptation. Over 98% of callers believe they are speaking with a human receptionist.',
    category: 'Technology'
  },
  {
    question: 'What happens if a caller asks a complex question the AI doesn’t know?',
    answer: 'Our systems feature Intelligent Polite Escalation. If a caller presents an edge case or asks to speak with a human manager, PEXEK gracefully initiates a warm live-transfer to your on-duty team member or logs an urgent priority callback request in your CRM with full audio recording.',
    category: 'Technology'
  },
  {
    question: 'Can PEXEK integrate with my existing CRM and scheduling tools?',
    answer: 'Yes. PEXEK natively integrates with over 50+ business platforms including HubSpot, Salesforce, Pipedrive, Zoho, Calendly, Cal.com, GoHighLevel, Google Workspace, Outlook, Shopify, WooCommerce, Stripe, and WhatsApp Business API. Additional practice management integrations available via custom API development.',
    category: 'Deployment'
  },
  {
    question: 'How does your pricing work?',
    answer: 'We deploy custom revenue infrastructure tailored to your call volume and integration complexity rather than charging generic software seats. We offer Done-For-You Deployment (setup + monthly management), Platform Licensing for agencies, and Enterprise Partnerships.',
    category: 'Pricing'
  },
  {
    question: 'Does PEXEK support HIPAA-ready and GDPR-aligned deployments for medical/legal data?',
    answer: 'Yes. All data transmuted through PEXEK is protected by AES-256 bit encryption at rest and TLS 1.3 in transit. We sign Business Associate Agreements (BAAs) for healthcare clients and support HIPAA-ready and GDPR-aligned deployment options on enterprise-grade infrastructure.',
    category: 'Security'
  }
];

export const TECH_STACK = [
  { name: 'Multi-Model AI Reasoning (OpenAI, Claude, Gemini, Llama)', category: 'LLM Reasoning Engine', detail: 'Real-time multi-turn conversations with sub-second latency' },
  { name: 'Twilio / Telnyx', category: 'Global SIP Telephony', detail: 'Enterprise-grade AI voice infrastructure built on globally trusted telephony providers with HD audio' },
  { name: 'HubSpot / Salesforce', category: 'CRM Sync', detail: 'Real-time bi-directional object mapping' },
  { name: 'Calendly / Cal.com / GoHighLevel', category: 'Calendar Routing', detail: 'Real-time calendar sync with automated conflict detection across Calendly, Cal.com, and GoHighLevel' },
  { name: 'WhatsApp Business API', category: 'Messaging Gateway', detail: 'Instant post-call confirmation dispatch' },
  { name: 'Stripe', category: 'Billing & Deposits', detail: 'PCI-DSS Level 1 phone payment collection' }
];

export const COMPLIANCE_BADGES = [
  { title: 'Enterprise-Grade Security Infrastructure', subtitle: 'AES-256 Encryption & Access Governance' },
  { title: 'HIPAA-Ready', subtitle: 'BAA Execution Available for Healthcare Deployments' },
  { title: 'GDPR-Aligned', subtitle: 'Privacy-First Data Architecture' },
  { title: 'AES-256 Bit', subtitle: 'End-to-End Encryption' }
];
