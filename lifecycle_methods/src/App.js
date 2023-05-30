import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [show,setShow]=useState(false);
  return (
    <div className="App">
     <h1>Hello React</h1>

     <button onClick={()=>setShow(true)} disabled={show}>Show Count</button>
     <button onClick={()=>setShow(false)} disabled={!show}>Hide Count</button>
     {
      show ? <Counter /> : null
     }
     
    </div>
  );
}

export default App;
