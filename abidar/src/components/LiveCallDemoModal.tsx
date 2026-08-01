import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, Mic, Phone, CheckCircle2, RefreshCw, Cpu, Database } from 'lucide-react';
import { INDUSTRIES } from '../data/mockData';

interface LiveCallDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialIndustryId?: string;
}

export const LiveCallDemoModal: React.FC<LiveCallDemoModalProps> = ({
  isOpen,
  onClose,
  initialIndustryId = 'dental'
}) => {
  const [selectedIndustryId, setSelectedIndustryId] = useState(initialIndustryId);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTranscriptIndex, setCurrentTranscriptIndex] = useState(0);
  const [latencyTimer, setLatencyTimer] = useState(412);

  const activeIndustry = INDUSTRIES.find(i => i.id === selectedIndustryId) || INDUSTRIES[0];

  useEffect(() => {
    let interval: any = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTranscriptIndex((prev) => {
          if (prev >= activeIndustry.sampleCallTranscript.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
        setLatencyTimer(Math.floor(Math.random() * 80) + 380);
      }, 2800);
    }
    return () => clearInterval(interval);
  }, [isPlaying, activeIndustry]);

  if (!isOpen) return null;

  const handleTogglePlay = () => {
    if (!isPlaying && currentTranscriptIndex >= activeIndustry.sampleCallTranscript.length - 1) {
      setCurrentTranscriptIndex(0);
    }
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentTranscriptIndex(0);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0a0e1a] border border-white/15 rounded-sm max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-4 sm:p-6 bg-[#050507] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#00d4ff]/10 border border-[#00d4ff]/40 rounded-sm flex items-center justify-center">
              <Phone className="w-5 h-5 text-[#00d4ff] animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white font-mono">PEXEK VoiceOS™ Simulated Call Simulator</h3>
                <span className="text-[10px] bg-cyan-950 border border-cyan-500/40 text-cyan-400 font-mono px-2 py-0.5 rounded-[2px]">
                  SIMULATED SCENARIO
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Sub-450ms natural conversation engine simulating a typical vertical call flow
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-sm"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Industry Switcher Tabs */}
        <div className="bg-[#080c16] border-b border-white/10 px-4 py-2.5 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mr-2 whitespace-nowrap">
            Scenario:
          </span>
          {INDUSTRIES.map((ind) => (
            <button
              key={ind.id}
              onClick={() => {
                setSelectedIndustryId(ind.id);
                setIsPlaying(false);
                setCurrentTranscriptIndex(0);
              }}
              className={`text-xs px-3 py-1.5 rounded-[2px] font-medium transition-all whitespace-nowrap ${
                selectedIndustryId === ind.id
                  ? 'bg-[#00d4ff] text-black font-bold shadow-sm'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              {ind.name}
            </button>
          ))}
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Audio Waveform Control Bar */}
          <div className="bg-[#0f172a] border border-white/10 p-4 rounded-sm space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              
              <div className="flex items-center gap-3">
                <button
                  onClick={handleTogglePlay}
                  className="w-12 h-12 btn-pexek-primary rounded-sm flex items-center justify-center shrink-0"
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 text-black fill-black" />
                  ) : (
                    <Play className="w-6 h-6 text-black fill-black ml-0.5" />
                  )}
                </button>

                <button
                  onClick={handleReset}
                  className="p-2.5 bg-slate-800 text-slate-300 hover:text-white rounded-sm border border-slate-700"
                  title="Reset Call"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>

                <div>
                  <div className="text-sm font-bold text-white font-mono">{activeIndustry.tagline}</div>
                  <div className="text-xs text-slate-400">
                    Step {currentTranscriptIndex + 1} of {activeIndustry.sampleCallTranscript.length}
                  </div>
                </div>
              </div>

              {/* Real-time telemetry */}
              <div className="flex items-center gap-4 text-xs font-mono bg-[#050507] border border-white/10 px-3 py-2 rounded-sm w-full sm:w-auto justify-between sm:justify-start">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Cpu className="w-3.5 h-3.5 text-[#00d4ff]" />
                  <span>Latency: <strong className="text-[#00d4ff]">{latencyTimer}ms</strong></span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Database className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Intent Fit: <strong className="text-cyan-400">99.8%</strong></span>
                </div>
              </div>

            </div>

            {/* Audio Visualizer Wave Lines */}
            <div className="h-12 bg-[#050507] border border-white/5 rounded-sm p-2 flex items-center justify-between gap-1">
              {Array.from({ length: 42 }).map((_, idx) => {
                const isActive = isPlaying && idx % 3 === (currentTranscriptIndex % 3);
                const heightPercentage = isPlaying ? Math.sin(idx + currentTranscriptIndex) * 40 + 50 : 15;
                return (
                  <div
                    key={idx}
                    className={`flex-1 transition-all duration-150 rounded-full ${
                      idx / 42 <= (currentTranscriptIndex + 1) / activeIndustry.sampleCallTranscript.length
                        ? 'bg-[#00d4ff]'
                        : 'bg-slate-800'
                    }`}
                    style={{ height: `${Math.max(10, heightPercentage)}%` }}
                  />
                );
              })}
            </div>
          </div>

          {/* Transcript Box */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                Live Speech-to-Text Transcript
              </span>
              <span className="text-xs text-cyan-400 font-mono flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Synchronized with CRM</span>
              </span>
            </div>

            <div className="space-y-3 bg-[#050507] border border-white/10 p-4 rounded-sm max-h-60 overflow-y-auto font-sans">
              {activeIndustry.sampleCallTranscript.map((turn, idx) => {
                const isCurrent = idx === currentTranscriptIndex;
                const isPast = idx < currentTranscriptIndex;
                return (
                  <div
                    key={idx}
                    className={`p-3 rounded-[2px] transition-all border ${
                      turn.speaker === 'PEXEK AI'
                        ? isCurrent
                          ? 'bg-[#00d4ff]/10 border-[#00d4ff] text-white'
                          : 'bg-[#0f172a] border-white/5 text-slate-200'
                        : isCurrent
                        ? 'bg-slate-800 border-slate-600 text-white'
                        : 'bg-[#080c16] border-white/5 text-slate-400'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                      <span className={`font-bold ${turn.speaker === 'PEXEK AI' ? 'text-[#00d4ff]' : 'text-slate-300'}`}>
                        {turn.speaker === 'PEXEK AI' ? '🤖 PEXEK VoiceOS Agent' : '👤 Caller'}
                      </span>
                      <span className="text-slate-500">{turn.timestamp}</span>
                    </div>
                    <p className="text-sm leading-relaxed">{turn.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Extracted Struct CRM Payload Preview */}
          <div className="bg-[#070b14] border border-white/10 p-4 rounded-sm space-y-2 font-mono text-xs">
            <div className="text-slate-400 uppercase font-bold tracking-wider text-[11px] flex items-center justify-between">
              <span>Automatic CRM Structured Output (JSON Payload)</span>
              <span className="text-[#00d4ff]">WorkflowOS™ Auto Sync</span>
            </div>
            <pre className="bg-[#030407] p-3 border border-white/5 rounded-sm text-cyan-400 overflow-x-auto text-[11px]">
{JSON.stringify({
  event: "CALL_COMPLETED",
  industry: activeIndustry.name,
  caller_status: "QUALIFIED_HOT_LEAD",
  intent_score: 0.98,
  action_taken: "CALENDAR_APPOINTMENT_LOCKED",
  crm_sync_status: "SUCCESS_200_OK",
  whatsapp_confirmation_sent: true
}, null, 2)}
            </pre>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#050507] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-400">
            Want an AI voice agent trained on your specific business phone script?
          </span>
          <button
            onClick={() => {
              onClose();
              // Trigger audit modal
            }}
            className="btn-pexek-primary text-xs px-4 py-2 font-bold w-full sm:w-auto"
          >
            Deploy This Agent For Your Business →
          </button>
        </div>

      </div>
    </div>
  );
};
