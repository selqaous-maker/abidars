import React, { useState } from 'react';
import { PagePath } from '../types';
import { 
  Sparkles, Globe, PhoneCall, Calendar, MessageSquare, Database,
  Mic, Clock, FileText, ArrowRight
} from 'lucide-react';

interface DemoPageProps {
  onNavigate: (path: PagePath) => void;
  onOpenAuditModal: () => void;
}

interface TranscriptLine {
  id: string;
  speaker: string;
  step: number;
  text: string;
  time: string;
}

export function DemoPage({ onNavigate, onOpenAuditModal }: DemoPageProps) {
  const [showTechOutput, setShowTechOutput] = useState(false);

  const transcriptLines: TranscriptLine[] = [
    {
      id: 'line-0',
      speaker: 'AI Agent (VoiceOS™)',
      step: 2,
      time: '00:01',
      text: "Thank you for calling Apex Dental Practice. I'm an AI assistant. How can I help you today?"
    },
    {
      id: 'line-1',
      speaker: 'Caller (Michael)',
      step: 2,
      time: '00:05',
      text: "Hi, I broke my tooth while eating lunch and I'm in a lot of pain right now. Do you have any emergency openings today?"
    },
    {
      id: 'line-2',
      speaker: 'AI Agent (VoiceOS™)',
      step: 3,
      time: '00:13',
      text: "I'm very sorry to hear you're in pain. We reserve emergency slots every day. I have an emergency triage opening today at 3:15 PM with Dr. Miller. Would that time work for you?"
    },
    {
      id: 'line-3',
      speaker: 'Caller (Michael)',
      step: 4,
      time: '00:25',
      text: "Yes, 3:15 PM works perfectly. Thank you so much."
    },
    {
      id: 'line-4',
      speaker: 'AI Agent (VoiceOS™)',
      step: 4,
      time: '00:31',
      text: "Great! May I please have your full name, date of birth, and primary insurance provider to complete your booking?"
    },
    {
      id: 'line-5',
      speaker: 'Caller (Michael)',
      step: 5,
      time: '00:49',
      text: "My name is Michael Vance, DOB October 12th, 1988, and I have Delta Dental insurance."
    },
    {
      id: 'line-6',
      speaker: 'AI Agent (VoiceOS™)',
      step: 6,
      time: '00:59',
      text: "Perfect, Michael. You're confirmed for 3:15 PM today with Dr. Miller. I've sent a WhatsApp confirmation with location directions and intake forms. See you soon!"
    }
  ];

  return (
    <div className="space-y-16 pb-20 pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans">
      
      {/* EDIT 1 & 4: HERO & SINGLE PRIMARY CTA */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase font-mono tracking-widest text-[#00d4ff]">
          PEXEK VOICE OS™ | INTERACTIVE DEMO LIBRARY
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
          Experience How PEXEK Handles Customer Calls
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans">
          Experience realistic AI voice conversations designed for healthcare, legal, real estate, home services, and more.
        </p>
        <p className="text-xs text-[#94a3b8] font-sans font-medium">
          Live voice demonstrations are currently available during private strategy sessions.
        </p>

        <div className="pt-4 flex justify-center">
          <button
            onClick={onOpenAuditModal}
            className="btn-pexek-primary text-xs font-bold uppercase tracking-wider px-8 py-4 flex items-center justify-center gap-2 shadow-xl shadow-[#00d4ff]/20"
          >
            <Calendar className="w-4 h-4 text-black" />
            <span>📅 Book Your Live Voice Demonstration →</span>
          </button>
        </div>
      </div>

      {/* EDIT 2 & 3: VOICE DEMO LIBRARY - ENTERPRISE ACCESS CARD */}
      <div className="bg-[#0a0e1a] border border-[#00d4ff]/30 p-6 sm:p-10 rounded-sm space-y-8 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 bg-[#00d4ff]/10 border-b border-l border-[#00d4ff]/40 px-4 py-1.5 text-[11px] font-mono text-[#00d4ff] font-bold uppercase tracking-wider flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5" />
          <span>Status: Available During Live Demonstration</span>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-[#00d4ff] text-sm font-mono font-bold uppercase tracking-widest">
            <Mic className="w-5 h-5" />
            <span>🎙️ Voice Demo Library</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase">
            Natural AI Voice Personas for Industry-Specific Deployment
          </h2>
          <p className="text-slate-300 text-sm max-w-3xl leading-relaxed font-sans">
            PEXEK configures voice personas tailored to your brand tone, industry vocabulary, and customer expectations. Experience them during a live demonstration.
          </p>
        </div>

        {/* Role-Based Personas List Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {[
            {
              role: 'Healthcare Receptionist',
              tone: 'Professional Female',
              desc: 'Warm, empathetic tone for patient booking and dental triage.',
              tag: 'Healthcare & Medical'
            },
            {
              role: 'Legal Intake Specialist',
              tone: 'Professional Male',
              desc: 'Clear, authoritative tone for consultation requests and case screening.',
              tag: 'Legal & Consulting'
            },
            {
              role: 'Property Consultant',
              tone: 'Professional Female',
              desc: 'Engaging, approachable tone for real estate inquiries and showings.',
              tag: 'Real Estate'
            },
            {
              role: 'Service Dispatch Agent',
              tone: 'Professional Male',
              desc: 'Confident, decisive tone for HVAC, plumbing, and home service calls.',
              tag: 'Home Services'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#050507] border border-white/10 p-5 space-y-3 relative group">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-xs font-mono text-[#00d4ff] font-bold uppercase">
                  {item.tag}
                </span>
              </div>
              <h3 className="text-sm font-bold text-white font-sans">{item.role}</h3>
              <p className="text-xs font-mono text-[#94a3b8] font-bold">{item.tone}</p>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Supported Languages banner */}
        <div className="bg-[#050507] border border-white/10 p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-300">
            <Globe className="w-4 h-4 text-[#00d4ff] shrink-0" />
            <span><strong className="text-white">Supported Languages:</strong> English • French • Spanish • Arabic (MSA, Gulf, Moroccan)</span>
          </div>
          <span className="text-[#00d4ff] font-bold text-[11px] whitespace-nowrap">Included in Full Deployment</span>
        </div>
      </div>

      {/* EDIT 5: EXPERIENCE PEXEK VOICE AI SECTION */}
      <div className="space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-mono font-bold text-[#00d4ff] uppercase tracking-wider">
            EXPERIENCE PEXEK VOICE AI
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase">
            Experience PEXEK Voice AI
          </h2>
          <p className="text-slate-300 text-sm font-sans">
            Review the interactive call transcript below or schedule a private live demonstration with our deployment team.
          </p>
        </div>

        {/* WORKFLOW STEP GRAPHIC */}
        <div className="bg-[#0a0e1a] border border-white/10 p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-xs font-mono text-[#00d4ff] font-bold uppercase">
              Autonomous Call Handling Architecture
            </span>
            <span className="text-xs font-mono text-slate-400">
              6-Step Automated Workflow
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { num: 1, title: 'Incoming Call', icon: PhoneCall },
              { num: 2, title: 'AI Answers', icon: Mic },
              { num: 3, title: 'Lead Qualified', icon: Sparkles },
              { num: 4, title: 'Appt Booked', icon: Calendar },
              { num: 5, title: 'CRM Updated', icon: Database },
              { num: 6, title: 'WhatsApp Sent', icon: MessageSquare }
            ].map((s) => {
              const IconComp = s.icon;
              return (
                <div
                  key={s.num}
                  className="p-3 text-center space-y-1 bg-[#050507] border border-white/10 hover:border-[#00d4ff]/50 transition-all"
                >
                  <div className="flex items-center justify-center mb-1">
                    <span className="w-6 h-6 rounded-full text-[10px] font-mono font-bold flex items-center justify-center bg-[#00d4ff] text-black">
                      {s.num}
                    </span>
                  </div>
                  <span className="block text-[11px] font-bold text-slate-200 font-mono">
                    {s.title}
                  </span>
                  <span className="block text-[9px] font-mono text-[#00d4ff] font-bold">
                    Automated
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* TRANSCRIPT VIEW + LIVE DEMO CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Call Transcript Preview (7 cols) */}
          <div className="lg:col-span-7 bg-[#0d1117] border border-white/10 p-6 sm:p-8 space-y-6">
            
            {/* EDIT 6: TYPICAL 60-SECOND CONVERSATION LABEL */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <span className="text-[12px] font-mono text-[#94a3b8] uppercase tracking-[0.1em] font-bold block">
                  TYPICAL 60-SECOND AI CONVERSATION
                </span>
                <p className="text-xs text-white font-bold font-sans mt-0.5">
                  Dental Emergency Intake & Booking Scenario
                </p>
              </div>
              <span className="text-[10px] font-mono bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/30 px-2 py-1 font-bold">
                PEXEK VoiceOS™
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs max-h-[420px] overflow-y-auto pr-2">
              {transcriptLines.map((line) => (
                <div
                  key={line.id}
                  className={`p-3.5 border-l-2 ${
                    line.speaker.includes('AI Agent')
                      ? 'border-[#00d4ff] bg-[#00d4ff]/5 text-white'
                      : 'border-white/20 bg-[#050507] text-[#94a3b8]'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                    <span className={line.speaker.includes('AI Agent') ? 'text-[#00d4ff] font-bold' : 'text-slate-300'}>
                      [{line.time}] {line.speaker}
                    </span>
                    <span className="text-[9px] bg-white/5 px-1.5 py-0.5">Step 0{line.step}</span>
                  </div>
                  <p className="text-xs leading-relaxed">{line.text}</p>
                </div>
              ))}
            </div>

            {/* Technical Output Toggle */}
            <div className="border-t border-white/10 pt-3">
              <button
                onClick={() => setShowTechOutput(!showTechOutput)}
                className="text-xs font-mono text-slate-400 hover:text-[#00d4ff] flex items-center justify-between w-full py-1"
              >
                <span>{showTechOutput ? '▲ Hide Advanced Technical Output' : '▼ View Advanced Technical Output (JSON Metadata)'}</span>
                <span className="text-[10px] bg-white/5 px-2 py-0.5">System Specs</span>
              </button>

              {showTechOutput && (
                <div className="mt-3 p-3 bg-[#050507] border border-white/10 text-[10px] font-mono text-green-400 overflow-x-auto max-h-40">
                  <pre>{JSON.stringify({
                    call_id: "call_pexek_98231a",
                    intent: "emergency_dental_intake",
                    confidence: 0.98,
                    entities: {
                      patient_name: "Michael Vance",
                      dob: "1988-10-12",
                      insurance: "Delta Dental",
                      urgency: "critical_pain"
                    },
                    actions_executed: [
                      { service: "Dentrix_PMS", action: "reserve_slot", time: "15:15" },
                      { service: "HubSpot_CRM", action: "create_lead", score: 95 },
                      { service: "Twilio_WhatsApp", action: "send_confirmation" }
                    ]
                  }, null, 2)}</pre>
                </div>
              )}
            </div>

            <p className="text-[11px] text-slate-400 font-mono italic pt-1">
              * Illustrative scenario based on common customer call flows.
            </p>
          </div>

          {/* Right Column: Schedule Live Demonstration (5 cols) */}
          <div className="lg:col-span-5 bg-[#0a0e1a] border-2 border-[#00d4ff] p-6 sm:p-8 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-[#00d4ff] uppercase block">DIRECT DEMONSTRATION</span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white uppercase">
                Schedule Live Demonstration
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Experience a real outbound or inbound AI voice call on your own phone. During your 30-minute strategy audit, our team will configure a live AI voice agent tailored directly to your industry and run a real call with you.
              </p>
            </div>

            <div className="space-y-2.5 text-xs font-mono text-slate-300">
              <div className="flex items-start gap-2">
                <span className="text-[#00d4ff] font-bold">✓</span>
                <span>Real phone call test delivered directly to your device</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#00d4ff] font-bold">✓</span>
                <span>Customized to your specific business and call objections</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#00d4ff] font-bold">✓</span>
                <span>30 minutes, zero pitch deck, pure functional walkthrough</span>
              </div>
            </div>

            <button
              onClick={onOpenAuditModal}
              className="w-full btn-pexek-primary text-xs font-bold uppercase tracking-wider py-4 shadow-xl flex items-center justify-center gap-2"
            >
              <span>📅 Schedule Live Demonstration →</span>
            </button>

            <p className="text-[11px] text-slate-400 text-center font-mono">
              Free setup analysis • No credit card required
            </p>
          </div>

        </div>
      </div>

      {/* EDIT 7: PERSONA CATALOG — EVERGREEN CATEGORIES */}
      <div className="bg-[#0a0e1a] border border-white/10 p-8 sm:p-12 space-y-8">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="text-xs font-mono font-bold text-[#00d4ff] uppercase">PERSONA CATALOG</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase">
            Deploy AI Voices That Match Your Brand
          </h2>
          <p className="text-slate-300 text-sm font-sans">
            Our voice engine supports customizable natural tones optimized for appointment booking, lead qualification, and customer support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              role: 'Friendly Reception',
              tagline: 'Warm & Welcoming',
              desc: 'Natural, approachable tone for general customer service and front-desk calls.'
            },
            {
              role: 'Professional Reception',
              tagline: 'Clear & Articulate',
              desc: 'Confident tone for legal intake, consulting, and B2B appointment setting.'
            },
            {
              role: 'Luxury Brand Tone',
              tagline: 'Polished & Refined',
              desc: 'Upscale cadence for high-end real estate, private healthcare, and premium services.'
            },
            {
              role: 'Sales Qualification',
              tagline: 'Energetic & Persuasive',
              desc: 'Results-oriented tone for lead conversion and outbound opportunity calls.'
            },
            {
              role: 'Customer Support',
              tagline: 'Patient & Empathetic',
              desc: 'Steady, reassuring tone for troubleshooting, claims, and patient follow-ups.'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#050507] border border-white/10 p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-[#00d4ff] font-bold uppercase tracking-wider block">
                  {item.tagline}
                </span>
                <h3 className="text-base font-bold text-white font-sans">{item.role}</h3>
                <p className="text-xs text-[#94a3b8] leading-relaxed font-sans">{item.desc}</p>
              </div>
              <button
                onClick={onOpenAuditModal}
                className="w-full text-left text-xs font-mono text-[#00d4ff] hover:underline font-bold pt-2 border-t border-white/5"
              >
                Select For Deployment →
              </button>
            </div>
          ))}
        </div>

        <div className="text-center border-t border-white/10 pt-6">
          <span className="text-xs font-mono text-[#00d4ff] font-bold uppercase tracking-wider bg-[#00d4ff]/10 border border-[#00d4ff]/30 px-4 py-2">
            100+ Languages & Regional Dialects Available
          </span>
        </div>
      </div>

      {/* EDIT 8: SIMPLIFIED ARABIC SECTION */}
      <div className="bg-[#0a0e1a] border-l-4 border-[#00d4ff] border-y border-r border-white/10 p-8 sm:p-12 space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono font-bold text-[#00d4ff] uppercase">MENA REGIONAL SUPPORT</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase">
              Arabic AI Voice Support
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed font-sans">
              Natural Arabic voice agents for MENA markets. Supports Modern Standard Arabic, Gulf Arabic, Moroccan Darija, French, and English.
            </p>
            <p className="text-xs text-[#94a3b8] leading-relaxed font-sans">
              Perfect for dental clinics, healthcare providers, real estate agencies, and service businesses across Morocco, UAE, Saudi Arabia, and the broader MENA region.
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <button
              onClick={onOpenAuditModal}
              className="w-full md:w-auto btn-pexek-primary text-xs font-bold uppercase tracking-wider px-6 py-3.5"
            >
              Explore Arabic AI Voice Deployment →
            </button>
          </div>
        </div>
      </div>

      {/* EDIT 9 & 10: FINAL CTA (NO GUARANTEE WORD) */}
      <div className="bg-[#0d1117] border-2 border-[#00d4ff] p-8 sm:p-12 text-center space-y-6 max-w-4xl mx-auto">
        <span className="text-xs font-mono font-bold text-[#00d4ff] uppercase">READY FOR REVENUE AUTOMATION?</span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white uppercase">
          Ready to Hear AI Voice for Your Business?
        </h2>
        <p className="text-slate-300 text-sm max-w-2xl mx-auto font-sans">
          Book a 30-minute strategy audit and we'll demonstrate a live AI voice call tailored to your industry.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-xs font-mono text-slate-300">
          <span className="flex items-center gap-1.5"><strong className="text-[#00d4ff]">✓</strong> Custom voice configuration</span>
          <span className="flex items-center gap-1.5"><strong className="text-[#00d4ff]">✓</strong> Industry-specific call flows</span>
          <span className="flex items-center gap-1.5"><strong className="text-[#00d4ff]">✓</strong> 14-day deployment timeline</span>
        </div>

        <div>
          <button
            onClick={onOpenAuditModal}
            className="btn-pexek-primary text-xs font-bold uppercase tracking-wider px-8 py-4 shadow-xl"
          >
            Book Strategy Audit →
          </button>
        </div>
      </div>

    </div>
  );
}
