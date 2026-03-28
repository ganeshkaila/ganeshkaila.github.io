export type BlogPost = {
  slug: string;
  title: string;
  /** ISO date yyyy-mm-dd */
  date: string;
  excerpt: string;
  /** Trusted HTML (your own content only). */
  body: string;
};

/**
 * Template posts — edit or add entries here. Sorting is by date in the blog list.
 */
export const posts: BlogPost[] = [
  {
    slug: "welcome-template",
    title: "Welcome — Google Cloud docs–inspired template",
    date: "2026-03-28",
    excerpt:
      "How this static blog is structured, and how to add posts without a database.",
    body: `
      <p>
        This site uses typography and colors aligned with the
        <a href="https://docs.cloud.google.com/docs" target="_blank" rel="noopener noreferrer">Google Cloud Documentation</a>
        look: <strong>Noto Sans</strong> for body text, <strong>Roboto Mono</strong> for inline code, Material-style
        grays (<code>#202124</code> / <code>#5f6368</code>), and link blues consistent with Google’s developer docs.
        Everything is static HTML from Vite, so it works on GitHub Pages with no server.
      </p>
      <h2>Adding posts</h2>
      <p>
        Open <code>src/blog-data.ts</code> and append objects to the <code>posts</code> array. Each post needs a
        unique <code>slug</code>, <code>title</code>, <code>date</code>, <code>excerpt</code>, and <code>body</code>
        (HTML string).
      </p>
      <h2>Styling</h2>
      <p>
        Blog-specific styles live in <code>src/blog-template.css</code>. Tweak colors, spacing, or fonts there to
        match your taste.
      </p>
    `,
  },
  {
    slug: "gcp-k8s-notes",
    title: "Notes from the field: GCP, Kubernetes, and reliability",
    date: "2026-02-10",
    excerpt:
      "Short placeholder article — swap in your own thoughts on platform work, incidents, or architecture.",
    body: `
      <p>
        Replace this with a real article about something you’ve shipped: a migration, a failure mode you debugged,
        or a pattern you use for multi-cluster operations.
      </p>
      <p>
        Keeping posts as data in the repo makes them easy to version, review, and deploy with the rest of the site.
      </p>
    `,
  },
];

export function getPostBySlug(slug: string | null): BlogPost | undefined {
  if (!slug) return undefined;
  return posts.find((p) => p.slug === slug);
}
