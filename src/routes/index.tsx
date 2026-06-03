import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

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
  { label: "React", color: "var(--pop-blue)" },
  { label: "JavaScript", color: "var(--pop-yellow)" },
  { label: "Node.js", color: "var(--pop-lime)" },
  { label: "Python", color: "var(--pop-pink)" },
  { label: "Flask", color: "var(--pop-purple)" },
  { label: "HTML", color: "var(--pop-pink)" },
  { label: "CSS", color: "var(--pop-blue)" },
  { label: "Git & GitHub", color: "var(--pop-yellow)" },
  { label: "Machine Learning", color: "var(--pop-lime)" },
  { label: "Computer Vision", color: "var(--pop-purple)" },
  { label: "Robotics", color: "var(--pop-pink)" },
  { label: "NLP", color: "var(--pop-blue)" },
];

const SUPERPOWERS = [
  {
    emoji: "⚛️",
    title: "Front-end Flair",
    body: "React interfaces with personality — fast, accessible, and pixel-tight.",
    bg: "var(--pop-yellow)",
  },
  {
    emoji: "🛠️",
    title: "Full-Stack Glue",
    body: "Node, Python & Flask APIs wired to thoughtful UIs that actually ship.",
    bg: "var(--pop-lime)",
  },
  {
    emoji: "🤖",
    title: "AI & Robotics",
    body: "Studying ML, computer vision and autonomous systems at USIU-Africa.",
    bg: "var(--pop-pink)",
  },
  {
    emoji: "🧠",
    title: "Soft Skills",
    body: "AMI-trained: clear comms, empathy-led leadership, calm under pressure.",
    bg: "var(--pop-blue)",
  },
];

const NAV = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#powers", label: "Superpowers" },
  { href: "#contact", label: "Contact" },
];

function Index() {
  return (
    <div className="min-h-screen text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Stack />
      <Powers />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b-[3px] border-ink bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="flex items-center gap-2 font-display text-xl">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border-[3px] border-ink bg-[var(--pop-yellow)] shadow-brutal-sm">
            A
          </span>
          <span>alex.njugi</span>
        </a>
        <nav className="hidden gap-1 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-md px-3 py-2 font-display text-sm uppercase tracking-wide hover:bg-[var(--pop-yellow)]"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn-brutal bg-[var(--pop-pink)] text-white">
          Hire me ✨
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b-[3px] border-ink">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[1.3fr_1fr] md:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-[var(--pop-lime)] px-4 py-1 font-mono-pop text-xs shadow-brutal-sm">
            <span className="h-2 w-2 rounded-full bg-[var(--foreground)] animate-blink" />
            available for freelance & collabs
          </span>
          <h1 className="mt-5 text-5xl leading-[0.95] md:text-7xl">
            Hi, I'm <span className="inline-block bg-[var(--pop-yellow)] px-2 -rotate-1 border-[3px] border-ink shadow-brutal-sm">Alex</span>
            <br />
            I build <span className="text-[var(--pop-pink)]">delightful</span>
            <br />
            web stuff <span className="inline-block animate-wiggle">✨</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Full-stack developer with a front-end flair, currently studying AI & Robotics
            at USIU-Africa. I turn curious ideas into production-ready apps people actually enjoy using.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-brutal bg-[var(--pop-pink)] text-white">
              Let's build →
            </a>
            <a
              href="https://github.com/alex-njugi"
              target="_blank"
              rel="noreferrer"
              className="btn-brutal bg-background"
            >
              GitHub ↗
            </a>
            <a href="#powers" className="btn-brutal bg-[var(--pop-blue)] text-white">
              See superpowers
            </a>
          </div>
        </div>
        <HeroCard />
      </div>
    </section>
  );
}

function HeroCard() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="absolute -inset-3 rotate-3 rounded-2xl bg-[var(--pop-blue)]" />
      <div className="relative rotate-[-2deg] rounded-2xl border-[3px] border-ink bg-card p-5 shadow-brutal-lg animate-float">
        <div className="flex items-center gap-2 border-b-[3px] border-ink pb-3">
          <span className="h-3 w-3 rounded-full border-[2px] border-ink bg-[var(--pop-pink)]" />
          <span className="h-3 w-3 rounded-full border-[2px] border-ink bg-[var(--pop-yellow)]" />
          <span className="h-3 w-3 rounded-full border-[2px] border-ink bg-[var(--pop-lime)]" />
          <span className="ml-auto font-mono-pop text-xs">~/alex</span>
        </div>
        <pre className="mt-4 whitespace-pre-wrap font-mono-pop text-sm leading-6">
{`> whoami
alex_njugi

> roles
["full-stack dev",
 "ai & robotics student",
 "freelance friend"]

> location
Nairobi, Kenya 🇰🇪

> status
building cool things`}<span className="animate-blink">▋</span>
        </pre>
      </div>
    </div>
  );
}

