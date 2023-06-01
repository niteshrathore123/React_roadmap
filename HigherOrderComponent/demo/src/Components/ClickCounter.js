import React, { useState } from 'react'
import WithFunction from './WithFunction';


const ClickCounter = (props) => {
    const {count,incrementCount}=props;

    return (
        <div>
            <button onClick={incrementCount}>
                Click Counter Clicked - {count} 
            </button>
        </div>
    )
}

export default ClickCounter;