import { useRef, useState } from 'react';
import '../reset.css';
import '../App.css';
import NoTodos from './NoTodos';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import useLocalStorage from '../hooks/useLocalStorage';
import { TodosContext } from '../contexts/TodosContext';

function App() {
  const [name, setName] = useLocalStorage('name', '');

  const nameInputEl = useRef(null);

  const [todos, setTodos] = useLocalStorage('todos', []);

  const [newTodoId, setNewTodoId] = useState(todos.length + 1);

  const [filter, setFilter] = useState('');

  function todosFiltered() {
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.isComplete);
      case 'completed':
        return todos.filter((todo) => todo.isComplete);
      default:
        return todos;
    }
  }

  const handleNameInput = (event) => {
    setName(event.target.value);
  };

  return (
    <TodosContext.Provider
      value={{
        todos,
        setTodos,
        newTodoId,
        setNewTodoId,
        filter,
        setFilter,
        todosFiltered,
      }}
    >
      <div className="todo-app-container">
        <div className="todo-app">
          <div className="name-container">
            <h2>What is your name?</h2>
            <form action="#">
              <input
                type="text"
                ref={nameInputEl}
                className="todo-input"
                placeholder="What is your name?"
                value={name}
                onChange={handleNameInput}
              />
              {name && <p className="name-label">Hello, {name}</p>}
            </form>
          </div>
          <h2>Todo App</h2>
          <TodoForm />

          {todos.length > 0 ? <TodoList /> : <NoTodos />}
        </div>
      </div>
    </TodosContext.Provider>
  );
}

export default App;
