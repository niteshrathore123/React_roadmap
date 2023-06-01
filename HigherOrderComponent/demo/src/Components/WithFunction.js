import React, { useState } from 'react'

const WithFunction = (OriginalComponent) => {
    

    const NewComponent=()=>{
        const [count,setCount]=useState(0);
        const incrementCount=()=>{
            setCount(count+1);
        }
        return(
            <OriginalComponent count={count} incrementCount={incrementCount}/>
        )
    }

  return NewComponent
}

export default WithFunction;