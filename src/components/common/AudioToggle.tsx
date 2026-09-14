import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useToast } from '../ui/Toast';

let audioCtx: AudioContext | null = null;

export const playSound = (type: 'click' | 'hover' | 'success') => {
  const isMuted = localStorage.getItem('portfolio_audio_muted') === 'true';
  if (isMuted) return;

  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    if (type === 'hover') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(440, now + 0.04);
      gain.gain.setValueAtTime(0.015, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
      osc.start(now);
      osc.stop(now + 0.04);
    } else if (type === 'click') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(780, now + 0.06);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
      osc.start(now);
      osc.stop(now + 0.06);
    } else if (type === 'success') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.setValueAtTime(554.37, now + 0.08);
      osc.frequency.setValueAtTime(659.25, now + 0.16);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.start(now);
      osc.stop(now + 0.3);
    }
  } catch (e) {
    // Audio Context blocked or unavailable
  }
};

export const AudioToggle: React.FC = () => {
  const [isMuted, setIsMuted] = useState(() => {
    return localStorage.getItem('portfolio_audio_muted') === 'true';
  });
  const { showToast } = useToast();

  const toggleAudio = () => {
    const nextState = !isMuted;
    setIsMuted(nextState);
    localStorage.setItem('portfolio_audio_muted', nextState.toString());
    if (!nextState) {
      playSound('success');
      showToast('Sound effects enabled', 'info');
    } else {
      showToast('Sound effects muted', 'info');
    }
  };

  return (
    <button
      onClick={toggleAudio}
      className="p-2 rounded-lg bg-slate-800/40 hover:bg-slate-700/60 border border-slate-700/50 text-slate-300 hover:text-white transition-all duration-200"
      title={isMuted ? 'Unmute Sound Effects' : 'Mute Sound Effects'}
    >
      {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
    </button>
  );
};
