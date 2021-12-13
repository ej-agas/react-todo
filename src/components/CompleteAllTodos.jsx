import React from 'react';

function CompleteAllTodos({ completeAll }) {
  return (
    <div>
      <div onClick={completeAll} className="button">
        Check All
      </div>
    </div>
  );
}

export default CompleteAllTodos;
