# AI for Teachers — Website Manual

Your complete, step-by-step reference for running, editing, and publishing
your website. No coding experience required — just follow the steps in
order for whatever you're trying to do.

**Live site:** deployed on Netlify, connected to GitHub repo
`hotspots0515/ai-for-teachers-website`. Every time you save a change and
push it to GitHub, Netlify automatically rebuilds and publishes the site
within a minute or two.

---

## Table of contents

1. Running the site on your computer
2. How the site is organized
3. Editing the Home page
4. Editing the About page
5. Editing the Free Resource page
6. Adding or editing Shop products
7. Adding a new weekly Newsletter post
8. Editing Collections (Readings, Saints, Liturgical Calendar, Sacraments)
9. Adding your logo or banner image
10. Updating the "Follow Along" social media links
11. Connecting the email signup form to Brevo
12. Connecting "Buy Now" buttons to Gumroad
13. Changing colors or fonts
14. Basic SEO (page titles & descriptions)
15. Publishing changes (saving to GitHub → Netlify)
16. Troubleshooting

---

## 1. Running the site on your computer

Every time you want to preview changes before they go live:

1. Open a terminal in the `ai-for-teachers-website` folder.
2. The first time only, run: `npm install`
3. Run: `npm run dev`
4. Open the link it shows you (usually `http://localhost:4321`) in your browser.
5. Leave that terminal window running while you edit files — the site
   updates automatically as you save changes.
6. Press `Ctrl + C` in the terminal to stop the preview when you're done.

---

## 2. How the site is organized

| What you want to edit | File to open |
|---|---|
| Home page | `src/pages/index.astro` |
| About page | `src/pages/about.astro` |
| Free Resource page | `src/pages/free-resource.astro` |
| Shop / products | `src/pages/shop.astro` |
| Newsletter list page | `src/pages/newsletter/index.astro` |
| Individual newsletter posts | `src/content/newsletter/*.md` |
| Collections hub | `src/pages/collections/index.astro` |
| Readings for the Day | `src/pages/collections/readings.astro` |
| Saints | `src/pages/collections/saints.astro` |
| Liturgical Calendar | `src/pages/collections/liturgical-calendar.astro` |
| Sacraments | `src/pages/collections/sacraments.astro` |
| Site colors / fonts | `src/styles/global.css` |
| Header, navigation, Subscribe button, logo | `src/components/Header.astro` |
| Footer & social links | `src/components/Footer.astro` |
| Site icon shown in browser tabs | `public/favicon.svg` |

You don't need to understand all the code in these files — just find the
plain English text inside quotes (`"like this"`) and edit it. Anything
wrapped in `[PLACEHOLDER ...]` or marked with a "Placeholder" note is
meant to be replaced with your real content.

**About the "3 lines" icon next to the logo:** that's the mobile menu
button (a "hamburger" icon). It only appears on narrower screens (phones,
tablets, or a narrowed browser window). Tapping it opens the full
navigation menu, including the Collections list, stacked vertically. On
wider screens it disappears automatically because the full menu already
fits in the header. You don't need to do anything to maintain this — it's
fully automatic.

---

## 3. Editing the Home page

Open `src/pages/index.astro`.

- **Headline & subheading:** near the top, inside the `<h1>` and the
  paragraph right after it.
- **Credibility sentence:** search for "Written by a former classroom
  teacher" and edit that sentence.
- **Featured product:** look for the `<ProductCard ... />` block and edit
  the `title`, `description`, `price`, and `buyLink` values.
- **"What's Coming Up" liturgical teaser strip:** near the bottom, find
  the `seasons` list at the top of the file:
  ```
  {
    title: 'Advent Resources',
    blurb: 'Classroom prayer, countdown activities...',
    tag: 'Advent',
    tagClass: 'tag--advent',
  },
  ```
  Edit the `title` and `blurb` text for each season as the year
  progresses. `tagClass` options: `tag--advent` (purple), `tag--solemnity`
  (gold), `tag--ordinary` (green), `tag--holyweek` (red).
- **Social links at the bottom:** edit the four URLs in the "Follow
  Along" section (see Section 10 for the full walkthrough).

---

## 4. Editing the About page

Open `src/pages/about.astro`. Replace the paragraph marked
`[PLACEHOLDER: Replace this paragraph...]` and the two paragraphs below
it with your real story. Delete the `placeholder-note` paragraph at the
bottom once you're happy with your bio.

---

## 5. Editing the Free Resource page

Open `src/pages/free-resource.astro`.

- Edit the headline and description near the top.
- Edit the bullet list under "What's Inside" to match your real download.
- The email form below it is the same reusable component used elsewhere
  — see Section 11 to connect it to Brevo.

