import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h2 className="todoheading">Todo App Redux</h2>

        <form>
          <input
            autoFocus
            className="inputval"
            placeholder="Enter a Todo"
          />
          <button className="submitbutton" type="submit">Go</button>
        </form>

        {/* TaskList */}
        <div>

          <span className="todoname">Nothing yet</span>
          <button
            className="deletebutton"
          >x</button>
        </div>

      </header>
    </div >
  );
}

export default App;
