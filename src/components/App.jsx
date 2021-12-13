import { useState } from 'react';
import '../reset.css';
import '../App.css';
import NoTodos from './NoTodos';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish React series.',
      isComplete: false,
      isEditing: false,
    },
    {
      id: 2,
      title: 'Finish nyaacli Rust project.',
      isComplete: true,
      isEditing: false,
    },
    {
      id: 3,
      title: 'Finish kenshistate-u project.',
      isComplete: true,
      isEditing: false,
    },
  ]);

  const [newTodoId, setNewTodoId] = useState(todos.length + 1);

  function addTodo(todo) {
    setTodos([
      ...todos,
      {
        id: newTodoId,
        title: todo,
        isComplete: false,
      },
    ]);

    setNewTodoId((prevId) => prevId + 1);
  }

  function deleteTodo(id) {
    setTodos([...todos].filter((todo) => todo.id !== id));
  }

  function markTodoAsCompleted(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  function enableEditing(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isEditing = true;
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  function disableEditing(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isEditing = false;
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  function updateTodo(event, id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isEditing = false;

        const newTodoTitle = event.target.value;

        if (newTodoTitle.trim().length === 0) {
          return todo;
        }

        todo.title = newTodoTitle;
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  function remaining() {
    return todos.filter((todo) => !todo.isComplete).length;
  }

  function clearCompleted() {
    setTodos([...todos].filter((todo) => !todo.isComplete));
  }

  function completeAll() {
    const updatedTodos = todos.map((todo) => {
      todo.isComplete = true;
      return todo;
    });

    setTodos(updatedTodos);
  }

  function todosFiltered(filter) {
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.isComplete);
      case 'completed':
        return todos.filter((todo) => todo.isComplete);
      default:
        return todos;
    }
  }

  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <TodoForm addTodo={addTodo} />

        {todos.length > 0 ? (
          <TodoList
            todos={todos}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
            markTodoAsCompleted={markTodoAsCompleted}
            enableEditing={enableEditing}
            disableEditing={disableEditing}
            remaining={remaining}
            clearCompleted={clearCompleted}
            completeAll={completeAll}
            todosFiltered={todosFiltered}
          />
        ) : (
          <NoTodos />
        )}
      </div>
    </div>
  );
}

export default App;