function Marquee() {
  const items = ["✺ curious", "★ playful", "✺ kind", "★ precise", "✺ shipping", "★ learning"];
  const loop = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden border-b-[3px] border-ink bg-[var(--pop-yellow)]">
      <div className="flex w-max animate-marquee gap-10 py-4 font-display text-2xl uppercase">
        {loop.map((t, i) => (
          <span key={i} className="whitespace-nowrap">{t}</span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="border-b-[3px] border-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[1fr_1.3fr]">
        <div>
          <SectionTag color="var(--pop-pink)">about</SectionTag>
          <h2 className="mt-4 text-4xl md:text-5xl">The short story.</h2>
        </div>
        <div className="space-y-5 text-lg leading-relaxed">
          <p>
            I'm a full-stack software developer with a strong flair for front-end design.
            My love for learning and curiosity about technology fuel my drive to build powerful,
            user-friendly apps that solve real problems.
          </p>
          <p>
            I trained at <Pill bg="var(--pop-yellow)">Moringa School</Pill> in React, JavaScript,
            Node.js, Python and Flask — and I'm currently pursuing a BSc in{" "}
            <Pill bg="var(--pop-lime)">AI & Robotics</Pill> at USIU-Africa, exploring machine
            learning, computer vision, NLP and autonomous systems.
          </p>
          <p>
            Outside code, I'm a devoted Christian — saved by grace and committed to walking
            with Christ. Faith shapes how I work: with integrity, humility and care for the
            people I build with.
          </p>
          <p>
            Thanks to <Pill bg="var(--pop-blue)" white>AMI</Pill> training I bring strong soft
            skills too: clear communication, adaptability, emotional intelligence and empathy-led
            leadership.
          </p>
        </div>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="border-b-[3px] border-ink bg-card">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionTag color="var(--pop-blue)" white>my toolbox</SectionTag>
        <h2 className="mt-4 text-4xl md:text-5xl">Stuff I build with.</h2>
        <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
          A mix of trusty web tech and the smart-systems side of things I'm studying.
        </p>
        <ul className="mt-10 flex flex-wrap gap-3">
          {STACK.map((s, i) => (
            <li
              key={s.label}
              style={{ background: s.color, transform: `rotate(${(i % 2 ? 1 : -1) * 1.5}deg)` }}
              className="rounded-xl border-[3px] border-ink px-4 py-2 font-display text-sm uppercase shadow-brutal-sm transition hover:-translate-y-1"
            >
              {s.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Powers() {
  return (
    <section id="powers" className="border-b-[3px] border-ink">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionTag color="var(--pop-lime)">superpowers</SectionTag>
        <h2 className="mt-4 text-4xl md:text-5xl">What I bring to a team.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {SUPERPOWERS.map((p, i) => (
            <div
              key={p.title}
              style={{ background: p.bg, transform: `rotate(${i % 2 ? 0.6 : -0.6}deg)` }}
              className="rounded-2xl border-[3px] border-ink p-6 shadow-brutal transition hover:-translate-y-1 hover:rotate-0"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border-[3px] border-ink bg-background text-2xl shadow-brutal-sm">
                {p.emoji}
              </div>
              <h3 className="mt-4 text-2xl">{p.title}</h3>
              <p className="mt-2 text-base">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
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
    <section id="contact" className="border-b-[3px] border-ink bg-[var(--pop-yellow)]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div>
            <SectionTag color="var(--pop-pink)" white>let's talk</SectionTag>
            <h2 className="mt-4 text-5xl leading-[0.95] md:text-6xl">
              Got an idea? <br />
              <span className="italic">Let's build it together.</span>
            </h2>
            <p className="mt-5 max-w-xl text-lg">
              I'm available for freelance projects, collaborations, and any challenge that pushes
              creativity and code further.
            </p>
          </div>
          <div className="rounded-2xl border-[3px] border-ink bg-background p-6 shadow-brutal-lg">
            <ContactRow label="Email">
              <button onClick={copyEmail} className="font-mono-pop text-sm underline-offset-4 hover:underline">
                alexnjugi11@gmail.com {copied ? "✓ copied" : "⧉"}
              </button>
            </ContactRow>
            <ContactRow label="Phone">
              <a href="tel:+254792814605" className="font-mono-pop text-sm">+254 792 814 605</a>
            </ContactRow>
            <ContactRow label="Where">
              <span className="font-mono-pop text-sm">522, 00300 Nairobi 🇰🇪</span>
            </ContactRow>
            <ContactRow label="Site">
              <a href="https://alexnjugi.com" target="_blank" rel="noreferrer" className="font-mono-pop text-sm">alexnjugi.com ↗</a>
            </ContactRow>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="mailto:alexnjugi11@gmail.com" className="btn-brutal bg-[var(--pop-pink)] text-white">
                Email me
              </a>
              <a href="https://github.com/alex-njugi" target="_blank" rel="noreferrer" className="btn-brutal bg-background">
                GitHub
              </a>
              <a href="https://linkedin.com/in/alex-njugi-04521b367" target="_blank" rel="noreferrer" className="btn-brutal bg-[var(--pop-blue)] text-white">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b-[2px] border-dashed border-ink py-3 last:border-b-0">
      <span className="font-display text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
      <span className="text-right">{children}</span>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 md:flex-row">
        <p className="font-mono-pop text-sm">© {new Date().getFullYear()} Alex Njugi Karanja — built with curiosity & coffee ☕</p>
        <p className="font-mono-pop text-sm">Soli Deo gloria ✝</p>
      </div>
    </footer>
  );
}

function SectionTag({
  children,
  color,
  white,
}: {
  children: React.ReactNode;
  color: string;
  white?: boolean;
}) {
  return (
    <span
      style={{ background: color, color: white ? "white" : undefined }}
      className="inline-block rounded-full border-[3px] border-ink px-4 py-1 font-mono-pop text-xs uppercase tracking-wider shadow-brutal-sm"
    >
      {children}
    </span>
  );
}

function Pill({
  children,
  bg,
  white,
}: {
  children: React.ReactNode;
  bg: string;
  white?: boolean;
}) {
  return (
    <span
      style={{ background: bg, color: white ? "white" : undefined }}
      className="inline-block rounded-md border-[2px] border-ink px-2 py-0.5 font-display text-sm"
    >
      {children}
    </span>
  );
}
