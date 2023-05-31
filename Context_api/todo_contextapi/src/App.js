
import TodoList from './Components/TodoList';
import TodoProvider from './Context/Todo';

function App() {
  return (
    <div className="App">
      <h2>Hello React</h2>
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
