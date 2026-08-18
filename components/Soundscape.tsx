"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Generative soundscape — wind through the mountains, distant temple
 * bells and occasional birdsong, all synthesised with WebAudio so no
 * external audio files are needed.
 */
export function useSoundscape() {
  const [enabled, setEnabled] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const timersRef = useRef<number[]>([]);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((t) => window.clearInterval(t));
    timersRef.current = [];
  }, []);

  const stop = useCallback(() => {
    clearTimers();
    try {
      ctxRef.current?.close();
    } catch {
      /* already closed */
    }
    ctxRef.current = null;
    setEnabled(false);
  }, [clearTimers]);

  const start = useCallback(() => {
    if (ctxRef.current) return;
    const Ctor =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return;
    const ctx = new Ctor();
    ctxRef.current = ctx;

    const master = ctx.createGain();
    master.gain.value = 0;
    master.connect(ctx.destination);

    /* ---- wind: filtered looping noise, gently breathing ---- */
    const bufferSize = 2 * ctx.sampleRate;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuffer;
    noise.loop = true;

    const windFilter = ctx.createBiquadFilter();
    windFilter.type = "lowpass";
    windFilter.frequency.value = 260;
    windFilter.Q.value = 0.6;

    const windGain = ctx.createGain();
    windGain.gain.value = 0.5;

    noise.connect(windFilter);
    windFilter.connect(windGain);
    windGain.connect(master);
    noise.start();

    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.06;
    const lfoDepth = ctx.createGain();
    lfoDepth.gain.value = 0.22;
    lfo.connect(lfoDepth);
    lfoDepth.connect(windGain.gain);
    lfo.start();

    /* ---- distant bells ---- */
    const bell = (when: number, freq: number) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      g.gain.setValueAtTime(0.0001, when);
      g.gain.exponentialRampToValueAtTime(0.05, when + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, when + 2.6);
      osc.connect(g);
      g.connect(master);
      osc.start(when);
      osc.stop(when + 2.8);
    };

    const scheduleBells = () => {
      if (!ctxRef.current) return;
      const t = ctx.currentTime + 0.3;
      const base = 320 + Math.random() * 240;
      bell(t, base);
      if (Math.random() > 0.5) bell(t + 0.6, base * 1.5);
    };

    /* ---- birds ---- */
    const chirp = (when: number) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = "sine";
      const base = 2100 + Math.random() * 900;
      osc.frequency.setValueAtTime(base, when);
      osc.frequency.exponentialRampToValueAtTime(base * 1.25, when + 0.08);
      osc.frequency.exponentialRampToValueAtTime(base * 0.9, when + 0.16);
      g.gain.setValueAtTime(0.0001, when);
      g.gain.exponentialRampToValueAtTime(0.02, when + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, when + 0.2);
      osc.connect(g);
      g.connect(master);
      osc.start(when);
      osc.stop(when + 0.25);
    };
    const scheduleBirds = () => {
      if (!ctxRef.current) return;
      const t = ctx.currentTime + 0.2;
      chirp(t);
      if (Math.random() > 0.5) chirp(t + 0.35);
    };

    master.gain.setTargetAtTime(0.6, ctx.currentTime, 1.6);
    timersRef.current.push(window.setInterval(scheduleBells, 8000));
    timersRef.current.push(window.setInterval(scheduleBirds, 13000));
    setEnabled(true);
  }, []);

  useEffect(() => () => stop(), [stop]);

  const toggle = useCallback(() => {
    if (ctxRef.current) stop();
    else start();
  }, [start, stop]);

  return { enabled, toggle };
}
