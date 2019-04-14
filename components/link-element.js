import { LitElement, html } from 'https://unpkg.com/lit-element?module';

class LinkElement extends LitElement {

  static get properties() {
    return {
      active: { type: Boolean },
    }
  }

  render(){
    return html`
      <button .disabled=${this.active} style="marginLeft: '4px'">
        <slot></slot>
      </button>
    `;
  }
}

customElements.define('link-element', LinkElement);
