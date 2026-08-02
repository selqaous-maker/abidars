import { PSEOIndustry, PSEOLocation, PSEOIntegration, PSEOService } from '../types';

export const PSEO_SERVICES: Record<string, PSEOService> = {
  'ai-receptionist': {
    slug: 'ai-receptionist',
    name: '24/7 AI Receptionist',
    tagline: 'Multi-Line Autonomous Front Desk & Call Triage',
    heroHeadline: '24/7 Autonomous AI Receptionist & Multi-Line Telephony',
    valueProp: 'Zero hold times, 100% answer rate on line 1, and instant caller triage in sub-450ms.',
    metrics: [
      { label: 'Answer Rate', value: '100%', detail: 'Zero missed inbound calls' },
      { label: 'Speech Latency', value: '<450ms', detail: 'Natural conversation flow' },
      { label: 'Cost Reduction', value: '70%', detail: 'Compared to human call centers' }
    ],
    keyFeatures: [
      'Multi-line simultaneous call handling',
      'Instant call screening & caller triage',
      'Real-time knowledge base lookups',
      'Live call transfer to staff mobile phones',
      'Automated SMS follow-up dispatches'
    ]
  },
  'lead-qualification-ai': {
    slug: 'lead-qualification-ai',
    name: 'AI Lead Qualification',
    tagline: 'Instant Speed-to-Lead Scoring & Intent Screening',
    heroHeadline: 'Speed-to-Lead Voice AI & Intent Qualification System',
    valueProp: 'Engage inbound calls in under 60 seconds, score buyer intent, and route hot leads directly to sales reps.',
    metrics: [
      { label: 'Response Time', value: '<60s', detail: 'Instant prospect callback' },
      { label: 'Qualification Rate', value: '94%', detail: 'Accurate budget & timeline filter' },
      { label: 'Conversion Lift', value: '+3.4x', detail: 'Pipeline conversion acceleration' }
    ],
    keyFeatures: [
      'Custom BANT/SPIN qualification rules',
      'Spam & vendor solicitation filtering',
      'Live phone transfer for high-intent leads',
      'Instant CRM deal creation with transcripts',
      'Automated qualification scoring matrix'
    ]
  },
  'appointment-booking-ai': {
    slug: 'appointment-booking-ai',
    name: 'AI Appointment Booking',
    tagline: 'Autonomous Calendar Scheduling & Confirmation Engine',
    heroHeadline: 'Real-Time Voice AI Appointment & Calendar Scheduler',
    valueProp: 'Book appointments directly into live calendars during phone calls with bi-directional CRM synchronization.',
    metrics: [
      { label: 'Booking Speed', value: '45 sec', detail: 'Average phone reservation duration' },
      { label: 'No-Show Drop', value: '-65%', detail: 'Automated SMS/Voice reminders' },
      { label: 'Calendar Fill', value: '98%', detail: 'Hygiene & schedule optimization' }
    ],
    keyFeatures: [
      'Live slot availability queries',
      'Multi-provider calendar routing',
      'Automated SMS & WhatsApp confirmations',
      'Rescheduling & cancellation management',
      'EHR & CRM appointment locking'
    ]
  },
  'workflow-automation': {
    slug: 'workflow-automation',
    name: 'CRM Workflow Automation',
    tagline: 'Post-Call JSON Webhook & Record Dispatch Platform',
    heroHeadline: 'Post-Call Voice Data Pipeline & Automated CRM Logging',
    valueProp: 'Transcribe call audio, extract key metadata, and fire structured webhooks to HubSpot, Salesforce, or custom endpoints.',
    metrics: [
      { label: 'Sync Speed', value: '1.2 sec', detail: 'Post-call webhook delivery' },
      { label: 'Data Accuracy', value: '99.8%', detail: 'Entity & intent extraction' },
      { label: 'Admin Time Saved', value: '15 hrs/wk', detail: 'Per front-desk staff member' }
    ],
    keyFeatures: [
      'Deep transcript entity extraction',
      'Custom JSON webhook payloads',
      'HubSpot, Salesforce, & Zapier integrations',
      'Automated task & follow-up dispatches',
      'Call recording audit logging'
    ]
  },
  'voice-ai-agent': {
    slug: 'voice-ai-agent',
    name: 'Enterprise Voice AI Agent',
    tagline: 'Custom Neural Telephony & Autonomous Dialogue Architecture',
    heroHeadline: 'Enterprise-Grade Autonomous Voice AI Agent Infrastructure',
    valueProp: 'Full-duplex speech synthesis, sub-450ms speech-to-speech turnaround, and SOC 2 security compliance.',
    metrics: [
      { label: 'Vocal Realism', value: '99.1%', detail: 'Indistinguishable human cadence' },
      { label: 'Call Volume', value: 'Unlimited', detail: 'Elastic cloud container scaling' },
      { label: 'Compliance', value: 'SOC 2 / HIPAA', detail: 'Bank-level data protection' }
    ],
    keyFeatures: [
      'Custom neural vocal clone engineering',
      'SIP Trunking & PSTN carrier routing',
      'Deterministic fallback dialogue trees',
      'Real-time sentiment & urgency analysis',
      'Managed 24/7 technical optimization'
    ]
  }
};

