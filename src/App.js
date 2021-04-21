import Daco from './Daco1.png'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction, RemoveTodoAction } from './actions/TodoActions';
import { ApiCalling } from './actions/ApiActions';
import './App.css';

function App() {
  const [todo, setTodo] = useState();

  const dispatch = useDispatch();

  const Todo = useSelector(state => state.Todo);
  const Api = useSelector(state => state.Api);

  const success = Api;
  const { todos } = Todo;

  if (success.success === 201) {
    var msg = "successfully created";
  }
  if (success.success === 404) {
    var msg = "error 404"
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));

  }

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));
  }

  const handleApi = () => {
    dispatch(ApiCalling(todo));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={Daco} alt="" width="200px" className="Daco" />
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

        <h3>{msg}</h3>

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

      </header>
    </div>
  );
}

export default App;
