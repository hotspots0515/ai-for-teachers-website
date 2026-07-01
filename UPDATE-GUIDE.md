# AI for Teachers — Update Guide

This is your step-by-step reference for running, editing, and publishing
your website. No coding experience required — just follow the steps.

---

## 1. Running the site on your computer

Every time you want to preview changes before they go live:

1. Open a terminal in this folder (`ai-for-teachers-website`).
2. The first time only, run: `npm install`
3. Run: `npm run dev`
4. Open the link it shows you (usually `http://localhost:4321`) in your browser.
5. Leave that terminal window running while you edit files — the site
   updates automatically as you save changes.
6. Press `Ctrl + C` in the terminal to stop the preview when you're done.

---

## 2. Where everything lives

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
| Header navigation & Subscribe button | `src/components/Header.astro` |
| Footer & social links | `src/components/Footer.astro` |

You don't need to understand all the code in these files — just find the
plain English text inside quotes (`"like this"`) and edit it. Anything
wrapped in `[PLACEHOLDER ...]` or marked with a "Placeholder" note is
meant to be replaced.

---

## 3. Adding a new weekly newsletter post

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
     `Ordinary Time` (or you can delete the `season:` line entirely if a
     post isn't tied to a season).
4. Below the second `---`, write your post in plain text. Leave a blank
   line between paragraphs.
5. Save the file. It will automatically appear on `/newsletter/`, newest
   first, filterable by season.

---

## 4. Updating the Shop (products & prices)

1. Open `src/pages/shop.astro`.
2. Near the top, you'll see a list of products that looks like this:
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
3. To change a price: edit the text inside `price: '...'`.
4. To connect a real "Buy Now" button: replace the `#` inside
   `buyLink: '#'` with your real Gumroad product link (see Section 6).
5. To add a brand-new product: copy one whole `{ ... }` block, paste it
   right after another one, and edit the text inside.
6. `tagClass` controls the little colored label — options are:
   `tag--advent` (purple), `tag--solemnity` (gold), `tag--ordinary`
   (green), `tag--holyweek` (red).

The Home page also features one product near the top — update that one
separately in `src/pages/index.astro` (look for `ProductCard`).

> **Reminder you asked for:** the $8 placeholder price is used everywhere
> for now. When you're ready to set real prices, repeat the price edit
> above for every product in `shop.astro` and in `index.astro`.

---

## 5. Updating Collections (Saints, Sacraments, Liturgical Calendar)

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
  than copying the text (so it's always accurate and avoids copyright
  issues). If you'd ever like to embed a daily readings widget instead of
  linking out, that's a future enhancement — just ask.

To add a new entry to any of these lists, copy one `{ ... }` block and
edit the text inside, same as the Shop instructions above.

---

## 6. Connecting the email signup form to Brevo

Right now, the email form on the Home, Free Resource, and Newsletter
pages is a placeholder — it shows a "Thanks!" message but doesn't
actually collect emails.

When you're ready to connect it to **Brevo** (recommended — free tier,
beginner-friendly):

1. Create a free Brevo account at brevo.com.
2. In Brevo, create a Contact List for your subscribers.
3. Go to **Campaigns → Forms** (or **Contacts → Forms**) and create a new
   signup form.
4. Brevo will give you an embed code (HTML) for the form.
5. Open `src/components/EmailSignup.astro` in this project.
6. Replace the `<form>...</form>` block with the HTML Brevo gave you.
7. Save, then check the live preview to make sure it still looks right —
   you can adjust the surrounding CSS in the `<style>` section at the
   bottom of that same file if needed.

Because all three pages use this same `EmailSignup.astro` component,
you only have to do this once and it updates everywhere.

---

## 7. Connecting "Buy Now" buttons to Gumroad

1. Create a free Gumroad account at gumroad.com.
2. Create a product (e.g. "Advent Pack") and set your real price.
3. Gumroad gives you a product link (e.g. `https://gumroad.com/l/advent-pack`).
4. Open `src/pages/shop.astro` (and `src/pages/index.astro` for the
   featured product on the Home page).
5. Find the matching product and replace `buyLink: '#'` with your real
   Gumroad link, e.g. `buyLink: 'https://gumroad.com/l/advent-pack'`.
6. Save and check the live preview — the "Buy Now" button will now go to
   your real checkout page.

---

## 8. Updating social media links

1. Open `src/components/Footer.astro`.
2. Near the top, edit the `socialLinks` list with your real URLs.
3. Open `src/pages/index.astro` and find the "Follow Along" section near
   the bottom — update the same four links there too (TikTok, Instagram,
   Facebook, YouTube).

---

## 9. Changing colors or fonts

All colors are defined once at the top of `src/styles/global.css` under
`:root`. For example, to change the main accent color, edit the line:
```
--color-burgundy: #6E2C40;
```
Everything using that color across the whole site updates automatically.
The liturgical accent colors (purple, gold, green, red) are defined the
same way just below it — adjust with care, since they're used for
seasonal tags throughout the site.

---

## 10. Basic SEO (already set up, here's how to adjust it)

Every page has a `title` and `description` near the top, inside
`<BaseLayout title="..." description="...">`. These control:
- The text shown in Google search results
- The tab title in your browser
- What's shown when the page is shared on social media

To improve SEO for a page, edit those two lines with relevant keywords
(e.g. "Catholic school AI tools," "Advent classroom resources").

---

## 11. Publishing the site (Netlify)

**First-time setup:**
1. Push this project to a GitHub repository (ask if you'd like help with
   this step).
2. Go to netlify.com and sign up for a free account.
3. Click "Add new site" → "Import an existing project" → connect your
   GitHub repo.
4. Netlify will detect Astro automatically. Build command: `npm run
   build`. Publish directory: `dist`.
5. Click Deploy. Netlify gives you a free `*.netlify.app` URL right away,
   and you can connect your own domain name later in Site Settings →
   Domain Management.

**Every time after that:**
1. Make your edits locally (as described above) and confirm they look
   right with `npm run dev`.
2. Save your changes to GitHub (commit + push).
3. Netlify automatically rebuilds and publishes the site within a minute
   or two — no manual steps needed.

---

## Quick checklist for "things to do before launch"

- [ ] Replace all `[PLACEHOLDER]` text on the About page with your real story
- [ ] Set real prices in `shop.astro` and `index.astro`
- [ ] Connect Gumroad buy links
- [ ] Connect the Brevo email form
- [ ] Replace placeholder social media URLs
- [ ] Fill in real Saints, Sacraments, and Liturgical Calendar content
- [ ] Write your first few real newsletter posts
- [ ] Deploy to Netlify and connect your domain name