export const PSEO_INDUSTRIES: PSEOIndustry[] = [
  {
    slug: 'dental',
    name: 'Dental Practice',
    pluralName: 'Dental Practices & Oral Surgery Clinics',
    category: 'Healthcare & Wellness',
    tagline: 'Automated Patient Intake & Hygiene Recall Scheduling',
    heroHeadline: 'AI Receptionist & Patient Intake for Dental Practices',
    avgMonthlyMissedCalls: 140,
    avgCallValue: 850,
    topPainPoints: [
      'High front-desk phone volume during morning check-ins',
      'After-hours dental emergency calls going unanswered',
      'Hygiene recall appointments dropping off',
      'Unfilled last-minute schedule cancellations'
    ],
    capabilities: [
      'Dental emergency triage and after-hours call routing',
      'Hygiene recall appointment scheduling via PMS sync',
      'Insurance provider pre-screening & basic coverage FAQs',
      'New patient registration & intake info collection'
    ],
    primaryCrm: 'Dentrix',
    secondaryCrms: ['Eaglesoft', 'Open Dental', 'NexHealth', 'Carestack'],
    transcriptSample: {
      callerRole: 'Dental Patient with Toothache',
      dialogue: [
        { speaker: 'Caller', text: 'Hi, I woke up with severe tooth pain on my lower molar. Do you have any emergency openings today?', timestamp: '00:02' },
        { speaker: 'PEXEK AI', text: 'I am so sorry to hear you are in pain. I can help you immediately. We have an emergency slot available today at 2:15 PM with Dr. Reynolds. Shall I lock that in for you?', timestamp: '00:06' },
        { speaker: 'Caller', text: 'Yes please, 2:15 PM works. Do you take Delta Dental insurance?', timestamp: '00:11' },
        { speaker: 'PEXEK AI', text: 'Yes, we are in-network with Delta Dental Premier. I have reserved 2:15 PM for you. I just sent an SMS confirmation to your mobile number with parking directions.', timestamp: '00:16' }
      ]
    },
    faqs: [
      {
        question: 'How does PEXEK integrate with Dentrix or Eaglesoft?',
        answer: 'PEXEK connects bi-directionally via direct PMS webhooks and secure API bridges. It reads real-time hygiene chair availability and logs new appointments instantly without human intervention.'
      },
      {
        question: 'Can PEXEK handle after-hours dental emergencies?',
        answer: 'Yes. PEXEK answers after-hours calls instantly, screens for severe symptoms (trauma, severe pain, swelling), and transfers urgent cases directly to the call doctor while taking notes for non-urgent requests.'
      },
      {
        question: 'Is PEXEK HIPAA compliant for dental patient data?',
        answer: 'Absolutely. PEXEK uses AES-256 resting encryption, TLS 1.3 transit security, and operates within HIPAA-aligned data processing environments.'
      }
    ]
  },
  {
    slug: 'healthcare',
    name: 'Healthcare & Medical Clinic',
    pluralName: 'Medical Practices, Specialty Clinics & Surgery Centers',
    category: 'Healthcare & Wellness',
    tagline: '24/7 Patient Triage & Clinic Appointment Scheduling',
    heroHeadline: '24/7 AI Receptionist for Medical Clinics & Healthcare Systems',
    avgMonthlyMissedCalls: 220,
    avgCallValue: 650,
    topPainPoints: [
      'Overwhelmed reception staff during peak clinic hours',
      'Patients waiting on long phone holds for prescription refills',
      'High no-show rates due to lack of timely confirmation',
      'Non-emergency callers blocking lines during urgent check-ins'
    ],
    capabilities: [
      'Automated medical appointment scheduling & rescheduling',
      'Prescription refill request intake & EHR logging',
      'Office directions, office hours, and insurance policy FAQs',
      'Urgent symptom screening & triage routing'
    ],
    primaryCrm: 'AthenaHealth',
    secondaryCrms: ['Epic', 'eClinicalWorks', 'Kareo', 'DrChrono'],
    transcriptSample: {
      callerRole: 'Clinic Patient',
      dialogue: [
        { speaker: 'Caller', text: 'Hello, I need to reschedule my annual wellness checkup scheduled for Thursday.', timestamp: '00:01' },
        { speaker: 'PEXEK AI', text: 'I can certainly help you reschedule that checkup. I see your current slot on Thursday at 10 AM. Would next Tuesday at 9:30 AM or next Wednesday at 2 PM work better for you?', timestamp: '00:05' },
        { speaker: 'Caller', text: 'Tuesday at 9:30 AM is perfect.', timestamp: '00:09' },
        { speaker: 'PEXEK AI', text: 'Done! I have rescheduled your appointment to Tuesday at 9:30 AM with Dr. Patel and updated your clinic record. You will receive an SMS reminder 24 hours prior.', timestamp: '00:14' }
      ]
    },
    faqs: [
      {
        question: 'Can PEXEK screen patient calls according to clinic triage protocols?',
        answer: 'Yes. PEXEK follows deterministic medical triage algorithms configured by your clinical directors, routing emergency calls to 911/urgent lines while handling routine appointments autonomously.'
      },
      {
        question: 'How quickly can PEXEK be deployed for a multi-doctor clinic?',
        answer: 'Full deployment takes 14 days under our managed onboarding framework, including EHR testing and phone number SIP forwarding.'
      }
    ]
  },
  {
    slug: 'legal',
    name: 'Law Firm & Legal Practice',
    pluralName: 'Law Firms, Personal Injury Attorneys & Legal Advocates',
    category: 'Professional & Legal Services',
    tagline: '24/7 Case Qualification & Consultation Booking',
    heroHeadline: 'AI Legal Voice Intake & Receptionist for Law Firms',
    avgMonthlyMissedCalls: 95,
    avgCallValue: 7500,
    topPainPoints: [
      'High-value personal injury leads hanging up on voicemails',
      'Attorneys losing focus during client phone interruptions',
      'Failure to pre-screen for legal conflicts of interest',
      'Slow response times causing potential clients to call competitors'
    ],
    capabilities: [
      'Instant legal intake pre-screening & case qualification',
      'Attorney consultation calendar booking with payment links',
      'Conflict of interest pre-check information gathering',
      'Immediate text dispatch of intake questionnaires'
    ],
    primaryCrm: 'Clio',
    secondaryCrms: ['MyCase', 'PracticePanther', 'LawPay', 'Salesforce'],
    transcriptSample: {
      callerRole: 'Personal Injury Claimant',
      dialogue: [
        { speaker: 'Caller', text: 'I was in a car accident yesterday afternoon and need to speak to an attorney about my medical bills.', timestamp: '00:03' },
        { speaker: 'PEXEK AI', text: 'I understand this is a stressful situation. I can help connect you with our legal team right away. Were you or anyone else injured in the accident, and did law enforcement file a police report?', timestamp: '00:08' },
        { speaker: 'Caller', text: 'Yes, I went to the ER with neck pain, and the police officer filed a report at the scene.', timestamp: '00:13' },
        { speaker: 'PEXEK AI', text: 'Thank you for that information. I am booking a free consultation for you with Lead Attorney Vance tomorrow at 10:00 AM. I am also sending a secure link to your phone to upload the police report.', timestamp: '00:18' }
      ]
    },
    faqs: [
      {
        question: 'How does PEXEK handle confidential legal communications?',
        answer: 'PEXEK operates with strict encryption standards (TLS 1.3 / AES-256) and isolates law firm data with enterprise tenant boundary protection.'
      },
      {
        question: 'Can PEXEK collect consultation fees over the phone?',
        answer: 'Yes, PEXEK can trigger an immediate LawPay or Stripe SMS payment link during the call to confirm paid legal consultations.'
      }
    ]
  },
  {
    slug: 'real-estate',
    name: 'Real Estate Brokerage',
    pluralName: 'Real Estate Brokerages, Property Managers & Agencies',
    category: 'Real Estate & Property',
    tagline: 'Instant Buyer Qualification & Showing Calendar Scheduling',
    heroHeadline: 'AI Phone Receptionist & Buyer Lead Qualification for Real Estate',
    avgMonthlyMissedCalls: 180,
    avgCallValue: 3500,
    topPainPoints: [
      'Agents missing buyer calls while conducting property showings',
      'Unqualified buyers wasting agent time on high-end listings',
      'Delayed callback times losing hot leads to rival brokerages',
      'After-hours tenant maintenance requests for property managers'
    ],
    capabilities: [
      '8-second buyer speed-to-lead qualification',
      'Property showing calendar scheduling directly into agent calendars',
      'Pre-approval status, budget, & timeline intent extraction',
      'Hot-lead live transfer directly to listing agent mobile phone'
    ],
    primaryCrm: 'FollowUpBoss',
    secondaryCrms: ['kvCORE', 'Lofty', 'Salesforce', 'AppFolio'],
    transcriptSample: {
      callerRole: 'High-Intent Property Buyer',
      dialogue: [
        { speaker: 'Caller', text: 'Hi, I saw the listing sign on 442 Fairview Avenue. Is it still available for a tour?', timestamp: '00:02' },
        { speaker: 'PEXEK AI', text: 'Yes, 442 Fairview is active on the market! It is a 4-bed, 3-bath property listed at $890,000. Are you currently pre-approved for mortgage financing or purchasing cash?', timestamp: '00:06' },
        { speaker: 'Caller', text: 'Yes, pre-approved up to $950,000 with Chase Bank.', timestamp: '00:10' },
        { speaker: 'PEXEK AI', text: 'Wonderful. Agent Marcus has an open showing window tomorrow at 4:00 PM. Would you like me to book a private showing for you then?', timestamp: '00:15' }
      ]
    },
    faqs: [
      {
        question: 'Does PEXEK integrate with Follow Up Boss and kvCORE?',
        answer: 'Yes. Every buyer call transcript, pre-approval status, and showing request is instantly logged as a new contact and deal in your CRM.'
      },
      {
        question: 'What happens if a caller asks about a specific listing detail?',
        answer: 'PEXEK queries your MLS feed or property knowledge base in under 300ms, providing exact bedroom counts, HOA fees, school districts, and showing availability.'
      }
    ]
  },
  {
    slug: 'home-services',
    name: 'Home Services Contractor',
    pluralName: 'Home Service Contractors, Handymen & Specialty Trades',
    category: 'Trade & Field Services',
    tagline: '24/7 Dispatch & Service Window Scheduling',
    heroHeadline: '24/7 AI Phone Answering & Dispatch for Home Service Contractors',
    avgMonthlyMissedCalls: 190,
    avgCallValue: 1200,
    topPainPoints: [
      'Missing lucrative late-night service calls',
      'Dispatchers struggling to manage job routing during high demand',
      'Technicians wasting time driving to unconfirmed service calls',
      'Competitors capturing missed calls within 5 minutes'
    ],
    capabilities: [
      '24/7 emergency dispatch alert webhooks for on-call techs',
      'Diagnostic fee quoting & service window booking',
      'Job address & problem description capture',
      'Direct integration with ServiceTitan, Housecall Pro, & Jobber'
    ],
    primaryCrm: 'ServiceTitan',
    secondaryCrms: ['HousecallPro', 'Jobber', 'Workiz', 'Zapier'],
    transcriptSample: {
      callerRole: 'Homeowner Requiring Repair',
      dialogue: [
        { speaker: 'Caller', text: 'Hi, I have a home repair emergency and need a technician out today.', timestamp: '00:02' },
        { speaker: 'PEXEK AI', text: 'We treat home repair emergencies as a priority dispatch. We have an technician available between 2:00 PM and 4:00 PM today. Shall I book that dispatch slot for you?', timestamp: '00:07' },
        { speaker: 'Caller', text: 'Yes please, that time works.', timestamp: '00:11' },
        { speaker: 'PEXEK AI', text: 'Great! I have reserved your 2:00 PM dispatch window and texted you technician arrival tracking.', timestamp: '00:16' }
      ]
    },
    faqs: [
      {
        question: 'Does PEXEK connect directly to ServiceTitan and Housecall Pro?',
        answer: 'Yes. PEXEK creates new job records, assigns customer accounts, and logs dispatch urgency directly into your field service platform.'
      }
    ]
  },
  {
    slug: 'hvac',
    name: 'HVAC & Air Conditioning Contractor',
    pluralName: 'HVAC Contractors & Heating & Cooling Specialists',
    category: 'Trade & Field Services',
    tagline: '24/7 Emergency AC & Heating Dispatch Engine',
    heroHeadline: 'AI Voice Receptionist for HVAC & Cooling Contractors',
    avgMonthlyMissedCalls: 210,
    avgCallValue: 1650,
    topPainPoints: [
      'Extreme call spikes during heatwaves and sub-zero freezes',
      'Losing $5k+ complete system replacement jobs to voicemail hang-ups',
      'On-call technicians woken up by non-emergency maintenance calls'
    ],
    capabilities: [
      'AC & heating emergency triage and on-call tech alerting',
      'Seasonal maintenance checkup calendar booking',
      'System replacement estimate scheduling & diagnostic fee quoting',
      'Automatic Jobber & ServiceTitan dispatch sync'
    ],
    primaryCrm: 'ServiceTitan',
    secondaryCrms: ['HousecallPro', 'Jobber', 'Workiz'],
    transcriptSample: {
      callerRole: 'Homeowner with Broken AC',
      dialogue: [
        { speaker: 'Caller', text: 'My AC unit stopped blowing cold air and it is 98 degrees in the house!', timestamp: '00:02' },
        { speaker: 'PEXEK AI', text: 'We prioritize total cooling loss as an emergency service call. We have an emergency HVAC technician in your neighborhood available between 5 PM and 7 PM tonight. Shall I dispatch tech Dan?', timestamp: '00:07' },
        { speaker: 'Caller', text: 'Yes, please dispatch Dan right away!', timestamp: '00:11' },
        { speaker: 'PEXEK AI', text: 'I have dispatched Dan to your address for 5 PM and sent an SMS confirmation to your mobile phone.', timestamp: '00:16' }
      ]
    },
    faqs: [
      {
        question: 'How does PEXEK handle extreme weather call surges for HVAC companies?',
        answer: 'PEXEK scales elastically to handle over 100 simultaneous inbound calls without putting callers on hold or dropping line quality.'
      }
    ]
  },
  {
    slug: 'plumbing',
    name: 'Plumbing & Emergency Drain Services',
    pluralName: 'Plumbing Contractors, Drain Specialists & Master Plumbers',
    category: 'Trade & Field Services',
    tagline: 'Instant Leak & Emergency Flood Dispatch Voice AI',
    heroHeadline: '24/7 AI Phone Answering for Plumbing Companies',
    avgMonthlyMissedCalls: 230,
    avgCallValue: 1450,
    topPainPoints: [
      'Burst pipe and water main emergencies happening at 2 AM',
      'Frustrated callers hanging up when hearing answering machines',
      'Dispatchers spending minutes collecting address details manually'
    ],
    capabilities: [
      'Water damage & flood emergency instant escalation',
      'Drain cleaning & sewer camera inspection appointment booking',
      'Dispatch fee quoting and job location confirmation',
      'Live call transfer to night-shift foreman'
    ],
    primaryCrm: 'HousecallPro',
    secondaryCrms: ['ServiceTitan', 'Jobber', 'Workiz'],
    transcriptSample: {
      callerRole: 'Homeowner with Water Leak',
      dialogue: [
        { speaker: 'Caller', text: 'Help! I have water leaking from under my kitchen sink and it won’t stop!', timestamp: '00:02' },
        { speaker: 'PEXEK AI', text: 'First, please locate your main water shutoff valve under the sink or main meter to turn off the water flow. I am dispatching our emergency plumber right now for an immediate arrival.', timestamp: '00:07' }
      ]
    },
    faqs: [
      {
        question: 'Can PEXEK advise callers on shut-off valve locations during water leaks?',
        answer: 'Yes! PEXEK can deliver immediate emergency safety instructions while simultaneously triggering dispatch notifications to your plumbers.'
      }
    ]
  },
  {
    slug: 'roofing',
    name: 'Roofing & Exterior Services',
    pluralName: 'Roofing Contractors, Storm Repair & Exterior Specialists',
    category: 'Trade & Field Services',
    tagline: 'Storm Inspection Booking & High-Ticket Lead Qualification',
    heroHeadline: 'AI Voice Receptionist & Lead Intake for Roofing Contractors',
    avgMonthlyMissedCalls: 165,
    avgCallValue: 9800,
    topPainPoints: [
      'Missing $10k-$30k roof replacement leads during post-storm surges',
      'Roofers on ladders unable to answer incoming phone calls',
      'Insurance claim inquiries overwhelming front desk staff'
    ],
    capabilities: [
      'Storm damage free roof inspection calendar booking',
      'Insurance claim pre-screening & policy information intake',
      'Emergency tarping dispatch qualification',
      'Roofing CRM lead auto-logging with photo upload links'
    ],
    primaryCrm: 'AccuLynx',
    secondaryCrms: ['JobNimbus', 'Rooflink', 'ServiceTitan', 'HubSpot'],
    transcriptSample: {
      callerRole: 'Homeowner with Hail Damage',
      dialogue: [
        { speaker: 'Caller', text: 'We just had a hail storm and I see missing shingles on my roof.', timestamp: '00:02' },
        { speaker: 'PEXEK AI', text: 'We offer free post-storm drone roof inspections! Our inspector can visit your property tomorrow at 10 AM or 2 PM. Which slot works for you?', timestamp: '00:07' }
      ]
    },
    faqs: [
      {
        question: 'Does PEXEK integrate with AccuLynx and JobNimbus?',
        answer: 'Yes. PEXEK syncs inspection dates, customer addresses, and insurance policy details directly into AccuLynx and JobNimbus.'
      }
    ]
  },
  {
    slug: 'med-spa',
    name: 'Med Spa & Aesthetics Clinic',
    pluralName: 'Med Spas, Medical Aesthetics & Cosmetic Clinics',
    category: 'Healthcare & Wellness',
    tagline: 'Consultation Booking & Treatment Package Inquiries',
    heroHeadline: 'AI Receptionist for Med Spas & Aesthetic Medicine Clinics',
    avgMonthlyMissedCalls: 155,
    avgCallValue: 1250,
    topPainPoints: [
      'Estheticians and injectors unable to pick up phone during treatments',
      'High-value Botox, filler, and laser consultations lost after hours',
      'Frequent price inquiries delaying front desk scheduling'
    ],
    capabilities: [
      'Cosmetic consultation calendar booking with deposit links',
      'Botox, dermal filler, laser, & body contouring FAQ responses',
      'Pre-treatment preparation guidelines dispatches via SMS',
      'Patient financing pre-screening options'
    ],
    primaryCrm: 'Boulevard',
    secondaryCrms: ['Zenoti', 'Vagaro', 'Mindbody', 'PatientNow'],
    transcriptSample: {
      callerRole: 'Prospective Med Spa Client',
      dialogue: [
        { speaker: 'Caller', text: 'Hi, I would like to book a consultation for lip filler and skin rejuvenation.', timestamp: '00:02' },
        { speaker: 'PEXEK AI', text: 'We would love to welcome you! Master Injector Sarah has consultation openings this Friday at 11:00 AM or 3:30 PM. Would either of those times suit your schedule?', timestamp: '00:07' }
      ]
    },
    faqs: [
      {
        question: 'Can PEXEK collect consultation deposit payments?',
        answer: 'Yes, PEXEK sends an instant payment link via text during the call to reserve paid aesthetic consultations.'
      }
    ]
  },
  {
    slug: 'chiropractic',
    name: 'Chiropractic & Spine Care Clinic',
    pluralName: 'Chiropractic Clinics, Spine Centers & Physical Rehab',
    category: 'Healthcare & Wellness',
    tagline: 'New Patient Intake & Adjustment Session Scheduling',
    heroHeadline: 'AI Phone Answering & Intake for Chiropractic Practices',
    avgMonthlyMissedCalls: 130,
    avgCallValue: 920,
    topPainPoints: [
      'Front desk staff busy taking spinal x-rays or assisting patients',
      'New patient inquiries falling off due to unanswered calls',
      'Auto-accident and personal injury case intake friction'
    ],
    capabilities: [
      'New patient exam & spinal assessment appointment booking',
      'Insurance coverage & PI claim pre-screening',
      'Adjustment schedule confirmations & automated SMS reminders',
      'ChiroTouch & EHR integration'
    ],
    primaryCrm: 'ChiroTouch',
    secondaryCrms: ['JaneApp', 'Kareo', 'DrChrono'],
    transcriptSample: {
      callerRole: 'New Patient with Sciatica Pain',
      dialogue: [
        { speaker: 'Caller', text: 'Hi, I am experiencing severe lower back sciatica pain. Do you take new patients?', timestamp: '00:02' },
        { speaker: 'PEXEK AI', text: 'Yes, we are accepting new patients! We can perform a comprehensive spinal exam and relief adjustment today at 3:15 PM. Shall I reserve that for you?', timestamp: '00:07' }
      ]
    },
    faqs: [
      {
        question: 'Does PEXEK sync with ChiroTouch and Jane App?',
        answer: 'Yes, PEXEK integrates with major chiropractic EHRs to record new patient info and lock treatment appointments.'
      }
    ]
  },
  {
    slug: 'veterinary',
    name: 'Veterinary Clinic & Animal Hospital',
    pluralName: 'Veterinary Clinics, Animal Hospitals & Emergency Vet Care',
    category: 'Healthcare & Wellness',
    tagline: 'Pet Wellness Booking & Urgent Triage Voice AI',
    heroHeadline: '24/7 AI Receptionist for Veterinary Clinics & Hospitals',
    avgMonthlyMissedCalls: 175,
    avgCallValue: 580,
    topPainPoints: [
      'Vet techs overwhelmed during morning pet admissions',
      'Panicked pet owners calling after hours for poison or trauma advice',
      'Vaccination and annual wellness checkup callbacks falling behind'
    ],
    capabilities: [
      'Pet wellness & vaccination appointment scheduling',
      'Emergency pet symptom triage & ER clinic routing',
      'Prescription diet & medication refill intake',
      'Vetstar, IDEXX, & Cornerstone PMS integration'
    ],
    primaryCrm: 'IDEXX Cornerstone',
    secondaryCrms: ['Vetspire', 'eVetPractice', 'Covetrus'],
    transcriptSample: {
      callerRole: 'Pet Parent with Sick Dog',
      dialogue: [
        { speaker: 'Caller', text: 'My dog ate chocolate about 20 minutes ago! What should I do?', timestamp: '00:02' },
        { speaker: 'PEXEK AI', text: 'Chocolate ingestion requires prompt medical attention. I am transferring you immediately to our emergency vet staff, and sending the ASPCA Animal Poison Control number to your phone now.', timestamp: '00:07' }
      ]
    },
    faqs: [
      {
        question: 'How does PEXEK handle veterinary emergencies?',
        answer: 'PEXEK instantly recognizes emergency keywords (poison, trauma, breathing difficulty) and transfers calls directly to your emergency tech or local 24/7 animal ER.'
      }
    ]
  },
  {
    slug: 'automotive',
    name: 'Automotive Dealership & Service Center',
    pluralName: 'Auto Dealerships, Service Departments & Repair Shops',
    category: 'Automotive & Mobility',
    tagline: 'Service Bay Booking & Test Drive Appointment Scheduling',
    heroHeadline: 'AI Voice Receptionist for Auto Dealerships & Service Bays',
    avgMonthlyMissedCalls: 240,
    avgCallValue: 1800,
    topPainPoints: [
      'Long phone hold times at dealership service desks',
      'Missed test drive appointments from prospective car buyers',
      'Service advisors interrupted while writing repair orders',
      'Loss of recurring maintenance revenue to independent repair shops'
    ],
    capabilities: [
      'Automated service bay scheduling by vehicle VIN or model',
      'Sales department test drive calendar booking',
      'Recall lookup & maintenance package pricing FAQs',
      'Live transfer to parts department or sales managers'
    ],
    primaryCrm: 'CDKGlobal',
    secondaryCrms: ['Reynolds&Reynolds', 'VinSolutions', 'SalesforceAuto'],
    transcriptSample: {
      callerRole: 'Car Owner Needing Service',
      dialogue: [
        { speaker: 'Caller', text: 'Hi, I need to bring my 2022 Honda Accord in for a 30,000-mile service and oil change.', timestamp: '00:02' },
        { speaker: 'PEXEK AI', text: 'I can help you schedule that 30,000-mile service for your Honda Accord. Our main service bay has openings tomorrow at 8:30 AM or Thursday at 1:00 PM. Which works best?', timestamp: '00:07' },
        { speaker: 'Caller', text: 'Tomorrow at 8:30 AM works.', timestamp: '00:10' },
        { speaker: 'PEXEK AI', text: 'Excellent! I have reserved 8:30 AM tomorrow for your Accord service with Advisor Greg. I just sent your mobile phone a confirmation pass.', timestamp: '00:15' }
      ]
    },
    faqs: [
      {
        question: 'Can PEXEK handle both sales inquiries and service desk bookings?',
        answer: 'Yes. PEXEK routes buyers to sales agents after qualifying trade-in status, while handling service appointments autonomously.'
      }
    ]
  },
  {
    slug: 'business-services',
    name: 'Business Services & B2B Consulting',
    pluralName: 'B2B Consulting Firms, IT Agencies & Managed Services',
    category: 'Professional & Legal Services',
    tagline: 'Inbound Discovery Call Booking & SLA Triage',
    heroHeadline: 'AI Voice Receptionist for Business Services & B2B Agencies',
    avgMonthlyMissedCalls: 110,
    avgCallValue: 4800,
    topPainPoints: [
      'B2B prospects dropping off when reaching generic voicemail',
      'Consultants interrupted during high-value client sessions',
      'Urgent IT support tickets delayed due to phone queue friction'
    ],
    capabilities: [
      'Inbound discovery call pre-qualification & calendar scheduling',
      'IT support SLA urgency tagging and helpdesk ticket creation',
      'Vendor solicitation filtering',
      'HubSpot & Salesforce B2B CRM lead logging'
    ],
    primaryCrm: 'HubSpot',
    secondaryCrms: ['Salesforce', 'ConnectWise', 'Zendesk'],
    transcriptSample: {
      callerRole: 'VP of Operations Looking for IT Support',
      dialogue: [
        { speaker: 'Caller', text: 'Hi, our company is looking for a managed IT services provider for our 50-person office.', timestamp: '00:02' },
        { speaker: 'PEXEK AI', text: 'We specialize in 24/7 managed IT and cloud security for mid-market teams. I can arrange an initial architecture call with Principal Partner Davis. Does Thursday at 2 PM work for your team?', timestamp: '00:07' }
      ]
    },
    faqs: [
      {
        question: 'Does PEXEK integrate with ConnectWise or HubSpot?',
        answer: 'Yes. PEXEK logs discovery call transcripts directly into HubSpot deals or ConnectWise tickets instantly.'
      }
    ]
  },
  {
    slug: 'insurance',
    name: 'Insurance Agency & Brokerage',
    pluralName: 'Insurance Agencies, Independent Brokers & Underwriters',
    category: 'Financial Services',
    tagline: 'Quote Intake & Emergency Claim Triage Voice AI',
    heroHeadline: 'AI Phone Receptionist & Quote Intake for Insurance Agencies',
    avgMonthlyMissedCalls: 160,
    avgCallValue: 2400,
    topPainPoints: [
      'Policyholders calling during severe weather events for emergency claims',
      'Unanswered quote inquiries going to competing insurance brokers',
      'Agents bogged down answering simple policy billing questions'
    ],
    capabilities: [
      'Auto, home, commercial, & health insurance quote data intake',
      'Emergency claim FNOL (First Notice of Loss) recording',
      'Policy renewal & review consultation calendar booking',
      'EZLynx & Applied Epic CRM synchronization'
    ],
    primaryCrm: 'EZLynx',
    secondaryCrms: ['AppliedEpic', 'HawkSoft', 'Salesforce'],
    transcriptSample: {
      callerRole: 'Policyholder Reporting Auto Claim',
      dialogue: [
        { speaker: 'Caller', text: 'I need to report a fender bender accident under my auto policy #IN-94821.', timestamp: '00:02' },
        { speaker: 'PEXEK AI', text: 'I am here to help you log this claim right away. Was anyone injured in the collision, and is your vehicle drivable?', timestamp: '00:07' }
      ]
    },
    faqs: [
      {
        question: 'Does PEXEK sync First Notice of Loss claims to EZLynx or Applied Epic?',
        answer: 'Yes. PEXEK collects mandatory FNOL data points and updates your agency management software in real time.'
      }
    ]
  },
  {
    slug: 'financial-services',
    name: 'Financial Services & Wealth Management',
    pluralName: 'Wealth Management Firms, RIAs & Financial Planners',
    category: 'Financial Services',
    tagline: 'Confidential Client Intake & Portfolio Review Booking',
    heroHeadline: 'AI Receptionist & Client Intake for Financial Advisory Firms',
    avgMonthlyMissedCalls: 75,
    avgCallValue: 12500,
    topPainPoints: [
      'High-net-worth prospects calling while advisors are in portfolio reviews',
      'Strict SEC & FINRA compliance requirements for phone records',
      'Inefficient prospect net-worth pre-screening'
    ],
    capabilities: [
      'Pre-screening investable assets & financial goals',
      'Advisor portfolio review calendar booking',
      'Compliance-audited encrypted transcript logging',
      'Existing client priority live transfer'
    ],
    primaryCrm: 'Wealthbox',
    secondaryCrms: ['Redtail', 'SalesforceFinancial', 'eMoney'],
    transcriptSample: {
      callerRole: 'Prospective Wealth Management Client',
      dialogue: [
        { speaker: 'Caller', text: 'Hi, I am looking to roll over a $1.2M 401k into a managed portfolio and would like to speak with a senior planner.', timestamp: '00:03' },
        { speaker: 'PEXEK AI', text: 'Thank you for reaching out to PEXEK Wealth Management. We specialize in executive 401k rollovers and tax-efficient portfolio management. I can schedule an introductory consultation with Senior Advisor Miller. Does Friday at 11 AM work for you?', timestamp: '00:08' },
        { speaker: 'Caller', text: 'Friday at 11 AM works well.', timestamp: '00:12' },
        { speaker: 'PEXEK AI', text: 'Your consultation is confirmed for Friday at 11:00 AM. I have emailed a confidential questionnaire to prepare for your meeting.', timestamp: '00:16' }
      ]
    },
    faqs: [
      {
        question: 'Is PEXEK compliant with financial data privacy regulations?',
        answer: 'Yes, PEXEK supports encrypted storage, strict access control, and audit logs required for financial service compliance.'
      }
    ]
  }
];

