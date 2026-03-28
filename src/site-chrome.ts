/** Shared header/footer for static pages. Uses Vite base for GitHub Pages subpaths. */
export function siteBase(): string {
  return import.meta.env.BASE_URL;
}

export function renderSiteChrome(args: {
  active: "home" | "blog";
  mainInner: string;
}): string {
  const base = siteBase();
  const year = new Date().getFullYear();
  const blogCurrent = args.active === "blog" ? ' aria-current="page"' : "";

  return `
  <a class="skip blog-skip" href="#main">Skip to content</a>
  <header class="blog-topbar">
    <div class="blog-topbar__inner">
      <a class="blog-topbar__brand" href="${base}">Ganesh Kaila</a>
      <nav class="blog-topbar__nav" aria-label="Primary">
        <a href="${base}#about">About</a>
        <a href="${base}#experience">Experience</a>
        <a href="${base}#credentials">Credentials</a>
        <a href="${base}blog/"${blogCurrent}>Blog</a>
        <a href="${base}#connect">Connect</a>
      </nav>
    </div>
  </header>
  <main id="main" class="blog-main">${args.mainInner}</main>
  <footer class="blog-footer">
    <div class="blog-footer__inner">
      <p>© ${year} Ganesh Kaila · <a href="${base}">Home</a></p>
    </div>
  </footer>
`;
}
