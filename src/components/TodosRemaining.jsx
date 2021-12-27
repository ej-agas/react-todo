import React, { useContext, useMemo } from 'react';
import { TodosContext } from '../contexts/TodosContext';

function TodosRemaining() {
  const { todos } = useContext(TodosContext);

  function remainingCalculation() {
    return todos.filter((todo) => !todo.isComplete).length;
  }

  const remaining = useMemo(remainingCalculation, [todos]);

  return <span>{remaining} item(s) remaining</span>;
}

export default TodosRemaining;
