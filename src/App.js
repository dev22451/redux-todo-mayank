import Daco from './Daco1.png'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction, RemoveTodoAction } from './actions/TodoActions';
import { ApiCalling } from './actions/ApiActions';
import './App.css';
import axios from 'axios';
import JsonPlaceholder from './api/JsonPlaceholder';


function App() {
  const [todo, setTodo] = useState();
  const [todoarr, setTodoarr] = useState([]);

  const dispatch = useDispatch();

  const Todo = useSelector(state => state.Todo);
  const Api = useSelector(state => state.Api);


  const { todos } = Todo;




  useEffect(() => {
    setTimeout(async () => {
      let result = await JsonPlaceholder.get("/todos?userId=1");
      setTodoarr({ tasks: result.data });
    }, 1000);
  }, []);

  console.log(todoarr.tasks);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));

  }

  const handleApi = () => {
    dispatch(ApiCalling(todoarr.tasks))
  }

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));
  }

  return (
    <div className="App">
      <header className="App-header">

        <h2 className="todoheading">Todo App <span className='reduxhead'>Redux</span></h2>
        <form onSubmit={handleSubmit}>
          <input
            autoFocus
            className="inputval"
            placeholder="Enter a Todo"
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className="submitbutton" type="submit">Go</button>
        </form>
        <button onClick={handleApi}>Api</button>
        {/* TaskList */}


        <div>
          {

            todos && todos.map((t, index) => (
              <div key={t.id} className="todolist">

                <span className="todoname">{t.todo}</span>

                <button
                  className="deletebutton"
                  onClick={() => removeHandler(t)}>x</button>
              </div>
            ))
          }
        </div>

        <div>
          {
            todoarr.tasks && todoarr.tasks.map((s, index) => (
              <div key={s.id} className="todolist">

                <input className="todocheckbox" type="checkbox" checked={s.completed} />

                <span className="todoname">{s.title}</span>

              </div>
            ))
          }
        </div>



      </header>
    </div>
  );
}

export default App;
