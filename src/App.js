import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction, RemoveTodoAction } from './actions/TodoActions';
import './App.css';

function App() {
  const [todo, setTodo] = useState();

  const dispatch = useDispatch();

  const Todo = useSelector(state => state.Todo);

  const { todos } = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  }

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));
  }


  return (
    <div className="App">
      <header className="App-header">

        <h2 className="todoheading">Todo List App in Redux</h2>

        <form onSubmit={handleSubmit}>
          <input
            autoFocus
            className="inputval"
            placeholder="Enter a Todo"
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className="submitbutton" type="submit">Go</button>
        </form>

        {/* TaskList */}
        <div>
          {
            todos && todos.map((t) => (
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
