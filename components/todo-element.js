import { LitElement, html } from 'https://unpkg.com/lit-element?module';
import { styleMap } from 'https://unpkg.com/lit-html/directives/style-map.js?module'

class TodoElement extends LitElement {

  static get properties() {
    return {
      completed: { type: Boolean },
      text: { type: Text }
    }
  }

  render(){
    return html`
      <li
        style=${styleMap({textDecoration: this.completed ? 'line-through' : 'none'})}
      >
        ${this.text}
      </li>
    `;
  }
}

customElements.define('todo-element', TodoElement);
