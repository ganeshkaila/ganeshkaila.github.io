import "./blog-template.css";
import { getPostBySlug } from "./blog-data";
import { renderSiteChrome, siteBase } from "./site-chrome";
import { escapeHtml, formatPostDate } from "./blog-html";

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) throw new Error("#app not found");

const base = siteBase();
const slug = new URLSearchParams(window.location.search).get("slug");
const post = getPostBySlug(slug);

const mainInner = post
  ? `
  <div class="blog-article-wrap">
    <a class="blog-back" href="${base}blog/">← Back to blog</a>
    <article class="blog-article">
      <header>
        <h1>${escapeHtml(post.title)}</h1>
        <p class="byline"><time datetime="${escapeHtml(post.date)}">${escapeHtml(formatPostDate(post.date))}</time></p>
      </header>
      <div class="content">${post.body}</div>
    </article>
  </div>
`
  : `
  <div class="blog-not-found">
    <p>That post could not be found.</p>
    <p><a href="${base}blog/">Return to the blog</a></p>
  </div>
`;

app.innerHTML = renderSiteChrome({ active: "blog", mainInner });
