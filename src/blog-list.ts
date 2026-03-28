import "./blog-template.css";
import { posts } from "./blog-data";
import { renderSiteChrome, siteBase } from "./site-chrome";
import { escapeHtml, formatPostDate } from "./blog-html";

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) throw new Error("#app not found");

const base = siteBase();
const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

const cards = sorted
  .map(
    (p) => `
    <article class="blog-card">
      <time datetime="${escapeHtml(p.date)}">${escapeHtml(formatPostDate(p.date))}</time>
      <h2><a href="${base}blog/post.html?slug=${encodeURIComponent(p.slug)}">${escapeHtml(p.title)}</a></h2>
      <p>${escapeHtml(p.excerpt)}</p>
      <a class="blog-card__more" href="${base}blog/post.html?slug=${encodeURIComponent(p.slug)}">Read more</a>
    </article>
  `,
  )
  .join("");

const mainInner = `
  <div class="blog-hero">
    <h1 class="blog-hero__title">Blog</h1>
    <p class="blog-hero__meta">Thoughts on cloud, Kubernetes, and building platforms — typography and layout follow the <a href="https://docs.cloud.google.com/docs" target="_blank" rel="noopener noreferrer">Google Cloud Documentation</a> look (Noto Sans, Material surfaces).</p>
  </div>
  <div class="blog-list" aria-label="Blog posts">${cards}</div>
`;

app.innerHTML = renderSiteChrome({ active: "blog", mainInner });
