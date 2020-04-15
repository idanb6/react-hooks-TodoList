import React, {useState} from 'react';

function TodoForm({addTodo}){

  const [value,setValue] = useState('');

  const handlerS = e=> {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handlerS}>
  <input type="text" className="form-control" value={value} onChange={e => setValue(e.target.value)}  placeholder="Add task" />
  </form>
  )
  
}


export default TodoForm;
