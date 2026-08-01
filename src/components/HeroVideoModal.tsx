import React, { useState, useEffect } from 'react';
import { X, Terminal, Cpu, CheckCircle2, Zap, ShieldAlert, Radio } from 'lucide-react';

interface HeroVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HeroVideoModal: React.FC<HeroVideoModalProps> = ({ isOpen, onClose }) => {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    if (isOpen) {
      setLogs([
        '00:00.001 [SIP_INGRESS] Incoming call detected from +1 (480) 555-0192',
        '00:00.042 [VOICE_OS] Voice activity detected. Speech synthesis initialized.',
        '00:00.120 [LLM_REASONING] Prompting PEXEK Dental Intake Model v4.8...',
        '00:00.380 [NEURAL_TTS] Generating audio frames with natural pause & warm tone...',
        '00:00.418 [SIP_EGRESS] First audio byte dispatched. Latency: 418ms.',
        '00:01.200 [INTENT_EXTRACT] Intent: Emergency Toothache, Appointment Urgency: High',
        '00:02.400 [BOOKING_OS] Calendar API queried. Available Slot: 2:30 PM Today.',
        '00:03.100 [CALL_RESOLVED] Slot locked. WhatsApp Confirmation Dispatched via API.'
      ]);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0a0e1a] border border-white/15 rounded-sm max-w-3xl w-full overflow-hidden shadow-2xl flex flex-col">
        
        {/* Header */}
        <div className="p-4 bg-[#050507] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono">
            <Radio className="w-4 h-4 text-[#00d4ff] animate-pulse" />
            <span className="text-sm font-bold text-white">PEXEK Real-Time Execution Trace</span>
            <span className="text-[10px] bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] px-2 py-0.5 rounded-[2px]">
              Sub-450ms Architecture
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-sm"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Terminal Trace: Inbound Call Processing</span>
            <span className="text-[#00d4ff] font-mono">100% Zero Dropped Packets</span>
          </div>

          {/* Terminal Console */}
          <div className="bg-[#030407] border border-white/10 p-4 rounded-sm font-mono text-xs text-cyan-400 space-y-2 max-h-72 overflow-y-auto">
            {logs.map((log, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-slate-600 select-none">&gt;</span>
                <span className={index === logs.length - 1 ? 'text-[#00d4ff] font-bold' : 'text-slate-300'}>
                  {log}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-3 text-center font-mono">
            <div className="bg-[#0f172a] p-3 border border-white/5 rounded-sm">
              <div className="text-[10px] text-slate-400">SPEECH LATENCY</div>
              <div className="text-lg font-bold text-[#00d4ff]">418 ms</div>
            </div>
            <div className="bg-[#0f172a] p-3 border border-white/5 rounded-sm">
              <div className="text-[10px] text-slate-400">RESOLUTION</div>
              <div className="text-lg font-bold text-cyan-400">Autonomous</div>
            </div>
            <div className="bg-[#0f172a] p-3 border border-white/5 rounded-sm">
              <div className="text-[10px] text-slate-400">CRM SYNC</div>
              <div className="text-lg font-bold text-cyan-400">Instant</div>
            </div>
          </div>

        </div>

        <div className="p-4 bg-[#050507] border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="btn-pexek-primary text-xs px-5 py-2 font-bold"
          >
            Close Trace Demo
          </button>
        </div>

      </div>
    </div>
  );
};
