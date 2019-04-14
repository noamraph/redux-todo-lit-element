import { addTodo } from '../actions.js'
import { LitElement, html } from 'https://unpkg.com/lit-element?module';
import { connect } from 'https://unpkg.com/pwa-helpers/connect-mixin.js?module';

// This element is connected to the Redux store.
import { store } from '../store.js';


class AddTodo extends connect(store)(LitElement) {
  static get properties() {
    return {
      text: { type: Text }
    }
  }

  constructor() {
    super();
    this.text = '';
  }
  
  render() {
    return html`
      <div>
        <form @submit=${(e) => {
          e.preventDefault();
          if (!this.text.trim()) {
            return
          }
          store.dispatch(addTodo(this.text))
          this.text = ''
        }}>
          <input type="text" .value=${this.text} @input=${(e) => {this.text = e.target.value;}} />
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    `;
  }
}
  
window.customElements.define('add-todo', AddTodo);
  