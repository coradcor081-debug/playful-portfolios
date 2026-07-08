import { useEffect, useState } from "react";

const PHRASES = ["Welcome to my world", "Built by Alex Njugi"];

// Cinematic timing (ms)
const DOT_STAGGER = 550; // gap between each dot appearing
const DOTS_START = 500; // first dot delay
const MONKEY_DELAY = DOTS_START + DOT_STAGGER * 3 + 200; // after 3 dots
const MONKEY_DURATION = 900;
const PHRASE_START = MONKEY_DELAY + MONKEY_DURATION + 400; // ~pause after monkey lands
const PHRASE_DURATION = 3600; // per phrase, slow cross-fade
const FADE_DURATION = 1400;

export function IntroLoader({ onDone }: { onDone: () => void }) {
  const [stage, setStage] = useState<"intro" | "fading" | "gone">("intro");
  const [phraseIdx, setPhraseIdx] = useState(-1);

  useEffect(() => {
    if (stage !== "intro") return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    PHRASES.forEach((_, i) => {
      timers.push(
        setTimeout(() => setPhraseIdx(i), PHRASE_START + i * PHRASE_DURATION),
      );
    });
    timers.push(
      setTimeout(
        () => setStage("fading"),
        PHRASE_START + PHRASES.length * PHRASE_DURATION,
      ),
    );
    return () => timers.forEach(clearTimeout);
  }, [stage]);

  useEffect(() => {
    if (stage !== "fading") return;
    const t = setTimeout(() => {
      setStage("gone");
      onDone();
    }, FADE_DURATION);
    return () => clearTimeout(t);
  }, [stage, onDone]);

  if (stage === "gone") return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white"
      style={{
        transition: `opacity ${FADE_DURATION}ms cubic-bezier(0.42, 0, 0.58, 1)`,
        opacity: stage === "fading" ? 0 : 1,
        pointerEvents: stage === "fading" ? "none" : "auto",
      }}
      aria-hidden={stage !== "intro"}
    >
      {/* Subtle vignette glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0) 60%)",
        }}
      />

      <div className="relative flex items-end gap-3 font-black tracking-tight leading-none select-none text-7xl sm:text-8xl md:text-9xl">
        <span
          className="inline-block"
          style={{ animation: `loader-dot-in 700ms ease-out ${DOTS_START}ms both` }}
        >
          .
        </span>
        <span
          className="inline-block"
          style={{ animation: `loader-dot-in 700ms ease-out ${DOTS_START + DOT_STAGGER}ms both` }}
        >
          .
        </span>
        <span
          className="inline-block"
          style={{ animation: `loader-dot-in 700ms ease-out ${DOTS_START + DOT_STAGGER * 2}ms both` }}
        >
          .
        </span>
        <span
          className="inline-block ml-2"
          style={{
            animation: `loader-monkey-in ${MONKEY_DURATION}ms cubic-bezier(0.34, 1.56, 0.64, 1) ${MONKEY_DELAY}ms both`,
          }}
        >
          🐒
        </span>
      </div>

      <div className="relative mt-12 h-10 sm:h-12 flex items-center justify-center">
        {phraseIdx >= 0 && (
          <p
            key={phraseIdx}
            className="text-xl sm:text-2xl md:text-3xl font-light tracking-[0.15em] text-white/90"
            style={{
              animation: `loader-text-cycle ${PHRASE_DURATION}ms cubic-bezier(0.42, 0, 0.58, 1) both`,
            }}
          >
            {PHRASES[phraseIdx]}
          </p>
        )}
      </div>
    </div>
  );
}