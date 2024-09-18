import React, { useState } from 'react'

export default function Form() {

    const [name, setName] = useState("");
    const [contect, setContect] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [nameErr, setNameErr] = useState("");
    const [contectErr, setContectErr] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [addressErr, setAddressErr] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;
        if (!name) {
            valid = false;
            setNameErr("Name is required");
        }
        else {
            setNameErr("");
        }
        if (!contect) {
            valid = false;
            setContectErr("Contect is required");
        }
        else {
            setContectErr("");
        }
        if (!email) {
            valid = false;
            setEmailErr("Email is required");
        }
        else {
            setEmailErr("");
        }
        if (!address) {
            valid = false;
            setAddressErr("Address is required");
        }
        else {
            setAddressErr("");
        }
        if (valid) {
            alert(`Name: ${name}\nContect: ${contect}\nEmail: ${email}\nAddress: ${address}`);
        }
        else {
            alert("Please fill all the fields");
        }
    }
    return (
        <div className='div'>
            <form className='form1' onSubmit={(e) => handleSubmit(e)}>
                <h1>Buyer's Details</h1>
                <label>Enter Your Name :</label>
                <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} />
                <span>{nameErr}</span>
                <label>Enter Your Contect :</label>
                <input type="number" placeholder='Number' onChange={(e) => setContect(e.target.value)} />
                <span>{contectErr}</span>
                <label>Enter Your Email :</label>
                <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                <span>{emailErr}</span>
                <label>Enter Your Address :</label>
                <input type="text" placeholder='Streat, Road' onChange={(e) => setAddress(e.target.value)} />
                <span>{addressErr}</span>

                <select onClick={(e) => setCategory(e.target.value)}>
                    <option value="Clothes">Clothes</option>
                    <option value="Sports">Sports</option>
                    <option value="Vehicle">Vehicle</option>
                    <option value="Gadget">Gadget</option>
                    <option value="Homeware">Homeware</option>
                </select>
                {
                    category == "Clothes" && <input type="text" placeholder='Gender' />
                }
                {
                    category == "Clothes" && <input type="Number" placeholder='Age' />
                }
                {
                    category == "Clothes" && <input type="text" placeholder='Size' />
                }
                {
                    category == "Sports" && <input type="text" placeholder='Equipment Name' />
                }
                {
                    category == "Sports" && <input type="Number" placeholder='Price' />
                }
                {
                    category == "Sports" && <input type="text" placeholder='Size' />
                }
                {
                    category == "Vehicle" && <input type="text" placeholder='Vehicle Name' />
                }
                {
                    category == "Vehicle" && <input type="text" placeholder='Petrol, Diesel or power' />
                }
                {
                    category == "Vehicle" && <input type="text" placeholder='Seater' />
                }
                {
                    category == "Gadget" && <input type="text" placeholder='For what purpose' />
                }
                {
                    category == "Gadget" && <input type="text" placeholder='Price' />
                }
                {
                    category == "Gadget" && <input type="text" placeholder='Number of Gadget' />
                }
                {
                    category == "Homeware" && <input type="text" placeholder='Category' />
                }
                {
                    category == "Homeware" && <input type="text" placeholder='Size' />
                }
                {
                    category == "Homeware" && <input type="text" placeholder='Number of Product' />
                }

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
