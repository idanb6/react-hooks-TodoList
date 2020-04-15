import React, {useState} from 'react';
import Todo from './component/todo';
import TodoForm from './component/todoForm';

import './App.css';



function App() {
  //data
  const [todos, setTodos] = useState([
    {
      text:'test 1',
      isCom:false
    },
    {
      text:'test 2',
      isCom:false
    },
    {
      text:'test 3',
      isCom:false
    },    
    {
      text:'test 4',
      isCom:false
    }
  ]);
    const addTodo = text => {

      const newTodos = [...todos, {text,isCom:false }];

      setTodos(newTodos);


    };
  
    const completeTodo = index => {
      const newTodos = [...todos];
      newTodos[index].isCom = true;
      setTodos(newTodos);
    };

    const removeTodo = index => {
      const newTodos = [...todos];
      newTodos.splice(index,1);
      setTodos(newTodos);

    }

  return (
    <div className="App">
          <div className="container-sm">
            <h1>Todo list</h1>
            <ul className="list-group ">
            {todos.map((todo, index) => (
              <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo} />
           
            ))} 
              <TodoForm addTodo={addTodo} />
            </ul>
           </div>
    </div>
  );
}

export default App;
