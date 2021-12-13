import React from 'react';

function TodosRemaining({ remaining }) {
  return <span>{remaining()} item(s) remaining</span>;
}

export default TodosRemaining;
