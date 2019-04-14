import { LitElement, html } from 'https://unpkg.com/lit-element?module';
import '../containers/filter-link.js'
import { VisibilityFilters } from '../actions.js'


class FooterElement extends LitElement {
  render(){
    return html`
      <div>
        <span>Show: </span>
        <filter-link .filter=${VisibilityFilters.SHOW_ALL} text="All">
        </filter-link>
        <filter-link .filter=${VisibilityFilters.SHOW_ACTIVE} text="Active">
        </filter-link>
        <filter-link .filter=${VisibilityFilters.SHOW_COMPLETED} text="Completed">
        </filter-link>
      </div>
    `;
  }
}

customElements.define('footer-element', FooterElement);
