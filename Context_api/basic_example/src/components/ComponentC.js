import React, { useContext } from 'react'
import { nameContext,ageContext } from '../App';


const ComponentC = () => {
    const userName=useContext(nameContext);
    const userAge=useContext(ageContext);
    
  return (
    <div>
        <h3>Name- {userName}</h3>
        <h4>Age - {userAge}</h4>
    </div>
  )
}

export default ComponentC