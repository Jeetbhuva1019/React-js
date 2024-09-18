import React, { useState } from 'react'

export default function Form1() {

    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [number, setNumber] = useState("");
    const [nameErr, setNameErr] = useState("");
    const [companyErr, setCompanyErr] = useState("");
    const [numberErr, setNumberErr] = useState("");

    const [hide, setHide] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        let valid = true;

        if (!name) {
            setNameErr("Name is required");
            valid = false;
        } else {
            setNameErr("");
        }

        if (!company) {
            setCompanyErr("Company Name is required");
            valid = false;
        } else {
            setCompanyErr("");
        }

        if (!number) {
            setNumberErr("Number is required");
            valid = false;
        } else {
            setNumberErr("");
        }

        if (valid) {
            alert(`Name: ${name}\nCompany: ${company}\nNumber: ${number}`);
        }
        else {
            alert("Please fill all the fields");
        }
        if (valid) {
            setHide('none')
            console.log(name, company, number)
        }
    }

    return (
        <div className='div' style={{ display: hide }}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h1>Seller's Details</h1>

                <label>Enter Your Seller's Name :</label>
                <input type="text" placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
                <span>{nameErr}</span>

                <label>Enter Your Seller's Company Name :</label>
                <input type="text" placeholder='Enter Company Name' onChange={(e) => setCompany(e.target.value)} />
                <span>{companyErr}</span>

                <label>Enter Your Seller's Number :</label>
                <input type="number" placeholder='Enter Number' onChange={(e) => setNumber(e.target.value)} />
                <span>{numberErr}</span>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
