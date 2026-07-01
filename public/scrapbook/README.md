# Scrapbook Photos

Replace the image URLs in `src/data/scrapbook-photos.ts` with paths to your own
images to personalise the scrapbook. You can either:

1. **Drop images in this folder** (`public/scrapbook/`) and reference them as
   `/scrapbook/your-image.jpg` in `scrapbook-photos.ts`, or
2. **Point at any hosted URL** (Cloudinary, Imgur, your own CDN, etc.).

All photo cards on the site — the hero collage, the snapshots gallery, the
about page, and the sticker sheet — pull from that single file, so one edit
updates the whole scrapbook.