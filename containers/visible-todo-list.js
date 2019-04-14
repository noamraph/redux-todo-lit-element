import { toggleTodo, VisibilityFilters } from '../actions.js'
import '../components/todo-list.js'
import { LitElement, html } from 'https://unpkg.com/lit-element?module';
import { connect } from 'https://unpkg.com/pwa-helpers/connect-mixin.js?module';

// This element is connected to the Redux store.
import { store } from '../store.js';


const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

class VisibleTodoList extends connect(store)(LitElement) {
    static get properties() {
      return {
        todos: { type: Array }
      };
    }
  
    render() {
      return html`<todo-list .todos=${this.todos} @todo-toggled="${this._todoToggled}"></todo-list>`;
    }
  
    _todoToggled(event) {
      store.dispatch(toggleTodo(event.detail.id));
    }

    // This is called every time something is updated in the store.
    stateChanged(state) {
      this.todos = getVisibleTodos(state.todos, state.visibilityFilter);
    }
  }
  
  window.customElements.define('visible-todo-list', VisibleTodoList);
  