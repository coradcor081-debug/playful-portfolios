import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import doodles from "@/assets/doodles.png";
import { MusicPlayer } from "@/components/MusicPlayer";
import { IntroLoader } from "@/components/IntroLoader";
import avatar from "@/assets/alex-avatar.jpg";
import desk from "@/assets/desk.jpg";
import nairobi from "@/assets/nairobi.jpg";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Njugi Karanja — Full-Stack Developer & AI Builder" },
      { name: "description", content: "Playful portfolio of Alex Njugi Karanja, a full-stack developer & AI/Robotics student from Nairobi building delightful, useful software." },
      { property: "og:title", content: "Alex Njugi Karanja — Full-Stack Developer & AI Builder" },
      { property: "og:description", content: "Full-stack engineer crafting bold, user-friendly web experiences. Available for freelance & collaborations." },
    ],
  }),
  component: Index,
});

const STACK = [
  "React", "JavaScript", "Node.js", "Python", "Flask",
  "HTML", "CSS", "Git & GitHub", "VS Code",
  "Machine Learning", "Computer Vision", "Robotics", "NLP", "Embedded Systems",
];

const SUPERPOWERS = [
  {
    emoji: "✦",
    title: "Front-end Flair",
    body: "React interfaces with personality — fast, accessible, and pixel-tight.",
    tape: "tape-yellow",
  },
  {
    emoji: "✺",
    title: "Full-Stack Glue",
    body: "Node, Python & Flask APIs wired to thoughtful UIs that actually ship.",
    tape: "tape-mint",
  },
  {
    emoji: "❉",
    title: "AI & Robotics",
    body: "Studying ML, computer vision and autonomous systems at USIU-Africa.",
    tape: "tape-pink",
  },
  {
    emoji: "✿",
    title: "Soft Skills",
    body: "AMI-trained: clear comms, empathy-led leadership, calm under pressure.",
    tape: "tape-blue",
  },
];

const NAV = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#powers", label: "Powers" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

const JOURNEY = [
  { year: "2022", title: "Hello, world", body: "Curiosity kicked in. Late nights with HTML, CSS & JavaScript." },
  { year: "2023", title: "Moringa School", body: "Trained deeply in React, Node, Python & Flask. Shipped my first real apps." },
  { year: "2024", title: "Freelance + collabs", body: "Started taking on freelance projects for startups and individuals." },
  { year: "2025", title: "USIU-Africa", body: "Began BSc in AI & Robotics. Diving into ML, computer vision, NLP." },
  { year: "Now", title: "Building things people love", body: "Available for freelance + collabs. Let's create something good." },
];

