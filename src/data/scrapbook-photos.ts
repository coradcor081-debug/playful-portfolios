// ─────────────────────────────────────────────────────────────────────────────
// SCRAPBOOK IMAGES
//
// Swap any `src` below with your own photo to personalise the scrapbook.
// You can use:
//   • a local file in /public/scrapbook/  →  "/scrapbook/my-photo.jpg"
//   • any hosted URL (Cloudinary, Imgur, GitHub raw, etc.)
//
// Captions & rotations are safe to tweak — keep the array keys stable.
// ─────────────────────────────────────────────────────────────────────────────

import avatar from "@/assets/alex-avatar.jpg";
import desk from "@/assets/desk.jpg";
import nairobi from "@/assets/nairobi.jpg";

export const heroPhotos = {
  self: { src: avatar, alt: "Alex Njugi Karanja", caption: "that's me ✿" },
  desk: { src: desk, alt: "My desk setup", caption: "my desk" },
};

export const aboutPhoto = {
  src: nairobi,
  alt: "Nairobi skyline",
  caption: "home base",
};

// A wall of snapshots — replace freely. 6 is a nice sheet, but any length works.
export const snapshots: Array<{
  src: string;
  alt: string;
  caption: string;
  tape: "tape-pink" | "tape-yellow" | "tape-mint" | "tape-blue";
  rotate: number;
}> = [
  {
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=70",
    alt: "Code on a screen",
    caption: "late-night commits",
    tape: "tape-yellow",
    rotate: -4,
  },
  {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=70",
    alt: "Team collab",
    caption: "team days",
    tape: "tape-pink",
    rotate: 3,
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=70",
    alt: "Circuit board",
    caption: "robotics lab",
    tape: "tape-blue",
    rotate: -2,
  },
  {
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=70",
    alt: "Mountains",
    caption: "reset button",
    tape: "tape-mint",
    rotate: 5,
  },
  {
    src: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=600&q=70",
    alt: "Sketchbook",
    caption: "idea pages",
    tape: "tape-pink",
    rotate: -3,
  },
  {
    src: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=70",
    alt: "Laptop and coffee",
    caption: "sunday build",
    tape: "tape-yellow",
    rotate: 4,
  },
];