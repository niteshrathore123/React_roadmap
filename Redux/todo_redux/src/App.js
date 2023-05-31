import TodoList from "./Components/todoList";
import { store } from "./Redux/Store/store";
import { Provider } from "react-redux";
function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <TodoList />
    </div>
  );
}

export default App;
