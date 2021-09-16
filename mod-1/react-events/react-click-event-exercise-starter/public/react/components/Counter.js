//dependencies
import React, { useState } from 'react'



//functional component
const Counter = () => {
    //hooks
    
    const [ count , setCount] = useState(0)

    function handleClick() {
        //conditional statement
        setCount(count + 1)
        
        console.log('THIS IS THE COUNTER',count)
    }

    function handleReset() {
        setCount(0)
    }

    return (
       <div>
           <p>Click Counter: </p>{count}
          <button onClick={handleClick}>Counter Button</button>
          <button onClick={handleReset}>Reset Button</button>
       </div>
    )

    
}




//export
module.exports = Counter