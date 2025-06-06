
import React, { useState } from 'react';
import { useTodoContext } from './TodoContext';

const TodoApp: React.FC = () => {
  const [text, setText] = useState('');
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodoContext();

  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={() => { addTodo(text); setText(''); }}>Add</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            <button onClick={() => toggleTodo(todo.id)}>✔</button>
            <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;