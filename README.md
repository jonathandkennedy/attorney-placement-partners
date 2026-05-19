# Attorney Placement Partners

Marketing website for [Attorney Placement Partners](https://www.attorneyacquisition.com) — a boutique legal recruiting firm built by former attorneys.

## Stack

- **Framework:** Next.js 14 (static export)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Forms:** Formspree
- **Hosting:** Shared hosting (Apache)

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Building for Production

```bash
npm run build
```

This generates a static `out/` directory. Upload the **contents** of `out/` to your web host's public root (`public_html/` or `www/`).

## Deployment (Shared Hosting)

1. Run `npm run build` locally
2. Upload everything inside the `out/` folder to your host's `public_html/` via FTP/SFTP
3. The `.htaccess` file is included automatically — it handles HTTPS enforcement, www redirect, caching, and security headers

> If your host uses cPanel, use the File Manager or any FTP client (FileZilla, Cyberduck).

## Contact Form Setup (Formspree)

The contact form on the site submits to [Formspree](https://formspree.io). To activate it:

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and copy your **Form ID** (looks like `xpwzabcd`)
3. Open `components/sections/final-cta.tsx` and replace `YOUR_FORM_ID` with your actual ID:

```tsx
const FORMSPREE_ID = 'xpwzabcd'; // your real ID here
```

4. Rebuild and redeploy

## OG Image

Add a `1200 × 630` PNG at `public/og-image.png` before deploying. This image appears when the site is shared on social media / iMessage / Slack.

## Domain

**Live domain:** `attorneyacquisition.com`

DNS should point to your shared hosting provider's nameservers. SSL is enforced via the `.htaccess` redirect — confirm your host has SSL enabled for the domain (most shared hosts offer free Let's Encrypt certificates via cPanel).
