class SiteHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <header style="text-align:center;">
       <nav>
        <a href="/">Home</a> |
        <a href="/blog/tech-tips/index.html">Tech Tips</a> |
        <a href="https://www.linkedin.com/in/pascal-vautour-19a30196/">LinkedIn</a>
       </nav> 
      </header>
    `;
  }
}

customElements.define('site-header', SiteHeader);
