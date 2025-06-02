class SiteHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <header style="background:#222;color:#fff;padding:1rem;text-align:center;">
 <nav>
  <a href="/">Home</a> |
  <a href="/blog/tech-tips">Tech Tips</a> |
  <a href="https://www.linkedin.com/in/pascal-vautour-19a30196/">LinkedIn</a>
</nav> 
      </header>
    `;
  }
}

customElements.define('site-header', SiteHeader);
