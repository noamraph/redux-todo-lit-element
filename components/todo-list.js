import { LitElement, html } from 'https://unpkg.com/lit-element?module';
import './todo-element.js';

class TodoList extends LitElement {
  // Show a list of <todo-element> items, according to the todos property.
  // When an element is clicked, dispatch 'toggle-todo' with detail: {id: todo.id}.
  static get properties() {
    return {
      todos: { type: Array } // Array of {id, text, completed}
    }
  }
  render(){
    return html`
      <ul>
        ${this.todos.map((todo) => html`
          <todo-element 
            .text=${todo.text} 
            .completed=${todo.completed} 
            @click=${(e) => this.dispatchEvent(new CustomEvent('todo-toggled', {detail: {id: todo.id}}))}
          />
        `)}
      </ul>
    `;
  }
}

customElements.define('todo-list', TodoList);