export const PSEO_LOCATIONS: PSEOLocation[] = [
  { slug: 'new-york-ny', city: 'New York', state: 'New York', stateAbbr: 'NY', country: 'United States', region: 'Northeast', metroArea: 'Greater New York Area', businessDensity: 'Ultra High', primaryTimezone: 'EST', areaCodes: ['212', '646', '917', '718', '347'], economicFocus: 'Finance, Healthcare, Real Estate & Commercial Services', localLandmark: 'Manhattan & Tristate Area', stateCompliance: 'NY DFS & HIPAA Compliant' },
  { slug: 'los-angeles-ca', city: 'Los Angeles', state: 'California', stateAbbr: 'CA', country: 'United States', region: 'West Coast', metroArea: 'Greater Los Angeles Area', businessDensity: 'Ultra High', primaryTimezone: 'PST', areaCodes: ['213', '310', '424', '323', '818'], economicFocus: 'Entertainment, Legal, Medical & Real Estate', localLandmark: 'Greater LA & SoCal Corridor', stateCompliance: 'California CCPA & CMIA Compliant' },
  { slug: 'chicago-il', city: 'Chicago', state: 'Illinois', stateAbbr: 'IL', country: 'United States', region: 'Midwest', metroArea: 'Chicagoland Area', businessDensity: 'High', primaryTimezone: 'CST', areaCodes: ['312', '773', '872'], economicFocus: 'Manufacturing, Medical Specialties, Finance & Legal', localLandmark: 'The Loop & Chicagoland Suburbs', stateCompliance: 'Illinois BIPA & HIPAA Compliant' },
  { slug: 'houston-tx', city: 'Houston', state: 'Texas', stateAbbr: 'TX', country: 'United States', region: 'South', metroArea: 'Greater Houston Area', businessDensity: 'High', primaryTimezone: 'CST', areaCodes: ['713', '281', '832', '346'], economicFocus: 'Energy, Medical Center Healthcare, Home Services & Real Estate', localLandmark: 'Texas Medical Center & Energy Corridor', stateCompliance: 'Texas HB 300 & Medical Privacy Compliant' },
  { slug: 'phoenix-az', city: 'Phoenix', state: 'Arizona', stateAbbr: 'AZ', country: 'United States', region: 'Southwest', metroArea: 'Phoenix Metropolitan Area', businessDensity: 'High', primaryTimezone: 'MST', areaCodes: ['602', '480', '623'], economicFocus: 'Construction, Home Services, Healthcare & Senior Care', localLandmark: 'Valley of the Sun & Scottsdale', stateCompliance: 'Arizona Commercial Privacy Compliant' },
  { slug: 'philadelphia-pa', city: 'Philadelphia', state: 'Pennsylvania', stateAbbr: 'PA', country: 'United States', region: 'Northeast', metroArea: 'Greater Philadelphia Area', businessDensity: 'High', primaryTimezone: 'EST', areaCodes: ['215', '267', '445'], economicFocus: 'Healthcare Systems, Legal Practice, Education & BioTech', localLandmark: 'Center City & Main Line Corridor', stateCompliance: 'PA Medical & Financial Record Compliant' },
  { slug: 'san-antonio-tx', city: 'San Antonio', state: 'Texas', stateAbbr: 'TX', country: 'United States', region: 'South', metroArea: 'San Antonio Metropolitan Area', businessDensity: 'High', primaryTimezone: 'CST', areaCodes: ['210', '726'], economicFocus: 'Defense Contracting, Medical Centers, Tourism & Legal', localLandmark: 'River Walk & Northwest Corridor', stateCompliance: 'Texas Medical Record Privacy Compliant' },
  { slug: 'san-diego-ca', city: 'San Diego', state: 'California', stateAbbr: 'CA', country: 'United States', region: 'West Coast', metroArea: 'San Diego County', businessDensity: 'High', primaryTimezone: 'PST', areaCodes: ['619', '858', '760'], economicFocus: 'Biotech, Dental Practices, Defense & Real Estate', localLandmark: 'Torrey Pines & North County', stateCompliance: 'California CCPA & CMIA Compliant' },
  { slug: 'dallas-tx', city: 'Dallas', state: 'Texas', stateAbbr: 'TX', country: 'United States', region: 'South', metroArea: 'Dallas-Fort Worth Metroplex', businessDensity: 'High', primaryTimezone: 'CST', areaCodes: ['214', '469', '972'], economicFocus: 'Corporate HQs, Financial Advisory, Real Estate & Surgery Centers', localLandmark: 'Uptown Dallas & DFW Corridor', stateCompliance: 'Texas HB 300 Compliant' },
  { slug: 'san-jose-ca', city: 'San Jose', state: 'California', stateAbbr: 'CA', country: 'United States', region: 'West Coast', metroArea: 'Silicon Valley Area', businessDensity: 'Ultra High (Tech)', primaryTimezone: 'PST', areaCodes: ['408', '669'], economicFocus: 'Tech Services, Medical Devices, Legal & Real Estate', localLandmark: 'Silicon Valley & South Bay', stateCompliance: 'California CCPA & CMIA Compliant' },
  { slug: 'austin-tx', city: 'Austin', state: 'Texas', stateAbbr: 'TX', country: 'United States', region: 'South', metroArea: 'Greater Austin Area', businessDensity: 'Ultra High (Tech)', primaryTimezone: 'CST', areaCodes: ['512', '737'], economicFocus: 'Technology, High-Growth Startups, Real Estate & Home Services', localLandmark: 'Downtown Austin & Silicon Hills', stateCompliance: 'Texas Business Privacy Compliant' },
  { slug: 'jacksonville-fl', city: 'Jacksonville', state: 'Florida', stateAbbr: 'FL', country: 'United States', region: 'Southeast', metroArea: 'First Coast Metro', businessDensity: 'High', primaryTimezone: 'EST', areaCodes: ['904'], economicFocus: 'Logistics, Healthcare, Financial Services & Home Repair', localLandmark: 'First Coast & St. Johns River', stateCompliance: 'Florida FIPA & Telemarketing Rules Compliant' },
  { slug: 'fort-worth-tx', city: 'Fort Worth', state: 'Texas', stateAbbr: 'TX', country: 'United States', region: 'South', metroArea: 'DFW Metroplex', businessDensity: 'High', primaryTimezone: 'CST', areaCodes: ['817', '682'], economicFocus: 'Manufacturing, Trades, Healthcare & Real Estate', localLandmark: 'Cultural District & Tarrant County', stateCompliance: 'Texas Commerce Privacy Compliant' },
  { slug: 'columbus-oh', city: 'Columbus', state: 'Ohio', stateAbbr: 'OH', country: 'United States', region: 'Midwest', metroArea: 'Greater Columbus Area', businessDensity: 'High', primaryTimezone: 'EST', areaCodes: ['614', '380'], economicFocus: 'Retail HQs, Logistics, Healthcare & Legal', localLandmark: 'Short North & Central Ohio', stateCompliance: 'Ohio Data Privacy Compliant' },
  { slug: 'charlotte-nc', city: 'Charlotte', state: 'North Carolina', stateAbbr: 'NC', country: 'United States', region: 'Southeast', metroArea: 'Metrolina Region', businessDensity: 'High', primaryTimezone: 'EST', areaCodes: ['704', '980'], economicFocus: 'Banking, Financial Planning, Real Estate & Commercial Law', localLandmark: 'Uptown Charlotte & Lake Norman', stateCompliance: 'North Carolina Privacy Rules Compliant' },
  { slug: 'indianapolis-in', city: 'Indianapolis', state: 'Indiana', stateAbbr: 'IN', country: 'United States', region: 'Midwest', metroArea: 'Greater Indianapolis Area', businessDensity: 'High', primaryTimezone: 'EST', areaCodes: ['317', '463'], economicFocus: 'Logistics, Pharmaceutical, Dental & Home Services', localLandmark: 'Downtown Indy & Carmel Corridor', stateCompliance: 'Indiana Consumer Data Protection Compliant' },
  { slug: 'san-francisco-ca', city: 'San Francisco', state: 'California', stateAbbr: 'CA', country: 'United States', region: 'West Coast', metroArea: 'San Francisco Bay Area', businessDensity: 'Ultra High', primaryTimezone: 'PST', areaCodes: ['415', '628'], economicFocus: 'Venture-Backed Firms, Tech, Legal Practice & Private Health', localLandmark: 'Financial District & Peninsula', stateCompliance: 'California CCPA & CMIA Compliant' },
  { slug: 'seattle-wa', city: 'Seattle', state: 'Washington', stateAbbr: 'WA', country: 'United States', region: 'Pacific Northwest', metroArea: 'Seattle Metropolitan Area', businessDensity: 'High', primaryTimezone: 'PST', areaCodes: ['206', '425'], economicFocus: 'Enterprise Software, Healthcare, Real Estate & E-Commerce', localLandmark: 'Puget Sound & Eastside Tech Corridor', stateCompliance: 'Washington My Health My Data Act Compliant' },
  { slug: 'denver-co', city: 'Denver', state: 'Colorado', stateAbbr: 'CO', country: 'United States', region: 'West', metroArea: 'Denver-Aurora Metro', businessDensity: 'High', primaryTimezone: 'MST', areaCodes: ['303', '720'], economicFocus: 'Energy, Home Contracting, Health Specialties & Tech', localLandmark: 'LoDo & Front Range Urban Corridor', stateCompliance: 'Colorado CPA Compliant' },
  { slug: 'washington-dc', city: 'Washington', state: 'District of Columbia', stateAbbr: 'DC', country: 'United States', region: 'Mid-Atlantic', metroArea: 'Washington Metropolitan Area (DMV)', businessDensity: 'Ultra High', primaryTimezone: 'EST', areaCodes: ['202'], economicFocus: 'Government Contracting, Legal Practices, Consulting & Medical', localLandmark: 'K Street & DMV Metro Corridor', stateCompliance: 'DC Regulatory & Federal Security Standards Compliant' },
  { slug: 'nashville-tn', city: 'Nashville', state: 'Tennessee', stateAbbr: 'TN', country: 'United States', region: 'South', metroArea: 'Greater Nashville Area', businessDensity: 'High', primaryTimezone: 'CST', areaCodes: ['615', '629'], economicFocus: 'Healthcare Systems, Music Industry Law, Real Estate & Trades', localLandmark: 'Music City & Middle Tennessee', stateCompliance: 'Tennessee Information Protection Act Compliant' },
  { slug: 'boston-ma', city: 'Boston', state: 'Massachusetts', stateAbbr: 'MA', country: 'United States', region: 'Northeast', metroArea: 'Greater Boston Area', businessDensity: 'Ultra High', primaryTimezone: 'EST', areaCodes: ['617', '857'], economicFocus: 'Biotech, Elite Healthcare, Legal Services & Wealth Management', localLandmark: 'Back Bay & Route 128 Tech Belt', stateCompliance: 'Massachusetts Data Security Law (201 CMR 17) Compliant' },
  { slug: 'el-paso-tx', city: 'El Paso', state: 'Texas', stateAbbr: 'TX', country: 'United States', region: 'Southwest', metroArea: 'El Paso Metropolitan Area', businessDensity: 'Medium-High', primaryTimezone: 'MST', areaCodes: ['915'], economicFocus: 'Cross-Border Logistics, Healthcare, Legal Services & Trades', localLandmark: 'Franklin Mountains & Sun City Metro', stateCompliance: 'Texas HB 300 & Bilingual Telephony Support' },
  { slug: 'portland-or', city: 'Portland', state: 'Oregon', stateAbbr: 'OR', country: 'United States', region: 'Pacific Northwest', metroArea: 'Portland Metropolitan Area', businessDensity: 'High', primaryTimezone: 'PST', areaCodes: ['503', '971'], economicFocus: 'CleanTech, Specialized Medical, Legal & Design Agencies', localLandmark: 'Pearl District & Willamette Valley', stateCompliance: 'Oregon Consumer Privacy Act Compliant' },
  { slug: 'las-vegas-nv', city: 'Las Vegas', state: 'Nevada', stateAbbr: 'NV', country: 'United States', region: 'West', metroArea: 'Las Vegas Valley', businessDensity: 'High', primaryTimezone: 'PST', areaCodes: ['702', '725'], economicFocus: 'Hospitality, Personal Injury Law, Cosmetic Dentistry & Real Estate', localLandmark: 'Las Vegas Strip & Summerlin', stateCompliance: 'Nevada NPIC & Privacy Law Compliant' },
  { slug: 'detroit-mi', city: 'Detroit', state: 'Michigan', stateAbbr: 'MI', country: 'United States', region: 'Midwest', metroArea: 'Metro Detroit', businessDensity: 'High', primaryTimezone: 'EST', areaCodes: ['313', '248', '586'], economicFocus: 'Automotive Engineering, Healthcare Systems, Legal & Construction', localLandmark: 'Woodward Corridor & Southeast Michigan', stateCompliance: 'Michigan Data Protection Standard Compliant' },
  { slug: 'memphis-tn', city: 'Memphis', state: 'Tennessee', stateAbbr: 'TN', country: 'United States', region: 'South', metroArea: 'Memphis Metropolitan Area', businessDensity: 'High', primaryTimezone: 'CST', areaCodes: ['901'], economicFocus: 'Logistics, Medical Centers, Legal & Home Repair', localLandmark: 'Bluff City & Mid-South Region', stateCompliance: 'Tennessee Privacy Act Compliant' },
  { slug: 'louisville-ky', city: 'Louisville', state: 'Kentucky', stateAbbr: 'KY', country: 'United States', region: 'South', metroArea: 'Greater Louisville Area', businessDensity: 'High', primaryTimezone: 'EST', areaCodes: ['502'], economicFocus: 'Logistics, Healthcare HQs, Manufacturing & Legal', localLandmark: 'Bluegrass & Ohio River Valley', stateCompliance: 'Kentucky Consumer Privacy Standards Compliant' },
  { slug: 'baltimore-md', city: 'Baltimore', state: 'Maryland', stateAbbr: 'MD', country: 'United States', region: 'Mid-Atlantic', metroArea: 'Greater Baltimore Area', businessDensity: 'High', primaryTimezone: 'EST', areaCodes: ['410', '443', '667'], economicFocus: 'Johns Hopkins Healthcare System, Defense, Cyber & Law', localLandmark: 'Inner Harbor & Central Maryland', stateCompliance: 'Maryland Online Privacy Act Compliant' },
  { slug: 'milwaukee-wi', city: 'Milwaukee', state: 'Wisconsin', stateAbbr: 'WI', country: 'United States', region: 'Midwest', metroArea: 'Greater Milwaukee', businessDensity: 'High', primaryTimezone: 'CST', areaCodes: ['414', '262'], economicFocus: 'Advanced Manufacturing, Medical Centers, Legal & Financial', localLandmark: 'Lake Michigan Shoreline & Southeast Wisconsin', stateCompliance: 'Wisconsin Privacy & Records Law Compliant' },
  { slug: 'albuquerque-nm', city: 'Albuquerque', state: 'New Mexico', stateAbbr: 'NM', country: 'United States', region: 'Southwest', metroArea: 'Albuquerque Metro Area', businessDensity: 'Medium-High', primaryTimezone: 'MST', areaCodes: ['505'], economicFocus: 'National Labs, Healthcare, Energy & Real Estate', localLandmark: 'Sandia Mountains & Rio Grande Corridor', stateCompliance: 'New Mexico Data Privacy Standards Compliant' },
  { slug: 'tucson-az', city: 'Tucson', state: 'Arizona', stateAbbr: 'AZ', country: 'United States', region: 'Southwest', metroArea: 'Tucson Metropolitan Area', businessDensity: 'Medium-High', primaryTimezone: 'MST', areaCodes: ['520'], economicFocus: 'Optics, Defense, Medical Practices & Senior Living', localLandmark: 'Catalina Foothills & Southern Arizona', stateCompliance: 'Arizona Commercial Privacy Compliant' },
  { slug: 'fresno-ca', city: 'Fresno', state: 'California', stateAbbr: 'CA', country: 'United States', region: 'West Coast', metroArea: 'Central Valley Metro', businessDensity: 'Medium-High', primaryTimezone: 'PST', areaCodes: ['559'], economicFocus: 'Agribusiness, Industrial Trades, Healthcare & Real Estate', localLandmark: 'San Joaquin Valley Corridor', stateCompliance: 'California CCPA & CMIA Compliant' },
  { slug: 'sacramento-ca', city: 'Sacramento', state: 'California', stateAbbr: 'CA', country: 'United States', region: 'West Coast', metroArea: 'Greater Sacramento Area', businessDensity: 'High', primaryTimezone: 'PST', areaCodes: ['916', '279'], economicFocus: 'Government Affairs, Legal Firms, Healthcare & Home Contracting', localLandmark: 'Capitol Mall & Central Valley', stateCompliance: 'California CCPA & CMIA Compliant' },
  { slug: 'kansas-city-mo', city: 'Kansas City', state: 'Missouri', stateAbbr: 'MO', country: 'United States', region: 'Midwest', metroArea: 'Kansas City Metropolitan Area', businessDensity: 'High', primaryTimezone: 'CST', areaCodes: ['816', '913'], economicFocus: 'Animal Health, BioScience, Logistics, Legal & Real Estate', localLandmark: 'Country Club Plaza & KC Metro', stateCompliance: 'Missouri & Kansas Privacy Compliance' },
  { slug: 'mesa-az', city: 'Mesa', state: 'Arizona', stateAbbr: 'AZ', country: 'United States', region: 'Southwest', metroArea: 'East Valley Phoenix Metro', businessDensity: 'High', primaryTimezone: 'MST', areaCodes: ['480'], economicFocus: 'Aerospace, Healthcare, Trades & Real Estate', localLandmark: 'East Valley Corridor', stateCompliance: 'Arizona Commercial Privacy Compliant' },
  { slug: 'atlanta-ga', city: 'Atlanta', state: 'Georgia', stateAbbr: 'GA', country: 'United States', region: 'Southeast', metroArea: 'Metro Atlanta Area', businessDensity: 'High', primaryTimezone: 'EST', areaCodes: ['404', '678', '770'], economicFocus: 'Fintech HQs, Health Systems, Commercial Real Estate & Law', localLandmark: 'Buckhead & Midtown Corridor', stateCompliance: 'Georgia Data Privacy & Security Compliant' },
  { slug: 'omaha-ne', city: 'Omaha', state: 'Nebraska', stateAbbr: 'NE', country: 'United States', region: 'Midwest', metroArea: 'Omaha-Council Bluffs Metro', businessDensity: 'High', primaryTimezone: 'CST', areaCodes: ['402', '531'], economicFocus: 'Insurance, Financial Planning, Medical & Agriculture Technology', localLandmark: 'Downtown Omaha & Riverfront', stateCompliance: 'Nebraska Data Protection Compliant' },
  { slug: 'colorado-springs-co', city: 'Colorado Springs', state: 'Colorado', stateAbbr: 'CO', country: 'United States', region: 'West', metroArea: 'Pikes Peak Region', businessDensity: 'High', primaryTimezone: 'MST', areaCodes: ['719'], economicFocus: 'Defense Technology, Medical Clinics, Outdoor Trades & Real Estate', localLandmark: 'Pikes Peak & Front Range', stateCompliance: 'Colorado CPA Compliant' },
  { slug: 'raleigh-nc', city: 'Raleigh', state: 'North Carolina', stateAbbr: 'NC', country: 'United States', region: 'Southeast', metroArea: 'Research Triangle Region (RTP)', businessDensity: 'Ultra High (Tech)', primaryTimezone: 'EST', areaCodes: ['919', '984'], economicFocus: 'Research Triangle BioTech, Software, Medical & Real Estate', localLandmark: 'RTP & Triangle Belt', stateCompliance: 'North Carolina Privacy Rules Compliant' },
  { slug: 'long-beach-ca', city: 'Long Beach', state: 'California', stateAbbr: 'CA', country: 'United States', region: 'West Coast', metroArea: 'LA Port Metro', businessDensity: 'High', primaryTimezone: 'PST', areaCodes: ['562'], economicFocus: 'Port Logistics, Maritime, Healthcare & Local Services', localLandmark: 'Long Beach Waterfront & Harbor', stateCompliance: 'California CCPA Compliant' },
  { slug: 'virginia-beach-va', city: 'Virginia Beach', state: 'Virginia', stateAbbr: 'VA', country: 'United States', region: 'Mid-Atlantic', metroArea: 'Hampton Roads Metro', businessDensity: 'High', primaryTimezone: 'EST', areaCodes: ['757'], economicFocus: 'Defense, Tourism, Real Estate & Local Trades', localLandmark: 'Oceanfront & Hampton Roads', stateCompliance: 'Virginia VCDPA Compliant' },
  { slug: 'miami-fl', city: 'Miami', state: 'Florida', stateAbbr: 'FL', country: 'United States', region: 'Southeast', metroArea: 'Miami Metropolitan Area', businessDensity: 'High', primaryTimezone: 'EST', areaCodes: ['305', '786'], economicFocus: 'International Finance, Real Estate, Aesthetic Surgery & Legal', localLandmark: 'Brickell & South Florida Coastal Belt', stateCompliance: 'Florida FIPA & Telemarketing Rules Compliant' },
  { slug: 'oakland-ca', city: 'Oakland', state: 'California', stateAbbr: 'CA', country: 'United States', region: 'West Coast', metroArea: 'East Bay Metro', businessDensity: 'High', primaryTimezone: 'PST', areaCodes: ['510'], economicFocus: 'CleanTech, Logistics, Health & Legal', localLandmark: 'Jack London Square & East Bay', stateCompliance: 'California CCPA Compliant' },
  { slug: 'minneapolis-mn', city: 'Minneapolis', state: 'Minnesota', stateAbbr: 'MN', country: 'United States', region: 'Midwest', metroArea: 'Twin Cities Metropolitan Area', businessDensity: 'High', primaryTimezone: 'CST', areaCodes: ['612', '763', '952'], economicFocus: 'Medical Devices, Fortune 500 HQs, Legal Practice & Trades', localLandmark: 'Twin Cities Metro Corridor', stateCompliance: 'Minnesota Consumer Data Privacy Act Compliant' },
  { slug: 'tulsa-ok', city: 'Tulsa', state: 'Oklahoma', stateAbbr: 'OK', country: 'United States', region: 'South', metroArea: 'Tulsa Metro Area', businessDensity: 'Medium-High', primaryTimezone: 'CST', areaCodes: ['918', '539'], economicFocus: 'Energy, Aerospace, Medical Centers & Trades', localLandmark: 'Green Country & Gathering Place', stateCompliance: 'Oklahoma Computer Data Privacy Compliant' },
  { slug: 'bakersfield-ca', city: 'Bakersfield', state: 'California', stateAbbr: 'CA', country: 'United States', region: 'West Coast', metroArea: 'Kern County Metro', businessDensity: 'Medium-High', primaryTimezone: 'PST', areaCodes: ['661'], economicFocus: 'Agriculture, Energy, Healthcare & Local Contracting', localLandmark: 'Central Valley South', stateCompliance: 'California CCPA Compliant' },
  { slug: 'wichita-ks', city: 'Wichita', state: 'Kansas', stateAbbr: 'KS', country: 'United States', region: 'Midwest', metroArea: 'Wichita Metro Area', businessDensity: 'Medium-High', primaryTimezone: 'CST', areaCodes: ['316'], economicFocus: 'Aviation Manufacturing, Healthcare & Trades', localLandmark: 'Air Capital & Arkansas River Basin', stateCompliance: 'Kansas Data Protection Compliant' },
  { slug: 'arlington-tx', city: 'Arlington', state: 'Texas', stateAbbr: 'TX', country: 'United States', region: 'South', metroArea: 'Mid-Cities DFW Metro', businessDensity: 'High', primaryTimezone: 'CST', areaCodes: ['817', '682'], economicFocus: 'Entertainment, Manufacturing, Healthcare & Trades', localLandmark: 'Entertainment District & Arlington Corridor', stateCompliance: 'Texas HB 300 Compliant' },
  { slug: 'aurora-co', city: 'Aurora', state: 'Colorado', stateAbbr: 'CO', country: 'United States', region: 'West', metroArea: 'Denver East Metro', businessDensity: 'High', primaryTimezone: 'MST', areaCodes: ['303', '720'], economicFocus: 'Anschutz Medical Campus, Defense & Trades', localLandmark: 'Anschutz Medical Campus & East Metro', stateCompliance: 'Colorado CPA Compliant' },
  { slug: 'tampa-fl', city: 'Tampa', state: 'Florida', stateAbbr: 'FL', country: 'United States', region: 'Southeast', metroArea: 'Tampa Bay Area', businessDensity: 'High', primaryTimezone: 'EST', areaCodes: ['813', '656'], economicFocus: 'Financial Services, Dental Clinics, Roofing/HVAC & Legal', localLandmark: 'Tampa Bay & St. Petersburg', stateCompliance: 'Florida FIPA Compliant' },
  { slug: 'new-orleans-la', city: 'New Orleans', state: 'Louisiana', stateAbbr: 'LA', country: 'United States', region: 'South', metroArea: 'Greater New Orleans Area', businessDensity: 'High', primaryTimezone: 'CST', areaCodes: ['504'], economicFocus: 'Tourism, Maritime, Healthcare & Legal Practices', localLandmark: 'French Quarter & Mississippi River Belt', stateCompliance: 'Louisiana Database Security Compliant' },
  { slug: 'cleveland-oh', city: 'Cleveland', state: 'Ohio', stateAbbr: 'OH', country: 'United States', region: 'Midwest', metroArea: 'Greater Cleveland Metro', businessDensity: 'High', primaryTimezone: 'EST', areaCodes: ['216', '440'], economicFocus: 'Cleveland Clinic Healthcare, Manufacturing & Legal', localLandmark: 'Cleveland Clinic & Lake Erie Shore', stateCompliance: 'Ohio Privacy Standards Compliant' },
  { slug: 'honolulu-hi', city: 'Honolulu', state: 'Hawaii', stateAbbr: 'HI', country: 'United States', region: 'West', metroArea: 'Oahu Metro Area', businessDensity: 'High', primaryTimezone: 'HST', areaCodes: ['808'], economicFocus: 'Tourism, Defense, Medical Centers & Real Estate', localLandmark: 'Waikiki & Oahu Island Corridor', stateCompliance: 'Hawaii Personal Information Protection Compliant' },
  { slug: 'anaheim-ca', city: 'Anaheim', state: 'California', stateAbbr: 'CA', country: 'United States', region: 'West Coast', metroArea: 'Orange County Metro', businessDensity: 'High', primaryTimezone: 'PST', areaCodes: ['714', '657'], economicFocus: 'Entertainment, Hospitality, Medical & Real Estate', localLandmark: 'Resort District & Orange County', stateCompliance: 'California CCPA Compliant' },
  { slug: 'lexington-ky', city: 'Lexington', state: 'Kentucky', stateAbbr: 'KY', country: 'United States', region: 'South', metroArea: 'Bluegrass Metro', businessDensity: 'Medium-High', primaryTimezone: 'EST', areaCodes: ['859'], economicFocus: 'Equine, Education, Healthcare & Professional Law', localLandmark: 'Bluegrass Region & Central KY', stateCompliance: 'Kentucky Data Privacy Compliant' },
  { slug: 'stockton-ca', city: 'Stockton', state: 'California', stateAbbr: 'CA', country: 'United States', region: 'West Coast', metroArea: 'San Joaquin Metro', businessDensity: 'Medium-High', primaryTimezone: 'PST', areaCodes: ['209'], economicFocus: 'Logistics, Inland Port, Agriculture & Contracting', localLandmark: 'California Delta Corridor', stateCompliance: 'California CCPA Compliant' },
  { slug: 'corpus-christi-tx', city: 'Corpus Christi', state: 'Texas', stateAbbr: 'TX', country: 'United States', region: 'South', metroArea: 'Coastal Bend Metro', businessDensity: 'Medium-High', primaryTimezone: 'CST', areaCodes: ['361'], economicFocus: 'Petrochemical, Port Shipping, Healthcare & Trades', localLandmark: 'Coastal Bend & Corpus Christi Bay', stateCompliance: 'Texas Commerce Privacy Compliant' },
  { slug: 'henderson-nv', city: 'Henderson', state: 'Nevada', stateAbbr: 'NV', country: 'United States', region: 'West', metroArea: 'Las Vegas South Metro', businessDensity: 'High', primaryTimezone: 'PST', areaCodes: ['702', '725'], economicFocus: 'Tech, Healthcare, Master-Planned Communities & Trades', localLandmark: 'Green Valley & Lake Las Vegas', stateCompliance: 'Nevada NPIC Compliant' },
  { slug: 'riverside-ca', city: 'Riverside', state: 'California', stateAbbr: 'CA', country: 'United States', region: 'West Coast', metroArea: 'Inland Empire Metro', businessDensity: 'High', primaryTimezone: 'PST', areaCodes: ['951'], economicFocus: 'Logistics, E-Commerce Distribution, Health & Trades', localLandmark: 'Inland Empire & Santa Ana River Basin', stateCompliance: 'California CCPA Compliant' },
  { slug: 'newark-nj', city: 'Newark', state: 'New Jersey', stateAbbr: 'NJ', country: 'United States', region: 'Northeast', metroArea: 'Northern NJ Metro', businessDensity: 'High', primaryTimezone: 'EST', areaCodes: ['973', '862'], economicFocus: 'Transportation, Port, Legal & Medical Hubs', localLandmark: 'Gateway Center & Port Newark', stateCompliance: 'NJ Data Protection Standard Compliant' },
  { slug: 'saint-paul-mn', city: 'Saint Paul', state: 'Minnesota', stateAbbr: 'MN', country: 'United States', region: 'Midwest', metroArea: 'East Twin Cities Metro', businessDensity: 'High', primaryTimezone: 'CST', areaCodes: ['651'], economicFocus: 'Government, Manufacturing, Medical & Legal', localLandmark: 'Capitol Hill & Mississippi Riverfront', stateCompliance: 'Minnesota Consumer Data Privacy Act Compliant' },
  { slug: 'santa-ana-ca', city: 'Santa Ana', state: 'California', stateAbbr: 'CA', country: 'United States', region: 'West Coast', metroArea: 'Central Orange County Metro', businessDensity: 'High', primaryTimezone: 'PST', areaCodes: ['714', '657'], economicFocus: 'County Government, Legal Practice, Dental & Commercial', localLandmark: 'Civic Center & Orange County Hub', stateCompliance: 'California CCPA Compliant' },
  { slug: 'cincinnati-oh', city: 'Cincinnati', state: 'Ohio', stateAbbr: 'OH', country: 'United States', region: 'Midwest', metroArea: 'Greater Cincinnati Area', businessDensity: 'High', primaryTimezone: 'EST', areaCodes: ['513'], economicFocus: 'Consumer Goods HQs, Healthcare, Legal & Financial', localLandmark: 'Over-the-Rhine & Ohio Riverfront', stateCompliance: 'Ohio Data Protection Compliant' },
  { slug: 'irvine-ca', city: 'Irvine', state: 'California', stateAbbr: 'CA', country: 'United States', region: 'West Coast', metroArea: 'South Orange County Metro', businessDensity: 'Ultra High (Tech & Bio)', primaryTimezone: 'PST', areaCodes: ['949'], economicFocus: 'Medical Devices, Tech HQs, Financial Services & Legal', localLandmark: 'Irvine Spectrum & Business Complex', stateCompliance: 'California CCPA Compliant' },
  { slug: 'orlando-fl', city: 'Orlando', state: 'Florida', stateAbbr: 'FL', country: 'United States', region: 'Southeast', metroArea: 'Greater Orlando Area', businessDensity: 'High', primaryTimezone: 'EST', areaCodes: ['407', '321'], economicFocus: 'Hospitality, Medical Groups, Real Estate & Home Contractors', localLandmark: 'Central Florida Corridor', stateCompliance: 'Florida FIPA Compliant' },
  { slug: 'pittsburgh-pa', city: 'Pittsburgh', state: 'Pennsylvania', stateAbbr: 'PA', country: 'United States', region: 'Northeast', metroArea: 'Greater Pittsburgh Area', businessDensity: 'High', primaryTimezone: 'EST', areaCodes: ['412', '878'], economicFocus: 'Robotics, Healthcare Systems (UPMC), Finance & Legal', localLandmark: 'Golden Triangle & Three Rivers', stateCompliance: 'PA Data Privacy Compliant' },
  { slug: 'st-louis-mo', city: 'St. Louis', state: 'Missouri', stateAbbr: 'MO', country: 'United States', region: 'Midwest', metroArea: 'Greater St. Louis Metro', businessDensity: 'High', primaryTimezone: 'CST', areaCodes: ['314', '636'], economicFocus: 'BioScience, Financial Advisory, Health Systems & Law', localLandmark: 'Gateway Arch & Central West End', stateCompliance: 'Missouri Privacy Standards Compliant' },
  { slug: 'greensboro-nc', city: 'Greensboro', state: 'North Carolina', stateAbbr: 'NC', country: 'United States', region: 'Southeast', metroArea: 'Piedmont Triad Metro', businessDensity: 'Medium-High', primaryTimezone: 'EST', areaCodes: ['336', '743'], economicFocus: 'Logistics, Textile Innovation, Health & Trades', localLandmark: 'Piedmont Triad Belt', stateCompliance: 'North Carolina Privacy Rules Compliant' },
  { slug: 'jersey-city-nj', city: 'Jersey City', state: 'New Jersey', stateAbbr: 'NJ', country: 'United States', region: 'Northeast', metroArea: 'Gold Coast Hudson Metro', businessDensity: 'Ultra High (Finance)', primaryTimezone: 'EST', areaCodes: ['201', '551'], economicFocus: 'Wall Street West Finance, Tech, Real Estate & Legal', localLandmark: 'Exchange Place & Hudson Waterfront', stateCompliance: 'NJ Data Privacy Standards Compliant' },
  { slug: 'anchorage-ak', city: 'Anchorage', state: 'Alaska', stateAbbr: 'AK', country: 'United States', region: 'West', metroArea: 'Anchorage Bowl Metro', businessDensity: 'Medium-High', primaryTimezone: 'AKST', areaCodes: ['907'], economicFocus: 'Energy, Logistics Air Hub, Healthcare & Local Services', localLandmark: 'Cook Inlet & Chugach Mountains', stateCompliance: 'Alaska Data Protection Compliant' },
  { slug: 'lincoln-ne', city: 'Lincoln', state: 'Nebraska', stateAbbr: 'NE', country: 'United States', region: 'Midwest', metroArea: 'Lincoln Metro Area', businessDensity: 'Medium-High', primaryTimezone: 'CST', areaCodes: ['402', '531'], economicFocus: 'State Government, AgTech, Insurance & Healthcare', localLandmark: 'Capitol Building & Haymarket', stateCompliance: 'Nebraska Privacy Protection Compliant' },
  { slug: 'plano-tx', city: 'Plano', state: 'Texas', stateAbbr: 'TX', country: 'United States', region: 'South', metroArea: 'North DFW Metro', businessDensity: 'Ultra High (Corporate)', primaryTimezone: 'CST', areaCodes: ['972', '469', '214'], economicFocus: 'Corporate Headquarters, Fintech, Health & Real Estate', localLandmark: 'Legacy West & North DFW Corridor', stateCompliance: 'Texas HB 300 Compliant' },
  { slug: 'durham-nc', city: 'Durham', state: 'North Carolina', stateAbbr: 'NC', country: 'United States', region: 'Southeast', metroArea: 'Research Triangle Metro', businessDensity: 'Ultra High (Bio & Tech)', primaryTimezone: 'EST', areaCodes: ['919', '984'], economicFocus: 'Duke Health, BioTech, Software & Legal', localLandmark: 'Research Triangle Park & Downtown Durham', stateCompliance: 'North Carolina Privacy Rules Compliant' },
  { slug: 'buffalo-ny', city: 'Buffalo', state: 'New York', stateAbbr: 'NY', country: 'United States', region: 'Northeast', metroArea: 'Western NY Metro', businessDensity: 'Medium-High', primaryTimezone: 'EST', areaCodes: ['716'], economicFocus: 'Healthcare Systems, Banking, Education & Trades', localLandmark: 'Canalside & Niagara Region', stateCompliance: 'NY DFS & Shield Act Compliant' },
  { slug: 'chandler-az', city: 'Chandler', state: 'Arizona', stateAbbr: 'AZ', country: 'United States', region: 'Southwest', metroArea: 'Southeast Phoenix Metro', businessDensity: 'High (Tech)', primaryTimezone: 'MST', areaCodes: ['480'], economicFocus: 'Semiconductor Manufacturing, Autonomous Tech, Health & Trades', localLandmark: 'Price Corridor Tech Belt', stateCompliance: 'Arizona Commercial Privacy Compliant' },
  { slug: 'chula-vista-ca', city: 'Chula Vista', state: 'California', stateAbbr: 'CA', country: 'United States', region: 'West Coast', metroArea: 'South San Diego Metro', businessDensity: 'Medium-High', primaryTimezone: 'PST', areaCodes: ['619'], economicFocus: 'Cross-Border Commerce, Healthcare, Real Estate & Trades', localLandmark: 'South Bay & Otay Ranch', stateCompliance: 'California CCPA Compliant' },
  { slug: 'toledo-oh', city: 'Toledo', state: 'Ohio', stateAbbr: 'OH', country: 'United States', region: 'Midwest', metroArea: 'Glass City Metro', businessDensity: 'Medium-High', primaryTimezone: 'EST', areaCodes: ['419', '567'], economicFocus: 'Automotive Manufacturing, Glass Innovation, Medical & Trades', localLandmark: 'Maumee River Basin', stateCompliance: 'Ohio Data Privacy Compliant' },
  { slug: 'madison-wi', city: 'Madison', state: 'Wisconsin', stateAbbr: 'WI', country: 'United States', region: 'Midwest', metroArea: 'Greater Madison Area', businessDensity: 'High (Tech & Health)', primaryTimezone: 'CST', areaCodes: ['608'], economicFocus: 'Epic Systems BioTech, State Capitol, Software & Healthcare', localLandmark: 'Isthmus & University District', stateCompliance: 'Wisconsin Privacy Standard Compliant' },
  { slug: 'gilbert-az', city: 'Gilbert', state: 'Arizona', stateAbbr: 'AZ', country: 'United States', region: 'Southwest', metroArea: 'East Valley Metro', businessDensity: 'High', primaryTimezone: 'MST', areaCodes: ['480'], economicFocus: 'Medical Hubs, Family Healthcare, Trades & Real Estate', localLandmark: 'Heritage District & SanTan Corridor', stateCompliance: 'Arizona Commercial Privacy Compliant' },
  { slug: 'reno-nv', city: 'Reno', state: 'Nevada', stateAbbr: 'NV', country: 'United States', region: 'West', metroArea: 'Northern Nevada Metro', businessDensity: 'High', primaryTimezone: 'PST', areaCodes: ['775'], economicFocus: 'Gigafactory Clean Energy, Logistics, Real Estate & Medical', localLandmark: 'Sierra Nevada & Tahoe Basin Corridor', stateCompliance: 'Nevada NPIC Compliant' },
  { slug: 'fort-wayne-in', city: 'Fort Wayne', state: 'Indiana', stateAbbr: 'IN', country: 'United States', region: 'Midwest', metroArea: 'Northeast Indiana Metro', businessDensity: 'Medium-High', primaryTimezone: 'EST', areaCodes: ['260'], economicFocus: 'Defense, Medical Devices, Defense & Trades', localLandmark: 'Three Rivers Confluence', stateCompliance: 'Indiana Consumer Data Protection Compliant' },
  { slug: 'north-las-vegas-nv', city: 'North Las Vegas', state: 'Nevada', stateAbbr: 'NV', country: 'United States', region: 'West', metroArea: 'North Las Vegas Metro', businessDensity: 'Medium-High', primaryTimezone: 'PST', areaCodes: ['702', '725'], economicFocus: 'Logistics, E-Commerce Infrastructure, Healthcare & Trades', localLandmark: 'Apex Industrial Park Corridor', stateCompliance: 'Nevada NPIC Compliant' },
  { slug: 'st-petersburg-fl', city: 'St. Petersburg', state: 'Florida', stateAbbr: 'FL', country: 'United States', region: 'Southeast', metroArea: 'Pinellas Peninsula Metro', businessDensity: 'High', primaryTimezone: 'EST', areaCodes: ['727'], economicFocus: 'Fintech, Marine Science, Real Estate & Healthcare', localLandmark: 'Downtown St. Pete Pier & Suncoast', stateCompliance: 'Florida FIPA Compliant' },
  { slug: 'lubbock-tx', city: 'Lubbock', state: 'Texas', stateAbbr: 'TX', country: 'United States', region: 'Southwest', metroArea: 'South Plains Metro', businessDensity: 'Medium-High', primaryTimezone: 'CST', areaCodes: ['806'], economicFocus: 'Texas Tech Health Sciences, Agriculture, Legal & Trades', localLandmark: 'Hub City & South Plains', stateCompliance: 'Texas HB 300 Compliant' },
  { slug: 'laredo-tx', city: 'Laredo', state: 'Texas', stateAbbr: 'TX', country: 'United States', region: 'Southwest', metroArea: 'Inland Port Laredo', businessDensity: 'High (Logistics)', primaryTimezone: 'CST', areaCodes: ['956'], economicFocus: 'International Logistics, Cross-Border Freight, Health & Law', localLandmark: 'World Trade Bridge Corridor', stateCompliance: 'Texas HB 300 & Bilingual Support' },
  { slug: 'winston-salem-nc', city: 'Winston-Salem', state: 'North Carolina', stateAbbr: 'NC', country: 'United States', region: 'Southeast', metroArea: 'Triad Metro Area', businessDensity: 'Medium-High', primaryTimezone: 'EST', areaCodes: ['336', '743'], economicFocus: 'Wake Forest Health, Innovation Quarter, Financial & Trades', localLandmark: 'Innovation Quarter & Piedmont', stateCompliance: 'North Carolina Privacy Rules Compliant' },
  { slug: 'chesapeake-va', city: 'Chesapeake', state: 'Virginia', stateAbbr: 'VA', country: 'United States', region: 'Mid-Atlantic', metroArea: 'South Hampton Roads', businessDensity: 'Medium-High', primaryTimezone: 'EST', areaCodes: ['757'], economicFocus: 'Defense Contracting, Logistics, Real Estate & Home Repair', localLandmark: 'Great Dismal Swamp & Coastal Waterway', stateCompliance: 'Virginia VCDPA Compliant' },
  { slug: 'glendale-az', city: 'Glendale', state: 'Arizona', stateAbbr: 'AZ', country: 'United States', region: 'Southwest', metroArea: 'West Valley Phoenix Metro', businessDensity: 'High', primaryTimezone: 'MST', areaCodes: ['623'], economicFocus: 'Sports & Entertainment, Medical Centers, Trades & Real Estate', localLandmark: 'Westgate Entertainment District', stateCompliance: 'Arizona Commercial Privacy Compliant' },
  { slug: 'garland-tx', city: 'Garland', state: 'Texas', stateAbbr: 'TX', country: 'United States', region: 'South', metroArea: 'East DFW Metro', businessDensity: 'Medium-High', primaryTimezone: 'CST', areaCodes: ['214', '972', '469'], economicFocus: 'Manufacturing, Medical Clinics, Real Estate & Trades', localLandmark: 'Lake Ray Hubbard Belt', stateCompliance: 'Texas HB 300 Compliant' },
  { slug: 'scottsdale-az', city: 'Scottsdale', state: 'Arizona', stateAbbr: 'AZ', country: 'United States', region: 'Southwest', metroArea: 'Scottsdale Metro Area', businessDensity: 'Ultra High (Luxury)', primaryTimezone: 'MST', areaCodes: ['480'], economicFocus: 'Luxury Real Estate, Aesthetic Med Spas, Healthcare & Financial', localLandmark: 'Old Town Scottsdale & North Scottsdale Belt', stateCompliance: 'Arizona Commercial Privacy Compliant' },
  { slug: 'norfolk-va', city: 'Norfolk', state: 'Virginia', stateAbbr: 'VA', country: 'United States', region: 'Mid-Atlantic', metroArea: 'Hampton Roads Central', businessDensity: 'High', primaryTimezone: 'EST', areaCodes: ['757'], economicFocus: 'Naval Defense, Maritime Port, Medical Centers & Legal', localLandmark: 'Naval Station Norfolk & Elizabeth River', stateCompliance: 'Virginia VCDPA Compliant' },
  { slug: 'boise-id', city: 'Boise', state: 'Idaho', stateAbbr: 'ID', country: 'United States', region: 'West', metroArea: 'Treasure Valley Metro', businessDensity: 'High', primaryTimezone: 'MST', areaCodes: ['208', '986'], economicFocus: 'Tech In-Migration, Semiconductor, Health & Construction', localLandmark: 'Treasure Valley & Boise Foothills', stateCompliance: 'Idaho Consumer Data Standards Compliant' },
  { slug: 'fremont-ca', city: 'Fremont', state: 'California', stateAbbr: 'CA', country: 'United States', region: 'West Coast', metroArea: 'East Bay Silicon Valley', businessDensity: 'Ultra High (Hardware)', primaryTimezone: 'PST', areaCodes: ['510'], economicFocus: 'Advanced Hardware, EV Manufacturing, BioTech & Legal', localLandmark: 'Warm Springs Innovation District', stateCompliance: 'California CCPA Compliant' },
  { slug: 'spokane-wa', city: 'Spokane', state: 'Washington', stateAbbr: 'WA', country: 'United States', region: 'Pacific Northwest', metroArea: 'Inland Northwest Metro', businessDensity: 'Medium-High', primaryTimezone: 'PST', areaCodes: ['509'], economicFocus: 'Health Sciences Hub, Regional Legal, Financial & Trades', localLandmark: 'Spokane River & Inland Empire', stateCompliance: 'Washington My Health My Data Act Compliant' },
  { slug: 'santa-clarita-ca', city: 'Santa Clarita', state: 'California', stateAbbr: 'CA', country: 'United States', region: 'West Coast', metroArea: 'North LA County Metro', businessDensity: 'High', primaryTimezone: 'PST', areaCodes: ['661'], economicFocus: 'BioTech, Film Production, Real Estate & Local Trades', localLandmark: 'Valencia & Santa Clarita Valley', stateCompliance: 'California CCPA Compliant' },
  { slug: 'baton-rouge-la', city: 'Baton Rouge', state: 'Louisiana', stateAbbr: 'LA', country: 'United States', region: 'South', metroArea: 'Capital Region Metro', businessDensity: 'High', primaryTimezone: 'CST', areaCodes: ['225'], economicFocus: 'Petrochemical, State Government, Medical & Law', localLandmark: 'Capitol Tower & Mississippi River', stateCompliance: 'Louisiana Database Security Compliant' },
  { slug: 'richmond-va', city: 'Richmond', state: 'Virginia', stateAbbr: 'VA', country: 'United States', region: 'Mid-Atlantic', metroArea: 'Greater Richmond Region', businessDensity: 'High', primaryTimezone: 'EST', areaCodes: ['804'], economicFocus: 'Federal Reserve Banking, Corporate HQs, Legal & Health', localLandmark: 'James River & Shockoe Slip', stateCompliance: 'Virginia VCDPA Compliant' },
  { slug: 'salt-lake-city-ut', city: 'Salt Lake City', state: 'Utah', stateAbbr: 'UT', country: 'United States', region: 'West', metroArea: 'Wasatch Front', businessDensity: 'Ultra High (Silicon Slopes)', primaryTimezone: 'MST', areaCodes: ['801', '385'], economicFocus: 'Silicon Slopes SaaS, Dental/Orthodontic, Home Services & Real Estate', localLandmark: 'Wasatch Front & Silicon Slopes', stateCompliance: 'Utah Consumer Privacy Act (UCPA) Compliant' }
];

