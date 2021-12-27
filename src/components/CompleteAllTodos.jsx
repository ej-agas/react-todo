import React, { useContext } from 'react';
import { TodosContext } from '../contexts/TodosContext';

function CompleteAllTodos() {
  const { todos, setTodos } = useContext(TodosContext);

  function completeAll() {
    const updatedTodos = todos.map((todo) => {
      todo.isComplete = true;
      return todo;
    });

    setTodos(updatedTodos);
  }

  return (
    <div>
      <div onClick={completeAll} className="button">
        Check All
      </div>
    </div>
  );
}

export default CompleteAllTodos;
