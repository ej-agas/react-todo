import React, { useState } from 'react';

export default function TodoForm(props) {
  const [newTodo, setNewTodo] = useState('');

  function handleInput(event) {
    setNewTodo(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (newTodo.trim().length === 0) {
      return;
    }

    props.addTodo(newTodo);

    setNewTodo('');
  }

  return (
    <form action="#" onSubmit={handleSubmit}>
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
