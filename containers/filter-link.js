import { setVisibilityFilter } from '../actions.js'
import { LitElement, html } from 'https://unpkg.com/lit-element?module';
import { connect } from 'https://unpkg.com/pwa-helpers/connect-mixin.js?module';
import '../components/link-element.js';

// This element is connected to the Redux store.
import { store } from '../store.js';


class FilterLink extends connect(store)(LitElement) {

  static get properties() {
    return {
      filter: { type: Text },
      text: { type: Text },
      active: { type: Boolean }
    }
  }

  render() {
    return html`
      <link-element
        .active=${this.active}
        @click=${(e) => store.dispatch(setVisibilityFilter(this.filter))}>
        ${this.text}
      </link-element>
    `;
  }

  // This is called every time something is updated in the store.
  stateChanged(state) {
    this.active = this.filter === state.visibilityFilter;
  }
}
  
window.customElements.define('filter-link', FilterLink);
  