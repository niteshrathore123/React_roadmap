import React from 'react'
import WithFunction from './WithFunction'


const HoverCounter = (props) => {
  const {count,incrementCount}=props;
  return (
    <div>
        <p onMouseOver={incrementCount}>Hover Counter Count - {count}</p>
    </div>
  )
}

export default HoverCounter;