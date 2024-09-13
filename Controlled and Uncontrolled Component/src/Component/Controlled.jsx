import React, { useState } from 'react'

export default function Controlled() {
    const [name, setName] = useState("");

    // const handleChange = (event) => {
    //     setName(event.target.value);

    // }

    const handleSubmit = () => {
        console.log("Submited :", name);

    }
    return (
        <div>
            <h1>Controlled</h1>

            <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder='Enter Your Name' />
            <button onClick={handleSubmit}>Click</button>
        </div>
    )
}
