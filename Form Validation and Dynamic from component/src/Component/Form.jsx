import React, { useState } from 'react'

export default function Form() {
    const [name, setName] = useState("");
    const [subject, setSub] = useState("");
    const [email, setEmail] = useState("");

    const [category, setCategory] = useState("");

    const [nameErr, setNameErr] = useState("");
    const [subjectErr, setSubErr] = useState("");
    const [emailErr, setEmailErr] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            console.log("Name required");
            setNameErr("Name required");
        }
        else {
            setNameErr("");
        }
        if (!subject) {
            console.log("Subject required");
            setSubErr("Subject required");
        } else {
            setSubErr("");
        }
        if (!email) {
            console.log("Email required");
            setEmailErr("Email required");
        }
        else if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailErr("Email required")
        }
        else {
            setEmailErr("");
        }

    }


    return (
        <div className='div'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h1>Form Validation</h1>
                <input type="text" placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} />
                <span>{nameErr}</span>
                <input type="subject" placeholder='Enter Your Name' onChange={(e) => setSub(e.target.value)} />
                <span>{subjectErr}</span>
                <input type="email" placeholder='Enter Your Name' onChange={(e) => setEmail(e.target.value)} />
                <span>{emailErr}</span>

                <select onChange={(e) => setCategory(e.target.value)}>
                    <option value="cetegory">cetegory</option>
                    <option value="Car">Car</option>
                    <option value="Bike">Bike</option>
                </select>
                {
                    category == "Car" && <input type="text" placeholder='Enter Speed' />
                }
                {
                    category == "Bike" && <input type="text" placeholder='Enter Milage' />
                }
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
