import React, { useContext, useState } from 'react';
import { TodosContext } from '../contexts/TodosContext';

export default function TodoForm() {
  const { todos, setTodos, newTodoId, setNewTodoId } = useContext(TodosContext);
  const [newTodo, setNewTodo] = useState('');

  function handleInput(event) {
    setNewTodo(event.target.value);
  }

  function addTodo(event) {
    event.preventDefault();

    if (newTodo.trim().length === 0) {
      return;
    }

    setTodos([
      ...todos,
      {
        id: newTodoId,
        title: newTodo,
        isComplete: false,
      },
    ]);

    setNewTodoId((prevId) => prevId + 1);

    setNewTodo('');
  }

  return (
    <form action="#" onSubmit={addTodo}>
      <input
        type="text"
        value={newTodo}
        onChange={handleInput}
        className="todo-input"
        placeholder="What do you need to do?"
      />
    </form>
  );
}
