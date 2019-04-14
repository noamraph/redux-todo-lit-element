import { LitElement, html } from 'https://unpkg.com/lit-element?module';
import '../containers/add-todo.js'
import '../containers/visible-todo-list.js'
import './footer-element.js'


class AppElement extends LitElement {
  render(){
    return html`
      <div>
        <add-todo></add-todo>
        <visible-todo-list></visible-todo-list>
        <footer-element></footer-element>
      </div>
    `;
  }
}

customElements.define('app-element', AppElement);
