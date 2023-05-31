import { createContext, useState } from "react";
import ComponentA from "./components/ComponentA";


const nameContext=createContext();
const ageContext=createContext();
function App() {
  const [name,setName]=useState("Nitesh");
  const [age,setAge]=useState(21);
  


  return (
    <div className="App">
      <h1>Context Api in React</h1>
      <nameContext.Provider value={name}>
        <ageContext.Provider value={age}>
          <ComponentA />
        </ageContext.Provider>
      </nameContext.Provider>
    </div>
  );
}

export default App;
export {nameContext,ageContext};