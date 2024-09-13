import React, { useRef } from 'react'

export default function UnControlled() {
    const nameInputRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        console.log("Submitted:", enteredName);


    }
    return (
        <div>
            <h1>Uncontrolled</h1>
            <input type="text" ref={nameInputRef} placeholder='Enter Your Name' />
            <button onClick={handleSubmit}>Click</button>
        </div>
    )
}
