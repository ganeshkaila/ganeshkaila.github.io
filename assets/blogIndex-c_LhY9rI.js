import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as l,e,f as r,r as n,s as c}from"./blog-html-Bnft-MPK.js";const a=document.querySelector("#app");if(!a)throw new Error("#app not found");const t=c(),d=[...l].sort((o,s)=>s.date.localeCompare(o.date)),i=d.map(o=>`
    <article class="blog-card">
      <time datetime="${e(o.date)}">${e(r(o.date))}</time>
      <h2><a href="${t}blog/post.html?slug=${encodeURIComponent(o.slug)}">${e(o.title)}</a></h2>
      <p>${e(o.excerpt)}</p>
      <a class="blog-card__more" href="${t}blog/post.html?slug=${encodeURIComponent(o.slug)}">Read more</a>
    </article>
  `).join(""),m=`
  <div class="blog-hero">
    <h1 class="blog-hero__title">Blog</h1>
    <p class="blog-hero__meta">Thoughts on cloud, Kubernetes, and building platforms — typography and layout follow the <a href="https://docs.cloud.google.com/docs" target="_blank" rel="noopener noreferrer">Google Cloud Documentation</a> look (Noto Sans, Material surfaces).</p>
  </div>
  <div class="blog-list" aria-label="Blog posts">${i}</div>
`;a.innerHTML=n({active:"blog",mainInner:m});
