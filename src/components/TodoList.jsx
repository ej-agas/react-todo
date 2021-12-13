import React, { useState } from 'react';
import TodosRemaining from './TodosRemaining';
import TodoClearCompleted from './TodoClearCompleted';
import CompleteAllTodos from './CompleteAllTodos';
import TodoFilters from './TodoFilters';

function TodoList({
  todos,
  updateTodo,
  deleteTodo,
  markTodoAsCompleted,
  enableEditing,
  disableEditing,
  remaining,
  clearCompleted,
  completeAll,
  todosFiltered,
}) {
  const [filter, setFilter] = useState('');

  return (
    <>
      <ul className="todo-list">
        {todosFiltered(filter).map((todo) => (
          <li key={todo.id} className="todo-item-container">
            <div className="todo-item">
              <input
                type="checkbox"
                onChange={() => markTodoAsCompleted(todo.id)}
                checked={todo.isComplete ? true : false}
              />
              {!todo.isEditing && (
                <span
                  onDoubleClick={() => enableEditing(todo.id)}
                  className={`todo-item-label ${
                    todo.isComplete ? 'line-through' : ''
                  }`}
                >
                  {todo.title}
                </span>
              )}
              {todo.isEditing && (
                <input
                  type="text"
                  onBlur={(event) => updateTodo(event, todo.id)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      updateTodo(event, todo.id);
                    }

                    if (event.key === 'Escape') {
                      disableEditing(todo.id);
                    }
                  }}
                  className="todo-item-input"
                  defaultValue={todo.title}
                  autoFocus
                />
              )}
            </div>
            <button onClick={() => deleteTodo(todo.id)} className="x-button">
              <svg
                className="x-button-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>

      <div className="check-all-container">
        <CompleteAllTodos completeAll={completeAll} />

        <TodosRemaining remaining={remaining} />
      </div>

      <div className="other-buttons-container">
        <TodoFilters setFilter={setFilter} filter={filter} />
        <div>
          <TodoClearCompleted clearCompleted={clearCompleted} />
        </div>
      </div>
    </>
  );
}

export default TodoList;