---

## 6. Adding or editing Shop products

Open `src/pages/shop.astro`. Near the top you'll see a list of products:

```
{
  title: 'Advent Pack',
  description: 'Advent-themed lesson ideas...',
  price: '$8',
  buyLink: '#',
  tag: 'Advent',
  tagClass: 'tag--advent',
},
```

- **Change a price:** edit the text inside `price: '...'`.
- **Connect a real "Buy Now" button:** replace the `#` inside
  `buyLink: '#'` with your real Gumroad product link (Section 12).
- **Add a brand-new product:** copy one whole `{ ... }` block, paste it
  right after another one, and edit the text inside.
- `tagClass` options: `tag--advent` (purple), `tag--solemnity` (gold),
  `tag--ordinary` (green), `tag--holyweek` (red).

The Home page also features one product near the top — update that one
separately in `src/pages/index.astro` (look for `ProductCard`).

> **Reminder:** every product currently uses the $8 placeholder price.
> Update each one in both `shop.astro` and `index.astro` when you're
> ready to set real prices.

---

## 7. Adding a new weekly Newsletter post

This is the one you'll do most often, and it's the easiest.

1. Go to the folder `src/content/newsletter/`.
2. Copy an existing file (e.g. `welcome-to-ai-for-teachers.md`) and rename
   the copy — use lowercase words separated by dashes, e.g.
   `lenten-lesson-ideas.md`. This filename becomes the post's web address.
3. Open your new file. At the top, edit the info between the `---` lines:
   ```
   ---
   title: "Your Post Title Here"
   date: 2026-03-01
   excerpt: "A one-sentence summary shown on the newsletter list page."
   season: "Lent"
   ---
   ```
   - `season` must be one of: `Advent`, `Christmas`, `Lent`, `Easter`,
     `Ordinary Time` — or delete the `season:` line entirely if a post
     isn't tied to a season.
4. Below the second `---`, write your post in plain text. Leave a blank
   line between paragraphs.
5. Save the file. It will automatically appear on `/newsletter/`, newest
   first, filterable by season, with its own page at
   `/newsletter/your-filename/`.

---

## 8. Editing Collections (Readings, Saints, Liturgical Calendar, Sacraments)

These pages work the same way as the Shop — a list of items near the top
of the file that you edit directly:

- **Saints** (`src/pages/collections/saints.astro`): edit the `saints`
  list — each Saint has a `name`, `feastDay`, and `blurb`.
- **Sacraments** (`src/pages/collections/sacraments.astro`): edit the
  `sacraments` list — each has a `name` and `blurb`.
- **Liturgical Calendar** (`src/pages/collections/liturgical-calendar.astro`):
  edit the `seasons` list.
- **Readings for the Day** (`src/pages/collections/readings.astro`):
  this page links out to the official USCCB daily readings page rather
  than copying the text, so it's always accurate and avoids copyright
  issues. If you'd like to embed a daily readings widget instead of
  linking out, that's a future enhancement — just ask.

To add a new entry to any of these lists, copy one `{ ... }` block and
edit the text inside, same as the Shop instructions above.

---

## 9. Adding your logo or banner image

Once you have your logo/banner image files saved on your computer:

1. Copy the image file into the `public/` folder in this project (e.g.
   `public/logo.png`).
2. To show it in the header next to "AI for Teachers": open
   `src/components/Header.astro`, find the line
   `<a href="/" class="brand">AI for Teachers</a>`, and replace it with:
   ```html
   <a href="/" class="brand">
     <img src="/logo.png" alt="AI for Teachers" style="height: 36px; vertical-align: middle; margin-right: 8px;" />
     AI for Teachers
   </a>
   ```
3. To use it as the browser tab icon (favicon): replace
   `public/favicon.svg` with your own square icon file (rename it to
   `favicon.svg`, `favicon.ico`, or `favicon.png` and update the `<link
   rel="icon">` line in `src/layouts/BaseLayout.astro` to match).
4. To use a wide banner image as the preview image when your site is
   shared on Facebook/Instagram/TikTok: save it as e.g.
   `public/og-banner.jpg`, then in `src/layouts/BaseLayout.astro` add
   this line inside the `<head>` section:
   ```html
   <meta property="og:image" content="https://your-domain.com/og-banner.jpg" />
   ```

**Logo vs. banner — which to use where:** a square **logo** works best
in the header (small) and as the favicon (very small, so keep it
simple). A wide **banner** isn't used within the page layouts themselves
in this design, but is perfect as the social-media share image (step 4
above) and as your actual TikTok/Instagram/YouTube profile banners
directly on those platforms. You can use both — they serve different
spots.

---

