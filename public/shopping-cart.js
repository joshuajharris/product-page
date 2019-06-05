const template = document.createElement('template');
template.innerHTML = `
  <div>
    <style>
      :host {
        color: #66CC00;
        display: inline-block;
      }
    </style>
    <slot></slot>
  </div>
`;

customElements.define('shopping-cart', class ShoppingCart extends HTMLElement {
  $(selector) {
    return this.shadowRoot && this.shadowRoot.querySelector(selector);
  }

  constructor() {
    super();
    const root = this.attachShadow({ mode: 'open' });
    root.appendChild(template.content.cloneNode(true));
  }
});
