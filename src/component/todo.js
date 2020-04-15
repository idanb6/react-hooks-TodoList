import React from 'react';

function Todo({todo, index , completeTodo ,removeTodo}) {

  
  return (
    <li className="list-group-item text-left" style={{textDecoration: todo.isCom ? 'line-through' : ''}}>
      <span className="text-left">{todo.text}</span>
      <button type="button" className="btn btn-outline-danger float-right" onClick={() => removeTodo(index)} >X</button>
      <button type="button" className="btn btn-outline-success float-right" onClick={() => completeTodo(index)} >Done</button>
    </li>
  )
}


export default Todo;
