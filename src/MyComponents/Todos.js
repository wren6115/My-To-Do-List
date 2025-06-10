import React from 'react';
import { TodoItem } from './TodoItem';

export const Todos = ({ todos, onDelete }) => {
  return (
    <div>
      <h2>Todos List</h2>
      {todos.length === 0 ? "No Todos to display" :
        todos.map(todo => (
          <TodoItem todo={todo} key={todo.sno} onDelete={onDelete} />
        ))
      }
    </div>
  );
};