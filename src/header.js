class SiteHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <header style="background:#222;color:#fff;padding:1rem;text-align:center;">
        <h2>My Website Header</h2>
      </header>
    `;
  }
}

customElements.define('site-header', SiteHeader);
