"use client";

import { useCallback, useEffect } from "react";

// Pre-embedded base64 audio to eliminate any network fetch delay or latency
const SOUND_PRESS_B64 = "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";
const SOUND_RELEASE_B64 = "//uQxAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAEAAAIKABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgICAgICAgICAgICAgICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwP////////////////////////////////8AAAA6TEFNRTMuMTAwAc0AAAAAAAAAABSAJASAQgAAgAAACChfu8A9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//uQxAAADsWTJ1RhgBuosyXzM6AAJOWpkktNSIkHJk71bsQIECCEQBgbv1/cOLcXAAAIA9w4GBi3RERERP9ERPRECAAAAIju7u7nuBgYGBgbnAMW+iJXAAARuBgYuAYGBgbnogGLA3d3P//80T/rgaIiJ//9d3cAAET//d3dz+IiJ//u76AYtz/jgBUcs22LgpHEDCNVSXr9jokKJjElZxW6AImGLmkku+gnoDOa4FyKrPqia0kILoIJRK3SZO05rRfguWXfutFUJgetAD8QACg5ngDO0Bjr5wXA1AuuHIQ0yIHnbmZBt+mWYsbKX+qUsvkU06NmLRqkCB4CUOK35cRQSGJb3DC/juH4My3eiDqMHcu27lj85DQXrV+1hh2p/aTU9qzHn3l8MS2b1OVedqS+GJNznM8auUso5m7q9zHm7tM9sqtUj+Oo1+fzq73/////6/9We4Unf/89//Pp5ZXpX8hicjcvr8/dbf/+pZ3/45gMBFXW272uRuAElJxySWW3Y0LFYpjkC9TAwci2g0AYQprLlhlAzSKoZSFlTYmu//uSxBWAGGWDU7msABtcNCSjsYABl+5tnL4LVAhxwCeSzHZZyrqKLGh2PMOQTczzyy5fjaVKxWI87az7/wqlvWakO3I1Tfj+8MP5VjdDllx6ozetSmU2cKDKzW5nUy/uWXedlV2Mxmtlzfcd43O/qzQXafLe8c/+l1Td1ll27+stcnO3ce/f/s/K+/zlzN/dX7mGdLdpef/6ylOVPlljzLdfGkw/8onTT96AoUoHfAAADASGwXIn00JQFqDgKJoMl/YFc5hCYXVtoTUkmrFolzDkzcFCSocYSJI01KpFh0JyfVqiVJZECLB1QIlGwxgMsAg4XUa7HVxcZxk6mVSuVteb59oKeF5atLWhqflVqzSzsslVJR0UetcguTVbsfhl3aaXS6tKZdarbjMpwmpdMU3JTGaXUql3LVNaq3bOst475d/mHcf///H+1aWzcl09uW5c7V/8qbe8bXcss+ZXdXtXeX8bk3Lt4X7Nq7e7qv/d9xw3V/n61v87+OGeOWOr+TuwxCoPlQAAPUXcrlcjTSMVCUk7SCGIxcw1Wm2Vq1Kaa//7ksQOgBftrSsU94ADW0MlszLwABHZy6Nb5TR3Z0SnosXVR2ItCk+T506RBAh8nGkESuD6IWpWwu+3GAlI9FWqFGp2lDJmCDeB38S7yIoKQWPbxWOoZ/oW9Q803JOIY4nOo1A2oeh7s/DoeKydSIY4XkbUPc29D42twHnvT/+nvemobGz5tSj/eIFPDZ/mHf+lMv5r3vndKR8ejyW/79whv/mHamf/iHDvA/v/6fd9f/7gGdYErYiW4iwEAQCMkAACASsOKQz8EIVxm7UnXiEVbPTp7TNyabosE0SGjpFiNtpJ7BOCdiUTa7cSBKfEFDT7cD1JWbpxdK0s2ZZZFYdBmrZfUFMtLnNq3c9vbXgKqLK4M+Jcq17E2/pq00ekSB0PYYVY2T0e0g4e48z5C/muPPGL43KphZtfH+217e0t4n+dz7+cwtXzmFJGniv3r/GabpO9jW1S0H+m85xj739U3nMC8S/w/e78CWOzwLfvN5i1m//////////14d84i1xT////////wPmXNKQF1S9tdriAE0YjV6yyDeBzA5hDh6j/+5LECYPTtZkfvPWAAAAANIAAAASCkFHpDUhqRNSEnShoJQEQEw6i5E1qGompqampqampsbHrlpqampsbGxsbHr2udtNR2jtHaTTZ3DjY2NjZsOuW18JGw7h3G1tNXX//tRNSSTTWnGzf2ta1vJqanWta13///7nbW8ta1rUTU2NnXtbXtbX//7r/hznO3Odw5ztpqa201NTrVHv1A0DKTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq";

interface AudioState {
  context: AudioContext;
  buffers: {
    press?: AudioBuffer;
    release?: AudioBuffer;
  };
}

let globalAudioState: AudioState | null = null;
let decodePromise: Promise<void> | null = null;

function base64ToArrayBuffer(base64: string): ArrayBuffer {
  const binaryString = window.atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}

function startDecoding(state: AudioState): Promise<void> {
  if (decodePromise) return decodePromise;
  decodePromise = (async () => {
    try {
      const [pressBuf, releaseBuf] = await Promise.all([
        state.context.decodeAudioData(base64ToArrayBuffer(SOUND_PRESS_B64).slice(0)),
        state.context.decodeAudioData(base64ToArrayBuffer(SOUND_RELEASE_B64).slice(0)),
      ]);
      state.buffers.press = pressBuf;
      state.buffers.release = releaseBuf;
    } catch (e) {
      decodePromise = null;
    }
  })();
  return decodePromise;
}

function getOrInitAudio(): AudioState | null {
  if (typeof window === "undefined") return null;
  if (globalAudioState) return globalAudioState;

  const AudioContextClass =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  if (!AudioContextClass) return null;

  const context = new AudioContextClass();
  const state: AudioState = { context, buffers: {} };
  globalAudioState = state;

  // Start decoding audio data immediately in background on page load
  void startDecoding(state);

  // Resume context on any early user gesture
  const unlock = () => {
    if (context.state === "suspended") {
      void context.resume().catch(() => {});
    }
  };

  const events = ["pointerdown", "mousedown", "touchstart", "keydown", "click", "wheel"];
  events.forEach((evt) => {
    window.addEventListener(evt, unlock, { capture: true, passive: true });
  });

  return state;
}

function playBuffer(context: AudioContext, buffer: AudioBuffer) {
  try {
    const source = context.createBufferSource();
    const gain = context.createGain();
    source.buffer = buffer;
    gain.gain.value = 0.45;
    source.connect(gain).connect(context.destination);
    source.onended = () => {
      source.disconnect();
      gain.disconnect();
    };
    source.start(0);
  } catch {
    // ignore
  }
}

export function useKeyboardSounds() {
  useEffect(() => {
    getOrInitAudio();
  }, []);

  return useCallback((pressed: boolean) => {
    const state = getOrInitAudio();
    if (!state) return;

    const play = () => {
      const buffer = state.buffers[pressed ? "press" : "release"];
      if (buffer) {
        playBuffer(state.context, buffer);
      }
    };

    if (state.context.state === "suspended") {
      void state.context.resume().then(() => {
        if (!state.buffers.press || !state.buffers.release) {
          void startDecoding(state).then(play);
        } else {
          play();
        }
      }).catch(() => {});
      return;
    }

    if (!state.buffers.press || !state.buffers.release) {
      void startDecoding(state).then(play);
      return;
    }

    play();
  }, []);
}
