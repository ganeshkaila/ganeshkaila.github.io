import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) throw new Error("#app not found");

const base = import.meta.env.BASE_URL;

app.innerHTML = `
  <a class="skip" href="#main">Skip to content</a>
  <header class="header">
    <div class="wrap header__inner">
      <p class="logo">Ganesh Kaila</p>
      <nav aria-label="Primary">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#credentials">Credentials</a>
        <a href="${base}blog/">Blog</a>
        <a href="#connect">Connect</a>
      </nav>
    </div>
  </header>
  <main id="main">
    <section class="wrap hero" aria-labelledby="hero-heading">
      <p class="hero__eyebrow">Cloud architecture &amp; platform engineering</p>
      <h1 id="hero-heading" class="hero__title">
        Google Cloud, Kubernetes, and DevOps — pragmatic systems at scale.
      </h1>
      <p class="hero__lede">
        I’m a cloud architect focused on <strong>Google Cloud Platform (GCP)</strong>, <strong>Kubernetes</strong>, and
        <strong>DevOps</strong>. I work at <strong>SADA, An Insight company</strong>, helping teams design and operate reliable platforms.
        Based in <strong>Andhra Pradesh, India</strong>.
      </p>
    </section>
    <section id="about" class="section section--alt" aria-labelledby="about-heading">
      <div class="wrap">
        <h2 id="about-heading" class="section__title">About</h2>
        <p class="section__text">
          I’m a cloud architect with deep experience on GCP, Kubernetes, and modern delivery practices. I care about
          secure, observable platforms and helping organizations ship with confidence—whether that’s multi-cloud patterns,
          cluster operations, or automation that stands up to real-world incidents.
        </p>
        <p class="section__text section__text--tight">
          <strong>Education:</strong> B.Tech, Electronics and Communications Engineering — Nalla Malla Reddy Engineering
          College (2008–2012).
        </p>
        <p class="section__text section__text--tight">
          <strong>Languages:</strong> English (professional working proficiency) · Telugu (native or bilingual proficiency).
        </p>
        <p class="section__footnote">
          Career summary on
          <a href="https://www.linkedin.com/in/ganeshkaila/" target="_blank" rel="noopener noreferrer">LinkedIn</a>;
          verified credentials on
          <a href="https://www.credly.com/users/ganeshkaila/" target="_blank" rel="noopener noreferrer">Credly</a>.
        </p>
      </div>
    </section>
    <section id="experience" class="section" aria-labelledby="experience-heading">
      <div class="wrap">
        <h2 id="experience-heading" class="section__title">Experience</h2>
        <p class="section__text">
          Selected roles (most recent first). Full details and endorsements are on
          <a href="https://www.linkedin.com/in/ganeshkaila/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
        </p>
        <ol class="exp-list">
          <li class="exp-item">
            <div class="exp-item__header">
              <h3 class="exp-item__title">Enterprise Cloud Architect</h3>
              <p class="exp-item__meta">
                <span class="exp-item__company">SADA, An Insight company</span>
                <span class="exp-item__dates" aria-label="Employment dates">May 2024 – Present</span>
              </p>
            </div>
            <p class="exp-item__summary">
              GCP, Kubernetes, and DevOps-focused architecture for enterprise platforms—reliability, security, and
              automation at scale.
            </p>
          </li>
          <li class="exp-item">
            <div class="exp-item__header">
              <h3 class="exp-item__title">Lead Cloud Architect</h3>
              <p class="exp-item__meta">
                <span class="exp-item__company">Searce Inc</span>
                <span class="exp-item__dates">Oct 2022 – May 2024</span>
              </p>
            </div>
          </li>
          <li class="exp-item">
            <div class="exp-item__header">
              <h3 class="exp-item__title">Cloud Architect</h3>
              <p class="exp-item__meta">
                <span class="exp-item__company">Searce Inc</span>
                <span class="exp-item__dates">Oct 2021 – Sep 2022</span>
              </p>
            </div>
          </li>
          <li class="exp-item">
            <div class="exp-item__header">
              <h3 class="exp-item__title">Senior Consultant</h3>
              <p class="exp-item__meta">
                <span class="exp-item__company">Deloitte India</span>
                <span class="exp-item__dates">Jun 2021 – Sep 2021</span>
              </p>
            </div>
          </li>
          <li class="exp-item">
            <div class="exp-item__header">
              <h3 class="exp-item__title">Consultant</h3>
              <p class="exp-item__meta">
                <span class="exp-item__company">Deloitte India</span>
                <span class="exp-item__dates">Jun 2018 – May 2021</span>
              </p>
            </div>
          </li>
          <li class="exp-item">
            <div class="exp-item__header">
              <h3 class="exp-item__title">Senior Software Engineer</h3>
              <p class="exp-item__meta">
                <span class="exp-item__company">Vedams</span>
                <span class="exp-item__dates">Feb 2018 – May 2018</span>
              </p>
            </div>
          </li>
          <li class="exp-item">
            <div class="exp-item__header">
              <h3 class="exp-item__title">Software Engineer</h3>
              <p class="exp-item__meta">
                <span class="exp-item__company">Vedams</span>
                <span class="exp-item__dates">Aug 2014 – Jan 2018</span>
              </p>
            </div>
          </li>
          <li class="exp-item">
            <div class="exp-item__header">
              <h3 class="exp-item__title">Embedded Engineer</h3>
              <p class="exp-item__meta">
                <span class="exp-item__company">Trylogic Soft Solutions AP Pvt Ltd</span>
                <span class="exp-item__dates">Nov 2012 – Apr 2014</span>
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
    <section id="credentials" class="section section--alt" aria-labelledby="credentials-heading">
      <div class="wrap">
        <h2 id="credentials-heading" class="section__title">Credentials</h2>
        <p class="section__text">
          Digital badges, issuance dates, and verification — including Google Cloud skill badges and professional
          certifications — are on my
          <a href="https://www.credly.com/users/ganeshkaila/" target="_blank" rel="noopener noreferrer">Credly profile</a>.
          Summary below matches what I typically publish; if anything differs, Credly is the source of truth.
        </p>
        <ul class="cred-list" aria-label="Professional certifications">
          <li>
            <span class="cred-list__org">Google Cloud</span>
            <p class="cred-list__links">
              <a href="https://www.credly.com/badges/85a32372-1c6a-4de6-a4e0-fee4135ebf15/public_url" target="_blank" rel="noopener noreferrer">Professional Cloud Architect</a><span class="cred-list__sep"> · </span>
              <a href="https://www.credly.com/badges/cec5fdd2-fbb3-49e2-b69e-c3e421ecd781/public_url" target="_blank" rel="noopener noreferrer">Professional Cloud DevOps Engineer</a><span class="cred-list__sep"> · </span>
              <a href="https://www.credly.com/badges/ea21bcaf-18ba-49a2-b396-39cec9be1404/public_url" target="_blank" rel="noopener noreferrer">Professional Cloud Network Engineer</a><span class="cred-list__sep"> · </span>
              <a href="https://www.credly.com/badges/e520bd37-767e-456a-99da-cb6dfc664181/public_url" target="_blank" rel="noopener noreferrer">Professional Cloud Developer</a><span class="cred-list__sep"> · </span>
              <a href="https://www.credly.com/badges/3e5d2027-64c3-4a6a-9356-aa155ca72a0d/public_url" target="_blank" rel="noopener noreferrer">Professional Cloud Security Engineer</a><span class="cred-list__sep"> · </span>
              <a href="https://www.credly.com/badges/c3d0f158-2d78-401d-b5f0-15a33569b8e1/public_url" target="_blank" rel="noopener noreferrer">Associate Cloud Engineer</a><span class="cred-list__sep"> · </span>
              <a href="https://www.credly.com/badges/35414e39-0628-4745-975b-2de0585de5ec/public_url target="_blank" rel="noopener noreferrer">Professional Cloud Database Engineer</a><span class="cred-list__sep"> · </span>
              <a href="https://www.credly.com/badges/9a5512e0-d18e-472e-be4f-429f150d9401/public_url" target="_blank" rel="noopener noreferrer">Professional Data Engineer</a><span class="cred-list__sep">
            </p>
          </li>
          <li>
            <span class="cred-list__org">CNCF / The Linux Foundation</span>
            <p class="cred-list__links">
              <a href="https://www.credly.com/badges/25634af6-8166-4590-89e8-774d17e9c12e/public_url" target="_blank" rel="noopener noreferrer">Kubestronaut</a><span class="cred-list__sep"> · </span>
              <a href="https://www.credly.com/badges/aa114077-142e-49f9-a3b1-0ded9c7c4802/public_url" target="_blank" rel="noopener noreferrer">CKA (Certified Kubernetes Administrator)</a><span class="cred-list__sep"> · </span>
              <a href="https://www.credly.com/badges/b1ae2b04-ede4-4a3f-a16e-5160d5d5c4dd/public_url" target="_blank" rel="noopener noreferrer">CKAD (Certified Kubernetes Application Developer)</a><span class="cred-list__sep"> · </span>
              <a href="https://www.credly.com/badges/af10ba74-83e8-4df7-a2ea-3b4f3f07b2f6/public_url" target="_blank" rel="noopener noreferrer">CKS (Certified Kubernetes Security Specialist)</a><span class="cred-list__sep"> · </span>
              <a href="https://www.credly.com/badges/9c688042-56ab-42e3-9111-0a20cf724aaf/public_url" target="_blank" rel="noopener noreferrer">KCNA (Kubernetes and Cloud Native Associate)</a><span class="cred-list__sep"> · </span>
              <a href="https://www.credly.com/badges/6e947cc1-6ed7-430f-ad15-636157eca60d/public_url" target="_blank" rel="noopener noreferrer">KCSA (Kubernetes and Cloud Native Security Associate)</a><span class="cred-list__sep"> · </span>
              <a href="https://www.credly.com/badges/c63ee543-3a87-4683-903f-ad148d17354b/public_url" target="_blank" rel="noopener noreferrer">KCA (Kyverno Certified Associate)</a><span class="cred-list__sep"> · </span>
              <a href="https://www.credly.com/badges/82d3758c-f247-4619-9a74-539291ed231b/public_url" target="_blank" rel="noopener noreferrer">LFCS (Linux Foundation Certified System Administrator)</a>
            </p>
          </li>
          <li>
            <span class="cred-list__org">Amazon Web Services (AWS)</span>
            <p class="cred-list__links">
              <a href="https://www.credly.com/badges/c6af6338-db1c-4e09-839a-6e5491dd5eee/public_url" target="_blank" rel="noopener noreferrer">AWS Certified Cloud Practitioner</a>
            </p>
          </li>
          <li>
            <span class="cred-list__org">HashiCorp</span>
            <p class="cred-list__links">
              <a href="https://www.credly.com/badges/9dffe68c-2ad6-44c0-92a4-c38553d52dfb/public_url" target="_blank" rel="noopener noreferrer">HashiCorp Certified: Terraform Associate</a><span class="cred-list__sep"> · </span>
              <a href="https://www.credly.com/badges/09896ea9-5f6e-47d3-a502-4b0b785a35e5/public_url" target="_blank" rel="noopener noreferrer">HashiCorp Certified: Terraform Authoring and Operations Professional</a>
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section id="connect" class="section" aria-labelledby="connect-heading">
      <div class="wrap">
        <h2 id="connect-heading" class="section__title">Connect</h2>
        <ul class="links">
          <li>
            <a class="pill" href="https://www.linkedin.com/in/ganeshkaila/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a class="pill" href="https://github.com/ganeshkaila" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a class="pill" href="https://www.credly.com/users/ganeshkaila/" target="_blank" rel="noopener noreferrer">
              Credly
            </a>
          </li>
        </ul>
      </div>
    </section>
  </main>
  <footer class="footer">
    <div class="wrap footer__inner">
      <p>© ${new Date().getFullYear()} Ganesh Kaila</p>
    </div>
  </footer>
`;
