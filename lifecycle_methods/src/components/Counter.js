import { React,useEffect, useState } from "react";
const Counter=()=>{
    const [count,setCount]=useState(0);

    useEffect(()=>{
        // Code to run when component is mounted or updated
        // This is equivalent to componentDidMount and componentDidUpdate
        console.log("component Mounting using useEffect")
        return()=>{
            console.log("component unmounting using useEffect")
            // Code to run before component is unmounted
            // This is equivalent to componentWillUnmount
        }
    },[count]); 
    // Dependency array with variables to watch for changes

    return(
        <div>
            count :{count}
            <button onClick={()=>setCount(count+1)}>Increase</button>
        </div>
    )
}
export default Counter;