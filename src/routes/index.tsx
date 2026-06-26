import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import avatar from "@/assets/alex-avatar.jpg";
import doodles from "@/assets/doodles.png";
import nairobi from "@/assets/nairobi.jpg";
import desk from "@/assets/desk.jpg";
import { MusicPlayer } from "@/components/MusicPlayer";
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
  return (
    <div className="min-h-screen text-foreground">
      <Nav />
      <main className="mx-auto max-w-6xl px-5 pb-20">
        <Hero />
        <Marquee />
        <About />
        <Stack />
        <Powers />
        <Journey />
        <Contact />
      </main>
      <Footer />
      <MusicPlayer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-3 z-40 mx-auto mt-3 max-w-6xl px-5">
      <div className="relative flex items-center justify-between rounded-full border-2 border-[var(--ink)] bg-[#fffdf6]/90 px-4 py-2 backdrop-blur">
        <span className="tape tape-pink left-1/2 top-[-12px] -translate-x-1/2 rotate-[-4deg]" />
        <a href="#top" className="flex items-center gap-2 font-hand text-3xl leading-none">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-[var(--ink)] bg-[var(--pop-yellow)] font-type text-sm">A</span>
          alex's scrapbook
        </a>
        <nav className="hidden gap-1 md:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="rounded-full px-3 py-1 font-hand text-xl hover:bg-[var(--pop-yellow)]">
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn-scrap pink hidden md:inline-flex">say hi ✿</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative grid items-center gap-10 pt-14 pb-12 md:grid-cols-[1.2fr_1fr] md:pt-20">
      <div className="relative">
        <p className="font-type text-sm tracking-widest text-muted-foreground">
          ★ NAIROBI · KENYA · EST. ALWAYS LEARNING ★
        </p>
        <h1 className="mt-3 font-hand text-7xl leading-[0.95] md:text-8xl">
          hey, I'm <span className="doodle-circle text-[oklch(0.5_0.18_25)]">Alex</span> —
          <br />
          I make <span className="highlight">web things</span>
          <br />
          that feel <span className="highlight-pink">human</span>.
        </h1>
        <p className="mt-6 max-w-xl font-marker text-xl leading-relaxed">
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
    <div className="relative mx-auto h-[440px] w-full max-w-md">
      <span aria-hidden className="doodle-gojo -left-16 -top-6 hidden md:block" />
      <span aria-hidden className="doodle-aang -right-14 bottom-[-30px] hidden md:block" />
      {/* Big polaroid */}
      <div className="polaroid absolute left-6 top-2 w-64 -rotate-[6deg] animate-sway">
        <span className="tape tape-yellow left-1/2 top-[-12px] -translate-x-1/2 rotate-[-3deg]" />
        <img src={avatar} alt="Alex Njugi Karanja" width={640} height={768} className="h-56 w-full object-cover" />
        <p className="mt-3 text-center font-hand text-2xl">that's me ✿</p>
      </div>
      {/* Small desk polaroid */}
      <div className="polaroid absolute right-0 top-32 w-48 rotate-[7deg] animate-float">
        <span className="tape tape-blue left-3 top-[-10px] rotate-[-12deg]" />
        <img src={desk} alt="My desk setup" width={768} height={640} loading="lazy" className="h-32 w-full object-cover" />
        <p className="mt-2 text-center font-hand text-xl">my desk</p>
      </div>
      {/* Sticky note */}
      <div className="sticky-note absolute bottom-2 left-0 w-52 rotate-[-4deg] bg-[var(--pop-yellow)] p-4 font-marker text-base">
        <span className="tape tape-pink left-1/2 top-[-10px] -translate-x-1/2 rotate-[3deg]" />
        "code with curiosity,<br />ship with care."
        <div className="mt-2 text-right font-hand text-xl">— a.n.k</div>
      </div>
      {/* Stamp circle */}
      <div className="absolute -right-2 bottom-6 flex h-24 w-24 rotate-[14deg] items-center justify-center rounded-full border-4 border-dashed border-[oklch(0.5_0.18_25)] text-center font-type text-[10px] uppercase leading-tight text-[oklch(0.5_0.18_25)]">
        made<br/>with<br/>love<br/>♡ 254
      </div>
    </div>
  );
}