## 10. Updating the "Follow Along" social media links

You have two places to update — they're currently independent copies of
the same four links:

1. Open `src/components/Footer.astro`. Near the top, edit the
   `socialLinks` list with your real URLs.
2. Open `src/pages/index.astro` and find the "Follow Along" section near
   the bottom — update the same four links there too (TikTok, Instagram,
   Facebook, YouTube).

---

## 11. Connecting the email signup form to Brevo

Right now, the email form on the Home, Free Resource, and Newsletter
pages is a placeholder — it shows a "Thanks!" message but doesn't
actually collect emails.

1. Create a free Brevo account at brevo.com.
2. In Brevo, create a Contact List for your subscribers.
3. Go to **Campaigns → Forms** (or **Contacts → Forms**) and create a new
   signup form.
4. Brevo will give you an embed code (HTML) for the form.
5. Open `src/components/EmailSignup.astro` in this project.
6. Replace the `<form>...</form>` block with the HTML Brevo gave you.
7. Save, then check the live preview to make sure it still looks right —
   adjust the CSS in the `<style>` section at the bottom of the same
   file if needed.

Because all three pages use this same `EmailSignup.astro` component, you
only have to do this once and it updates everywhere.

---

## 12. Connecting "Buy Now" buttons to Gumroad

1. Create a free Gumroad account at gumroad.com.
2. Create a product (e.g. "Advent Pack") and set your real price.
3. Gumroad gives you a product link (e.g. `https://gumroad.com/l/advent-pack`).
4. Open `src/pages/shop.astro` (and `src/pages/index.astro` for the
   featured product on the Home page).
5. Find the matching product and replace `buyLink: '#'` with your real
   Gumroad link.
6. Save and check the live preview — the "Buy Now" button will now go to
   your real checkout page.

---

## 13. Changing colors or fonts

All colors are defined once at the top of `src/styles/global.css` under
`:root`. For example, to change the main accent color, edit:
```
--color-burgundy: #6E2C40;
```
Everything using that color across the whole site updates automatically.
The liturgical accent colors (purple, gold, green, red) are defined the
same way just below it, and are used as bold, solid tag colors — adjust
with care since they carry meaning (season/category) across the site.

The "Subscribe" button in the header uses the liturgical green color —
to change just that button, edit the `.site-nav a.btn--nav` rule inside
`src/components/Header.astro`.

---

## 14. Basic SEO (already set up, here's how to adjust it)

Every page has a `title` and `description` near the top, inside
`<BaseLayout title="..." description="...">`. These control:
- The text shown in Google search results
- The tab title in your browser
- What's shown when the page is shared on social media

To improve SEO for a page, edit those two lines with relevant keywords
(e.g. "Catholic school AI tools," "Advent classroom resources").

---

## 15. Publishing changes (saving to GitHub → Netlify)

Your site auto-deploys. Every time you want your edits to go live:

1. Make your edits locally and confirm they look right with `npm run dev`.
2. Open a terminal in the project folder and run:
   ```
   git add -A
   git commit -m "describe what you changed"
   git push
   ```
3. Netlify automatically detects the new commit, rebuilds, and publishes
   the site — usually within 1–2 minutes. No manual steps needed on the
   Netlify side.
4. If you don't see your change live after a couple of minutes, check
   the **Builds** tab in your Netlify dashboard for errors, and hard
   refresh your browser (`Ctrl + Shift + R`) in case it's showing a
   cached version.

---

## 16. Troubleshooting

- **A change doesn't show up on the live site:** hard refresh with
  `Ctrl + Shift + R`, and confirm the commit actually reached GitHub
  (`git push` succeeded) and that Netlify's latest deploy succeeded
  (check the Netlify dashboard "Builds" tab).
- **`npm run dev` shows an error:** read the error message in the
  terminal — it usually names the exact file and line. If you're stuck,
  copy the error text and ask for help.
- **Something looks visually broken after an edit:** undo your last
  change (or compare against a working version) and re-check for a
  missing comma, quote mark, or curly brace — these list-based sections
  (Shop, Saints, Sacraments, etc.) are sensitive to exact formatting.

---

## Quick checklist for "things to do before launch"

- [ ] Replace all `[PLACEHOLDER]` text on the About page with your real story
- [ ] Set real prices in `shop.astro` and `index.astro`
- [ ] Connect Gumroad buy links
- [ ] Connect the Brevo email form
- [ ] Replace placeholder social media URLs
- [ ] Fill in real Saints, Sacraments, and Liturgical Calendar content
- [ ] Write your first few real newsletter posts
- [ ] Add your logo and/or banner image
- [ ] Point your custom domain (AIforTeachersWeekly) at Netlify
