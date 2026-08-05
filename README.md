# Institut Bella par Chloé — Dev README

Static, dependency-free front end for Chloé's esthetics business, backed live by Wix
Stores / Forms via REST (no SDK, no Velo, no build step for the site itself).

## Architecture

- **Plain static HTML/CSS/JS.** No framework, no bundler. `index.html` is the canonical
  site (design "Variant C" — ocean/seafoam, promoted from `mocks/variant-c.html`).
  `shop.html` is the full paginated product catalog + PDP overlay.
- **`css/shared.css`** — design tokens (CSS custom properties: colors, radii, spacing)
  and shared component styles reused by both pages.
- **`js/site-helpers.js`** — small DOM/formatting utilities (`escapeHtml`, `stripTags`,
  `formatPrice`, `wixImg`) shared by the product-rendering code in both pages.
- **`js/wix/`** — hand-rolled REST client for Wix Headless, no `@wix/sdk`:
  - `wix-client.js` — mints/caches an anonymous **visitor access token** via
    `POST /oauth2/token` using the public `WIX_CLIENT_ID` (safe to hardcode; it can
    only mint anonymous tokens). Token is cached in `localStorage`, keyed by client id.
  - `wix-store-catalog.js` — queries the Wix Stores Catalog V3 API for products.
  - `wix-forms.js` — submits the contact form via Wix Forms.
- **`mocks/`** — archived design exploration (`hub.html`, `variant-a.html`,
  `variant-b.html`) kept for reference; not part of the live site.

### Data flow

The site is 100% static and talks directly to Wix's public REST APIs from the browser
using the anonymous visitor token — there is no backend of our own. All business data
(products, forms, contacts) lives in Chloé's **classic** Wix site (siteId `35ab7303`)
and is only *read* here via the headless project's API credentials.

## Wix project layout

- **Headless project** (this site, what actually serves the HTML/CSS/JS):
  - `siteId` / `appId`: see [wix.config.json](wix.config.json)
  - Deployed URL (staging): `https://institu-be-b9e9c146-christianribe.wix-site-host.com`
- **Classic site** (siteId `35ab7303`) — owns the Wix Stores catalog, Wix Forms, and
  Contacts. Not served directly; the headless project reads its data over REST using
  `WIX_CLIENT_ID` in `js/wix/wix-client.js`.

### Contact form

Uses the existing Wix Form **"Formulaire de Contact - Institut de Beauté"**
(`formId d8f45a9f-71c0-4bfc-9173-b4adea04a209`, namespace `wix.form_app.form`).
Submits anonymously to `POST https://www.wixapis.com/forms/v4/submissions`
(**not** `/form-submission/v4` — that 404s). Submissions land in the **Forms and
Submissions** app on the classic site, not the Inbox (would need an Automation rule
for that).

## Local development

No build step — just serve the static files and open in a browser:

```powershell
npx http-server .
```

Verify locally before every deploy (see below).

## Deployment

Deploys via the Wix CLI to the **headless staging project**:

```powershell
npx @wix/cli release
```

This uploads the static files (per `wix.config.json`'s `outputDirectory: ./dist`) and
publishes to the staging URL above. There is no separate build — `@wix/cli` packages
the site as-is.

### Launch plan (repoint her real domain)

The site currently lives at the staging headless URL. To go live under
`institutbellaparchloe.com`:

1. Add `institutbellaparchloe.com` + `www` to the headless project's
   **allowed redirect domains** (required — Wix-hosted checkout redirects back here).
2. In the classic site's dashboard: **Domains → Domain Actions → Assign to a Different
   Site** → select this headless project (`4bae2be2...`). The Core plan and domain
   move with it — no new subscription needed.
3. Verify the custom domain resolves and do a full product → checkout round-trip test.

Her Wix Stores/Forms/Contacts data stays on the classic site backend the whole time —
this is a domain reassignment, not a data migration.

## Gotchas

- **Image sizing:** Wix media URLs (`media.main.image.url`) serve full-resolution
  originals by default. Use `wixImg(url, size)` from `site-helpers.js` to request a
  resized/compressed rendition via the Wix Media Platform transform URL
  (`.../fill/w_{size},h_{size},al_c,q_80,.../file.jpg`). Grid thumbnails use 400px,
  PDP hero uses 700px.
- **Price formatting:** Wix's `formattedAmount` glues the currency symbol to the number
  (e.g. `27,00C$`) — `formatPrice()` inserts a thin space.
- **No home address on the public site.** The contact section intentionally does not
  list a street address (home-based business) — only phone, email, and hours.
