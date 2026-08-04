/**
 * Shared frontend helpers reused across index.html and shop.html — small,
 * dependency-free utilities for rendering Wix Stores product data as plain HTML.
 */

/** Escape a string for safe interpolation into HTML markup. */
export function escapeHtml(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
}

/** Strip HTML tags from a Wix rich-text `plainDescription` string, returning plain text. */
export function stripTags(html) {
  const d = document.createElement('div');
  d.innerHTML = html ?? '';
  return (d.textContent || '').trim();
}

/** Wix formattedAmount glues the currency code to the number ("27,00C$") — add a thin space. */
export function formatPrice(raw) {
  return String(raw ?? '').replace(/(\d)([A-Za-z])/, '$1\u00A0$2');
}

/**
 * Wix serves full-resolution originals by default. Request a resized/compressed
 * rendition via the Wix Media Platform URL transform so pages load fast.
 */
export function wixImg(url, size) {
  if (!url) return url;
  const match = url.match(/\/media\/([^/?#]+)/);
  const filename = match ? match[1] : null;
  if (!filename) return url;
  return `https://static.wixstatic.com/media/${filename}/v1/fill/w_${size},h_${size},al_c,q_80,usm_0.66_1.00_0.01/file.jpg`;
}