function Index() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    // Skip loader on subsequent navigations within the session
    if (typeof window !== "undefined" && sessionStorage.getItem("introShown")) {
      setLoaded(true);
    }
  }, []);
  return (
    <>
      {!loaded && (
        <IntroLoader
          onDone={() => {
            if (typeof window !== "undefined") sessionStorage.setItem("introShown", "1");
            setLoaded(true);
          }}
        />
      )}
      <div className="min-h-screen overflow-x-hidden text-foreground">
        {loaded && (
          <>
            <div className="reveal-top">
              <Nav />
            </div>
            <main className="mx-auto max-w-6xl px-4 pb-20 sm:px-5">
              <div className="reveal-left" style={{ animationDelay: "150ms" }}>
                <Hero />
              </div>
              <div className="reveal-right" style={{ animationDelay: "300ms" }}>
                <Marquee />
              </div>
              <div className="reveal-left" style={{ animationDelay: "400ms" }}>
                <About />
              </div>
              <div className="reveal-right" style={{ animationDelay: "500ms" }}>
                <Stack />
              </div>
              <div className="reveal-left" style={{ animationDelay: "600ms" }}>
                <Powers />
              </div>
              <div className="reveal-right" style={{ animationDelay: "700ms" }}>
                <Journey />
              </div>
              <div className="reveal-bottom" style={{ animationDelay: "800ms" }}>
                <Contact />
              </div>
            </main>
            <div className="reveal-bottom" style={{ animationDelay: "900ms" }}>
              <Footer />
            </div>
            <MusicPlayer />
          </>
        )}
      </div>
    </>
  );
}

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);
  return (
    <header className="sticky top-2 z-40 mx-auto mt-2 max-w-6xl px-3 sm:top-3 sm:mt-3 sm:px-5">
      <div className="relative flex items-center justify-between rounded-full border-2 border-[var(--ink)] bg-[#fffdf6]/90 px-3 py-2 backdrop-blur sm:px-4">
        <span className="tape tape-pink left-1/2 top-[-12px] -translate-x-1/2 rotate-[-4deg]" />
        <a href="#top" className="flex min-w-0 items-center gap-2 font-hand text-2xl leading-none sm:text-3xl">
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[var(--ink)] bg-[var(--pop-yellow)] font-type text-xs sm:h-9 sm:w-9 sm:text-sm">A</span>
          <span className="truncate">alex's scrapbook</span>
        </a>
        <nav className="hidden gap-1 lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="rounded-full px-3 py-1 font-hand text-xl hover:bg-[var(--pop-yellow)]">
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn-scrap pink !hidden lg:!inline-flex">say hi ✿</a>
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[var(--ink)] bg-[var(--pop-yellow)] shadow-[2px_2px_0_rgba(0,0,0,0.2)] lg:hidden"
        >
          <span className="relative block h-4 w-5">
            <span className={`absolute left-0 right-0 h-[2.5px] rounded-full bg-[var(--ink)] transition-all ${menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 right-0 top-1/2 h-[2.5px] -translate-y-1/2 rounded-full bg-[var(--ink)] transition-all ${menuOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 right-0 h-[2.5px] rounded-full bg-[var(--ink)] transition-all ${menuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"}`} />
          </span>
        </button>
      </div>
      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="lg:hidden" aria-hidden={!menuOpen}>
          <div className="mt-2 origin-top animate-in zoom-in-95 fade-in duration-300">
          <div className="relative mx-auto max-w-md rounded-[10px] border-2 border-[var(--ink)] bg-[#fffdf6] p-4 shadow-[4px_5px_0_rgba(0,0,0,0.2)]">
            <span className="tape tape-yellow left-6 top-[-12px] rotate-[-6deg]" />
            <span className="tape tape-mint right-6 top-[-10px] rotate-[8deg] !w-14" />
            <ul className="flex flex-col gap-1">
              {NAV.map((n, i) => (
                <li key={n.href} style={{ transform: `rotate(${i % 2 ? 0.6 : -0.6}deg)` }}>
                  <a
                    href={n.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between rounded-md border-b-2 border-dashed border-[var(--ink)]/30 px-2 py-2 font-hand text-3xl leading-none hover:bg-[var(--pop-yellow)]"
                  >
                    <span>{n.label.toLowerCase()}</span>
                    <span className="font-type text-[10px] tracking-widest text-muted-foreground">0{i + 1}</span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="btn-scrap pink mt-4 w-full justify-center"
            >
              say hi ✿
            </a>
            <p className="mt-3 text-center font-marker text-xs text-muted-foreground">— flip the page —</p>
          </div>
        </div>
        </div>
      )}
    </header>
  );
}

// Ransom-note style cut-out letters — each character gets its own
// font, color, background and tilt like a magazine-clipping collage.
function RansomText({ text, size = "text-6xl sm:text-7xl md:text-8xl" }: { text: string; size?: string }) {
  // Vibrant magazine-clipping palette — bold colors, ink contrasts,
  // a couple of textured/patterned backgrounds for scrapbook feel.
  const palette = [
    {
      bg: "linear-gradient(135deg,#f6d365 0%,#fda085 100%)",
      ink: "#7a1f3d",
      font: "'Times New Roman', serif",
    },
    {
      bg: "#fff8e6",
      ink: "#c8195a",
      font: "Georgia, serif",
    },
    {
      bg: "linear-gradient(135deg,#1e6091 0%,#3aa9c9 100%)",
      ink: "#fffdf6",
      font: "var(--font-display)",
    },
    {
      bg: "#2b1e5c",
      ink: "#f5c518",
      font: "Impact, sans-serif",
    },
    {
      bg: "linear-gradient(135deg,#ff5f6d 0%,#ffc371 100%)",
      ink: "#0d0d0d",
      font: "var(--font-marker)",
    },
    {
      bg: "#0d0d0d",
      ink: "#f7d046",
      font: "var(--font-display)",
    },
    {
      bg: "linear-gradient(135deg,#7b2ff7 0%,#f107a3 100%)",
      ink: "#fffdf6",
      font: "'Courier New', monospace",
    },
    {
      bg: "#f5efe0",
      ink: "#1e6091",
      font: "var(--font-mono)",
    },
  ];
  return (
    <span className={`inline-flex flex-wrap items-end gap-[0.08em] align-baseline ${size}`}>
      {Array.from(text).map((ch, i) => {
        if (ch === " ") return <span key={i} className="w-3" />;
        const p = palette[(i * 3 + ch.charCodeAt(0)) % palette.length];
        const rot = ((i * 47) % 17) - 8;
        const skew = ((i * 13) % 9) - 4;
        const pad = i % 2 ? "0.05em 0.22em" : "0.02em 0.28em";
        return (
          <span
            key={i}
            className="relative inline-block leading-none"
            style={{
              background: p.bg,
              color: p.ink,
              fontFamily: p.font,
              fontWeight: 900,
              padding: pad,
              transform: `rotate(${rot}deg) skewX(${skew}deg)`,
              boxShadow:
                "3px 4px 0 rgba(0,0,0,0.22), 0 10px 18px -8px rgba(60,40,20,0.45)",
              textShadow: "0 1px 0 rgba(0,0,0,0.08)",
              clipPath:
                i % 3 === 0
                  ? "polygon(2% 6%, 98% 0%, 100% 94%, 4% 100%)"
                  : i % 3 === 1
                    ? "polygon(0% 10%, 96% 4%, 100% 92%, 6% 100%, 2% 50%)"
                    : "polygon(4% 0%, 100% 8%, 96% 96%, 0% 100%)",
            }}
          >
            {ch.toUpperCase()}
          </span>
        );
      })}
    </span>
  );
}

function Hero() {
  return (
    <section id="top" className="relative grid items-center gap-8 pt-14 pb-10 md:grid-cols-[1.2fr_1fr] md:gap-10 md:pt-20 md:pb-12">
      <div className="relative">
        <p className="font-type text-[11px] tracking-widest text-muted-foreground sm:text-sm">
          ★ NAIROBI · KENYA · EST. ALWAYS LEARNING ★
        </p>
        <h1 className="mt-3 font-hand text-5xl leading-[1.05] sm:text-6xl md:text-8xl">
          <span className="block">hey, I'm</span>
          <span className="my-2 block">
            <RansomText text="ALEX" size="text-6xl sm:text-7xl md:text-[7rem]" />
          </span>
          <span className="block">I make <span className="highlight">web things</span></span>
          <span className="block">that feel <span className="highlight-pink">human</span>.</span>
        </h1>
        <p className="mt-5 max-w-xl font-marker text-lg leading-relaxed sm:text-xl">
          Full-stack dev with a front-end flair. Studying AI & robotics at USIU-Africa,
          trained at Moringa. I turn curious ideas into apps people actually enjoy using.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a href="#contact" className="btn-scrap pink">let's build →</a>
          <a href="https://github.com/alex-njugi" target="_blank" rel="noreferrer" className="btn-scrap">github ↗</a>
          <a href="#journey" className="btn-scrap blue">my story</a>
          <span className="stamp">available · 2026</span>
        </div>
      </div>
      <HeroCollage />
    </section>
  );
}

function HeroCollage() {
  return (
    <div className="relative mx-auto h-[360px] w-full max-w-md sm:h-[420px] md:h-[440px]">
      <span aria-hidden className="doodle-gojo -left-16 -top-6 hidden md:block" />
      <span aria-hidden className="doodle-aang -right-14 bottom-[-30px] hidden md:block" />
      {/* Big polaroid */}
      <div className="polaroid absolute left-2 top-2 w-52 -rotate-[6deg] animate-sway sm:left-6 sm:w-64">
        <span className="tape tape-yellow left-1/2 top-[-12px] -translate-x-1/2 rotate-[-3deg]" />
        <img src={avatar} alt="Alex Njugi Karanja" width={640} height={768} className="h-44 w-full object-cover sm:h-56" />
        <p className="mt-3 text-center font-hand text-2xl">that's me ✿</p>
      </div>
      {/* Small desk polaroid */}
      <div className="polaroid absolute right-0 top-24 w-40 rotate-[7deg] animate-float sm:top-32 sm:w-48">
        <span className="tape tape-blue left-3 top-[-10px] rotate-[-12deg]" />
        <img src={desk} alt="My desk setup" width={768} height={640} loading="lazy" className="h-28 w-full object-cover sm:h-32" />
        <p className="mt-2 text-center font-hand text-xl">my desk</p>
      </div>
      {/* Sticky note */}
      <div className="sticky-note absolute bottom-2 left-0 w-44 rotate-[-4deg] bg-[var(--pop-yellow)] p-3 font-marker text-sm sm:w-52 sm:p-4 sm:text-base">
        <span className="tape tape-pink left-1/2 top-[-10px] -translate-x-1/2 rotate-[3deg]" />
        "code with curiosity,<br />ship with care."
        <div className="mt-2 text-right font-hand text-xl">— a.n.k</div>
      </div>
      {/* Stamp circle */}
      <div className="absolute -right-1 bottom-4 flex h-20 w-20 rotate-[14deg] items-center justify-center rounded-full border-4 border-dashed border-[oklch(0.5_0.18_25)] text-center font-type text-[9px] uppercase leading-tight text-[oklch(0.5_0.18_25)] sm:-right-2 sm:bottom-6 sm:h-24 sm:w-24 sm:text-[10px]">
        made<br/>with<br/>love<br/>♡ 254
      </div>
    </div>
  );
}

function Marquee() {
  const items = ["love ✿", "joy ✺", "peace ❀", "patience ★", "kindness ✦", "goodness ❉", "faithfulness ✝", "gentleness ♡", "self-control ✧"];

  const loop = [...items, ...items, ...items];
  return (
    <div className="torn-edges-y marquee-fade relative my-8 overflow-hidden border-y-2 border-dashed border-[var(--ink)] bg-[var(--pop-yellow)]/60 py-2 sm:my-10 sm:py-3">
      <div className="flex w-max animate-marquee gap-6 font-hand text-2xl sm:gap-8 sm:text-3xl">
        {loop.map((t, i) => (
          <span key={i} className="whitespace-nowrap">{t}</span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative grid gap-8 py-14 md:grid-cols-[1fr_1.4fr] md:items-start md:py-20">
      <div className="relative">
        <SectionLabel>page 02 · about</SectionLabel>
        <h2 className="mt-2 font-hand text-5xl sm:text-6xl">the<br/><span className="highlight-mint">short</span> story.</h2>
        <div className="relative mt-8 inline-block">
          <span className="tape tape-mint left-1/2 top-[-12px] -translate-x-1/2 rotate-[-6deg]" />
          <img src={nairobi} alt="Nairobi skyline" width={768} height={768} loading="lazy" className="polaroid h-48 w-48 -rotate-[3deg] object-cover sm:h-56 sm:w-56" />
        </div>
      </div>
      <div className="relative lined-paper paper-card-torn -rotate-[0.4deg] !p-6 font-marker text-lg leading-8 sm:!p-10 sm:text-xl sm:leading-9">
        <p>
          I'm a full-stack dev with a strong flair for <span className="highlight">front-end design</span>.
          Curiosity is my engine — I love turning rough ideas into apps that feel kind to use.
        </p>
        <p className="mt-4">
          Trained at <span className="highlight-pink">Moringa School</span> in React, JS, Node, Python & Flask.
          Now studying <span className="highlight-mint">BSc AI & Robotics</span> at USIU-Africa —
          ML, computer vision, NLP, embedded systems, ethical AI.
        </p>
        <p className="mt-4">
          Beyond code, I'm a devoted Christian — saved by grace, walking daily with Christ.
          Faith shapes how I work: integrity, humility, and excellence pursued with purpose.
        </p>
        <p className="mt-4">
          AMI-trained soft skills: clear comms, adaptability, emotional intelligence,
          empathy-led leadership. The kind of teammate you actually want on a Friday deploy.
        </p>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="relative py-14 md:py-20">
      <SectionLabel>page 03 · toolbox</SectionLabel>
      <h2 className="mt-2 font-hand text-5xl sm:text-6xl">things glued to <span className="highlight">my desk</span>.</h2>
      <p className="mt-3 max-w-2xl font-marker text-lg text-muted-foreground sm:text-xl">
        A mix of trusty web tech and the smart-systems side of things I'm studying.
      </p>
      <div className="relative mt-8 md:mt-10">
        <img src={doodles} alt="" aria-hidden width={1024} height={512} loading="lazy" className="pointer-events-none absolute inset-0 h-full w-full -rotate-2 object-contain opacity-30" />
        <ul className="relative flex flex-wrap gap-2 sm:gap-3">
          {STACK.map((s, i) => {
            const tapes = ["tape-yellow", "tape-pink", "tape-blue", "tape-mint"];
            const rot = ((i * 53) % 11) - 5;
            const ml = i > 0 && i % 3 === 0 ? "-1rem" : undefined;
            const mt = i % 2 ? "0.6rem" : "-0.3rem";
            return (
              <li
                key={s}
                style={{ transform: `rotate(${rot}deg)`, marginLeft: ml, marginTop: mt, boxShadow: "3px 4px 0 rgba(0,0,0,0.15), 0 6px 12px -6px rgba(60,40,20,0.3)" }}
                className="relative bg-[#fffdf6] px-3 py-1.5 font-hand text-xl transition hover:-translate-y-1 sm:px-4 sm:py-2 sm:text-2xl"
              >
                <span
                  className={`tape ${tapes[i % 4]} left-1/2 top-[-10px] -translate-x-1/2 !w-12 !h-4`}
                  style={{ transform: `translateX(-50%) rotate(${((i * 17) % 24) - 12}deg)` }}
                />
                {s}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function Powers() {
  return (
    <section id="powers" className="relative py-14 md:py-20">
      <SectionLabel>page 04 · superpowers</SectionLabel>
      <h2 className="mt-2 font-hand text-5xl sm:text-6xl">what I bring to a <span className="highlight-pink">team</span>.</h2>
      <div className="mt-8 grid gap-6 sm:gap-7 md:mt-10 md:grid-cols-2">
        {SUPERPOWERS.map((p, i) => (
          <article
            key={p.title}
            style={{ transform: `rotate(${i % 2 ? 1 : -1.2}deg)` }}
            className="paper-card relative !pt-8 transition hover:rotate-0"
          >
            <span className={`tape ${p.tape} left-1/2 top-[-12px] -translate-x-1/2 rotate-[-4deg]`} />
            <div className="flex items-start gap-4">
              <span className="font-hand text-4xl leading-none text-[oklch(0.5_0.18_25)] sm:text-5xl">{p.emoji}</span>
              <div>
                <h3 className="font-hand text-2xl underline-doodle sm:text-3xl">{p.title}</h3>
                <p className="mt-2 font-marker text-base leading-7 sm:text-lg">{p.body}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="relative py-14 md:py-20">
      <SectionLabel>page 05 · journey</SectionLabel>
      <h2 className="mt-2 font-hand text-5xl sm:text-6xl">a few <span className="highlight-mint">stops</span> along the way.</h2>
      <ol className="relative mt-8 grid gap-5 md:mt-10 md:grid-cols-2">
        {JOURNEY.map((j, i) => (
          <li
            key={j.year}
            style={{ transform: `rotate(${(i % 2 ? 1.6 : -1.8) + (i === 2 ? 0.7 : 0)}deg)`, marginTop: i > 1 ? "-0.6rem" : undefined }}
            className="paper-card relative flex gap-3 transition hover:rotate-0 sm:gap-4"
          >
            <span
              className={`tape ${["tape-yellow","tape-pink","tape-blue","tape-mint"][i % 4]} left-4 top-[-10px] !w-16`}
              style={{ transform: `rotate(${((i * 29) % 22) - 11}deg)` }}
            />
            <div className="puffy-sticker flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[var(--ink)] bg-[var(--pop-yellow)] font-hand text-xl sm:h-16 sm:w-16 sm:text-2xl">
              {j.year}
            </div>
            <div className="min-w-0">
              <h3 className="font-hand text-xl sm:text-2xl">{j.title}</h3>
              <p className="font-marker text-base sm:text-lg">{j.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(t);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("alexnjugi11@gmail.com");
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="relative py-14 md:py-20">
      <SectionLabel>page 06 · last page</SectionLabel>
      <div className="mt-2 grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-start md:gap-10">
        <div>
          <h2 className="font-hand text-5xl leading-[0.95] sm:text-6xl md:text-7xl">
            got an idea?<br/>
            <span className="highlight">let's glue it</span><br/>
            together. ✿
          </h2>
          <p className="mt-5 max-w-xl font-marker text-lg sm:text-xl">
            Available for freelance projects, collaborations, and challenges that push
            creativity and code further. I reply fast and ship faster.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="mailto:alexnjugi11@gmail.com" className="btn-scrap pink">email me</a>
            <a href="https://github.com/alex-njugi" target="_blank" rel="noreferrer" className="btn-scrap">github</a>
            <a href="https://linkedin.com/in/alex-njugi-04521b367" target="_blank" rel="noreferrer" className="btn-scrap blue">linkedin</a>
          </div>
        </div>
        <div className="relative">
          <div className="paper-card relative -rotate-[1.5deg] overflow-hidden">
            <span className="tape tape-pink left-1/2 top-[-12px] -translate-x-1/2 rotate-[-3deg]" />
            <p className="font-hand text-2xl">— send a postcard —</p>
            <div className="mt-4 space-y-3">
              <ContactRow label="email">
                <button onClick={copyEmail} className="font-type text-sm hover:underline">
                  alexnjugi11@gmail.com {copied ? "✓ copied!" : "⧉"}
                </button>
              </ContactRow>
              <ContactRow label="phone">
                <a href="tel:+254792814605" className="font-type text-sm">+254 792 814 605</a>
              </ContactRow>
              <ContactRow label="where">
                <span className="font-type text-sm">522, 00300 Nairobi 🇰🇪</span>
              </ContactRow>
              <ContactRow label="site">
                <a href="https://alexnjugi.com" target="_blank" rel="noreferrer" className="font-type text-sm">alexnjugi.com ↗</a>
              </ContactRow>
            </div>
            <p className="mt-5 text-right font-hand text-xl">soli deo gloria ✝</p>
            <span aria-hidden className="cancel-stamp -right-4 -top-4">
              Nairobi<br/>GPO<br/>26 · VI · 26
            </span>
          </div>
          <span className="stamp absolute -right-2 -top-6">par avion</span>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-b-2 border-dashed border-[var(--ink)]/40 py-2 last:border-b-0">
      <span className="font-hand text-lg text-muted-foreground">{label}</span>
      <span className="min-w-0 break-all text-right">{children}</span>
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative border-t-2 border-dashed border-[var(--ink)]/30">
      <span aria-hidden className="doodle-aang left-4 top-2 hidden md:block" style={{ width: 80, height: 96, opacity: 0.16 }} />
      <span aria-hidden className="doodle-gojo right-6 -top-4 hidden md:block" style={{ width: 90, height: 108, opacity: 0.16 }} />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-8 text-center sm:px-5 md:flex-row md:text-left">
        <p className="font-marker text-sm sm:text-base">© {new Date().getFullYear()} Alex Njugi Karanja · built with curiosity & coffee ☕</p>
        <p className="font-hand text-xl sm:text-2xl">the end · for now ✿</p>
      </div>
    </footer>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block font-type text-xs uppercase tracking-[0.25em] text-muted-foreground">
      {children}
    </span>
  );
}
