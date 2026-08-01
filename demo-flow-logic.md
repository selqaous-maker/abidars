# PEXEK Demo Flow Logic & Industry Routing Architecture

This document defines the URL parameters, industry routing rules, state management, audio interaction, and developer output mechanics for **PATH B: Universal Voice Demo Flow** (`/demo`).

---

## 1. Universal Routing & URL Parameters

When users navigate to the Voice Demo page from any industry page or CTA, the system passes an optional `industry` URL parameter (or query string) to auto-select and auto-play the relevant vertical demonstration.

### URL Structure & Industry Mapping

| Incoming Source | URL Path & Query Parameter | Active Industry Tab | Default Audio Persona | Default Call Scenario |
| :--- | :--- | :--- | :--- | :--- |
| **Generic / Hero / Navbar** | `/demo` | `dental` (Default) | Sarah (Warm & Empathetic) | Emergency Dental Triage |
| **Dental Pages** | `/demo?industry=dental` | `dental` | Sarah (Warm & Empathetic) | Emergency Dental Triage |
| **Healthcare Pages** | `/demo?industry=healthcare` | `healthcare` | Dr. Emma (Clinical & Calm) | Patient Pre-Op & Appointment |
| **Real Estate Pages** | `/demo?industry=real-estate` | `real-estate` | Michael (Confident & Clear) | Buyer Prequalification & Viewing |
| **Home Services Pages** | `/demo?industry=home-services` | `home-services` | David (Decisive & Direct) | HVAC Emergency Dispatch |
| **Legal Pages** | `/demo?industry=legal` | `legal` | Marcus (Authoritative) | Personal Injury Case Intake |
| **E-commerce Pages** | `/demo?industry=ecommerce` | `ecommerce` | Alex (Support Specialist) | Order Tracking & Returns |

---

## 2. Dynamic Demo Flow Logic

```
   [User Clicks Path B CTA]
              │
              ▼
   Check URL Parameters:
   Does `?industry=` exist?
         │         │
      YES│         │NO
         ▼         ▼
   Set Active     Default to
   Industry Tab   `dental`
         │         │
         └────┬────┘
              │
              ▼
  Initialize Audio Waveform & Player:
  - Load persona metadata
  - Load synchronized 6-step workflow
  - Load transcript lines with timestamps
              │
              ▼
  [User Clicks "Experience This AI Call"]
              │
              ▼
  Execute Synchronized Playback Loop:
  1. Audio plays via SpeechSynthesis or Audio Element
  2. Transcript auto-scrolls & highlights active line
  3. Workflow steps transition:
     [Step 1: Incoming Call] ──► [Step 2: AI Answers] ──► [Step 3: Lead Qualified]
                                                                  │
     [Step 6: WhatsApp Sent] ◄── [Step 5: CRM Updated] ◄── [Step 4: Booked]
              │
              ▼
  Call Progression Complete (100% Progress):
  Trigger End-of-Demo Modal:
  - Heading: "Like What You Heard?"
  - Subheading: "Let's build an AI voice system for your business."
  - Primary CTA: "Book Strategy Audit →" (Opens Path A Modal)
  - Secondary CTA: "Explore More Demos"
```

---

## 3. Synchronized Workflow Animation Rules

The 6-step workflow animation above the transcript dynamically updates based on audio timestamp (`currentTime` vs. `line.start`/`line.end`):

- **Step 1: Incoming Call** (`0s - 4s`): Activates call ingress indicator.
- **Step 2: AI Answers** (`5s - 12s`): Activates Sarah AI voice response.
- **Step 3: Lead Qualified** (`13s - 24s`): Triage logic determines emergency slot needed.
- **Step 4: Appointment Booked** (`25s - 48s`): Calendar slot reserved in Dentrix / Google Calendar.
- **Step 5: CRM Updated** (`49s - 58s`): HubSpot / Salesforce lead score updated to 95.
- **Step 6: WhatsApp Sent** (`59s - 68s`): Twilio WhatsApp API confirmation sent to caller.

---

## 4. Developer Technical Output Toggle

To keep the interface clean and business-focused:

- **Default State**: Collapsed (`showTechOutput = false`).
- **Target Audience**: 90% of business buyers view the transcript and workflow animation. Only technical architects expand this drawer.
- **Payload**: On expand (`▼ View Technical Output`), displays formatted JSON payload containing:
  - `call_id`: Unique PEXEK execution hash.
  - `intent`: Classified customer intent.
  - `confidence`: Intent classification confidence score (e.g. `0.98`).
  - `entities`: Extracted parameters (e.g. `patient_name`, `dob`, `insurance`).
  - `actions_executed`: Array of connected API calls (Dentrix, HubSpot, Twilio).

---

## 5. Conversion Loop Integration (Path B → Path A)

The Voice Demo page contains strategic conversion triggers to seamlessly redirect engaged visitors into **Path A (Strategy Audit Modal)**:

1. **Top Hero CTA**: "Book Strategy Audit →" button next to audio controls.
2. **Mid-Page Banner**: "Want to hear how AI voice sounds for your industry?" → Opens Path A Modal.
3. **End-of-Demo Modal**: Fires automatically upon 100% audio completion with a high-intent prompt to book a custom strategy session.
