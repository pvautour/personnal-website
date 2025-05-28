class SiteFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <footer style="background:#222;color:#fff;padding:1rem;text-align:center;">
        <p>footer</p>
      </footer>
    `;
  }
}

customElements.define('site-footer', SiteFooter);