export const PSEO_INTEGRATIONS: PSEOIntegration[] = [
  { slug: 'hubspot', name: 'HubSpot CRM', category: 'CRM', logoText: 'HubSpot', syncType: 'Bi-directional Real-Time', syncLatency: '<1.2s', description: 'Automatically create HubSpot contacts, deals, call logs, and transcripts post-call.', supportedFeatures: ['Contact Sync', 'Deal Pipeline Trigger', 'Call Transcript Logging', 'Task Assignment'] },
  { slug: 'salesforce', name: 'Salesforce Sales Cloud', category: 'CRM', logoText: 'Salesforce', syncType: 'Enterprise REST API', syncLatency: '<1.5s', description: 'Deep object mapping into Lead, Account, Contact, and Opportunity entities in Salesforce.', supportedFeatures: ['Lead Creation', 'Custom Field Mapping', 'Opportunity Status Update', 'Shield Security Support'] },
  { slug: 'dentrix', name: 'Dentrix PMS', category: 'EHR', logoText: 'Dentrix', syncType: 'Direct Practice Bridge', syncLatency: '<800ms', description: 'Real-time hygiene chair calendar availability and direct patient appointment locking.', supportedFeatures: ['Patient Lookup', 'Hygiene Chair Booking', 'Insurance Note Sync', 'Emergency Tagging'] },
  { slug: 'servicetitan', name: 'ServiceTitan', category: 'Field Service', logoText: 'ServiceTitan', syncType: 'API Webhook Engine', syncLatency: '<900ms', description: 'Dispatch emergency jobs, customer accounts, and location details directly to ServiceTitan.', supportedFeatures: ['Job Dispatch', 'Emergency Alerting', 'Customer Account Lock', 'Technician Roster Alert'] },
  { slug: 'clio', name: 'Clio Manage', category: 'Legal', logoText: 'Clio', syncType: 'Legal API Connector', syncLatency: '<1.1s', description: 'Create Clio matters, client intake entries, and consultation payment link dispatches.', supportedFeatures: ['Matter Creation', 'Conflict Note Capture', 'Calendar Locking', 'LawPay Link Sync'] },
  { slug: 'followupboss', name: 'Follow Up Boss', category: 'CRM', logoText: 'Follow Up Boss', syncType: 'Real-Time Webhook', syncLatency: '<1.0s', description: 'Log buyer showing requests, budget criteria, and call audio recordings into Follow Up Boss.', supportedFeatures: ['Buyer Pre-Qual Sync', 'Showing Notification', 'Agent Round-Robin Routing', 'Call Audio Link'] }
];
