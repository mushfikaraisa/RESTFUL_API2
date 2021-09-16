//dependencies
import React, { useState } from 'react'


//function
const FuncClick = (props) => {
    //hooks
    const [ message, setMessage ] = useState('click the button below vv')
    const [ newMessage, setNewMessage ] = useState('')

    function handleClick() {
        setMessage(newMessage)
    }

    return (
        <div>
            {message} <br/>
            <input type="text" onChange={(event) => setNewMessage(event.target.value)}/>
            <button onClick={handleClick}>click me!</button>
        </div>
    )

}


//export
module.exports = FuncClick