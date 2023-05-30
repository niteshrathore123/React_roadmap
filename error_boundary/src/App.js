
import Home from "./Components/Home";
import { ErrorBoundary } from "react-error-boundary";

const ErrorFallback=({ error, resetErrorBoundary }) =>{
  return (
    <div>
      <h2>Something went wrong.</h2>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={()=>window.location.reload()}>
        <Home />
      </ErrorBoundary>
        
    </div>
  );
}

export default App;
