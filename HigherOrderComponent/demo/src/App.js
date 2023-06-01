import logo from './logo.svg';
import './App.css';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';
import WithFunction from './Components/WithFunction';

const UpdatedClickCounter=WithFunction(ClickCounter);
const UpdatedHoverCounter=WithFunction(HoverCounter);
function App() {
  return (
    <div className="App">
      <UpdatedClickCounter />
      <UpdatedHoverCounter />
    </div>
  );
}

export default App;
