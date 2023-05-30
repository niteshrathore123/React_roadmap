const FallBackError=({error,resetErrorBoundary})=>{
    return(
        <div>
            <h2>Something went Wrong...</h2>
            <p>{error}</p>
            <button onClick={resetErrorBoundary}>Try Again</button>
        </div>
    )
}
export default FallBackError;