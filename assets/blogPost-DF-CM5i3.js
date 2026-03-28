import"./modulepreload-polyfill-B5Qt9EMX.js";import{g as s,e as t,f as r,r as l,s as c}from"./blog-html-Bnft-MPK.js";const o=document.querySelector("#app");if(!o)throw new Error("#app not found");const a=c(),n=new URLSearchParams(window.location.search).get("slug"),e=s(n),i=e?`
  <div class="blog-article-wrap">
    <a class="blog-back" href="${a}blog/">← Back to blog</a>
    <article class="blog-article">
      <header>
        <h1>${t(e.title)}</h1>
        <p class="byline"><time datetime="${t(e.date)}">${t(r(e.date))}</time></p>
      </header>
      <div class="content">${e.body}</div>
    </article>
  </div>
`:`
  <div class="blog-not-found">
    <p>That post could not be found.</p>
    <p><a href="${a}blog/">Return to the blog</a></p>
  </div>
`;o.innerHTML=l({active:"blog",mainInner:i});