function Marquee() {
  const items = ["curious ✿", "playful ✺", "kind ❀", "precise ★", "shipping ✦", "learning ❉", "faith-led ✝", "Nairobi ♡"];
  const loop = [...items, ...items, ...items];
  return (
    <div className="torn-edges-y marquee-fade relative my-10 overflow-hidden border-y-2 border-dashed border-[var(--ink)] bg-[var(--pop-yellow)]/60 py-3">
      <div className="flex w-max animate-marquee gap-8 font-hand text-3xl">
        {loop.map((t, i) => (
          <span key={i} className="whitespace-nowrap">{t}</span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative grid gap-8 py-20 md:grid-cols-[1fr_1.4fr] md:items-start">
      <div className="relative">
        <SectionLabel>page 02 · about</SectionLabel>
        <h2 className="mt-2 font-hand text-6xl">the<br/><span className="highlight-mint">short</span> story.</h2>
        <div className="relative mt-8 inline-block">
          <span className="tape tape-mint left-1/2 top-[-12px] -translate-x-1/2 rotate-[-6deg]" />
          <img src={nairobi} alt="Nairobi" width={768} height={768} loading="lazy" className="polaroid h-56 w-56 -rotate-[3deg] object-cover" />
        </div>
      </div>
      <div className="relative lined-paper paper-card-torn -rotate-[0.4deg] !p-10 font-marker text-xl leading-9">
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
    <section id="stack" className="relative py-20">
      <SectionLabel>page 03 · toolbox</SectionLabel>
      <h2 className="mt-2 font-hand text-6xl">things glued to <span className="highlight">my desk</span>.</h2>
      <p className="mt-3 max-w-2xl font-marker text-xl text-muted-foreground">
        A mix of trusty web tech and the smart-systems side of things I'm studying.
      </p>
      <div className="relative mt-10">
        <img src={doodles} alt="" aria-hidden width={1024} height={512} loading="lazy" className="pointer-events-none absolute inset-0 h-full w-full -rotate-2 object-contain opacity-30" />
        <ul className="relative flex flex-wrap gap-3">
          {STACK.map((s, i) => {
            const tapes = ["tape-yellow", "tape-pink", "tape-blue", "tape-mint"];
            const rot = ((i * 53) % 11) - 5;
            const ml = i > 0 && i % 3 === 0 ? "-1rem" : undefined;
            const mt = i % 2 ? "0.6rem" : "-0.3rem";
            return (
              <li
                key={s}
                style={{ transform: `rotate(${rot}deg)`, marginLeft: ml, marginTop: mt, boxShadow: "3px 4px 0 rgba(0,0,0,0.15), 0 6px 12px -6px rgba(60,40,20,0.3)" }}
                className="relative bg-[#fffdf6] px-4 py-2 font-hand text-2xl transition hover:-translate-y-1"
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
    <section id="powers" className="relative py-20">
      <SectionLabel>page 04 · superpowers</SectionLabel>
      <h2 className="mt-2 font-hand text-6xl">what I bring to a <span className="highlight-pink">team</span>.</h2>
      <div className="mt-10 grid gap-7 md:grid-cols-2">
        {SUPERPOWERS.map((p, i) => (
          <article
            key={p.title}
            style={{ transform: `rotate(${i % 2 ? 1 : -1.2}deg)` }}
            className="paper-card relative !pt-8 transition hover:rotate-0"
          >
            <span className={`tape ${p.tape} left-1/2 top-[-12px] -translate-x-1/2 rotate-[-4deg]`} />
            <div className="flex items-start gap-4">
              <span className="font-hand text-5xl leading-none text-[oklch(0.5_0.18_25)]">{p.emoji}</span>
              <div>
                <h3 className="font-hand text-3xl underline-doodle">{p.title}</h3>
                <p className="mt-2 font-marker text-lg leading-7">{p.body}</p>
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
    <section id="journey" className="relative py-20">
      <SectionLabel>page 05 · journey</SectionLabel>
      <h2 className="mt-2 font-hand text-6xl">a few <span className="highlight-mint">stops</span> along the way.</h2>
      <ol className="relative mt-10 grid gap-5 md:grid-cols-2">
        {JOURNEY.map((j, i) => (
          <li
            key={j.year}
            style={{ transform: `rotate(${(i % 2 ? 1.6 : -1.8) + (i === 2 ? 0.7 : 0)}deg)`, marginTop: i > 1 ? "-0.6rem" : undefined }}
            className="paper-card relative flex gap-4 transition hover:rotate-0"
          >
            <span
              className={`tape ${["tape-yellow","tape-pink","tape-blue","tape-mint"][i % 4]} left-4 top-[-10px] !w-16`}
              style={{ transform: `rotate(${((i * 29) % 22) - 11}deg)` }}
            />
            <div className="puffy-sticker flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-[var(--ink)] bg-[var(--pop-yellow)] font-hand text-2xl">
              {j.year}
            </div>
            <div>
              <h3 className="font-hand text-2xl">{j.title}</h3>
              <p className="font-marker text-lg">{j.body}</p>
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
    <section id="contact" className="relative py-20">
      <SectionLabel>page 06 · last page</SectionLabel>
      <div className="mt-2 grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-start">
        <div>
          <h2 className="font-hand text-6xl leading-[0.95] md:text-7xl">
            got an idea?<br/>
            <span className="highlight">let's glue it</span><br/>
            together. ✿
          </h2>
          <p className="mt-6 max-w-xl font-marker text-xl">
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
    <div className="flex items-center justify-between gap-4 border-b-2 border-dashed border-[var(--ink)]/40 py-2 last:border-b-0">
      <span className="font-hand text-lg text-muted-foreground">{label}</span>
      <span className="text-right">{children}</span>
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative border-t-2 border-dashed border-[var(--ink)]/30">
      <span aria-hidden className="doodle-aang left-4 top-2 hidden md:block" style={{ width: 80, height: 96, opacity: 0.16 }} />
      <span aria-hidden className="doodle-gojo right-6 -top-4 hidden md:block" style={{ width: 90, height: 108, opacity: 0.16 }} />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-8 text-center md:flex-row md:text-left">
        <p className="font-marker text-base">© {new Date().getFullYear()} Alex Njugi Karanja · built with curiosity & coffee ☕</p>
        <p className="font-hand text-2xl">the end · for now ✿</p>
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
