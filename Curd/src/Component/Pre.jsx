import React, { useEffect, useState } from 'react'

export default function Pre() {

    const [name, setName] = useState("");
    const [subject, setSub] = useState("");
    const [city, setCity] = useState("");

    const [record, setRecord] = useState(null);

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("Student")) || [];
        setRecord(data)
    }, [record])

    const handleAdd = () => {
        let user = { id: Date.now(), name, subject, city }
        record.push(user);
        localStorage.setItem("Student", JSON.stringify(record));

    }
    // localStorage.clear(record);


    return (
        <div>
            <input type="text" placeholder='Name' onClick={(e) => setName(e.target.value)} />
            <input type="text" placeholder='Subject' onClick={(e) => setSub(e.target.value)} />
            <input type="text" placeholder='City' onClick={(e) => setCity(e.target.value)} />
            <button onClick={handleAdd}>Add</button>

            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Student</td>
                        <td>City</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        record ?
                            record.map((e, i) => {
                                return <tr key={i}>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.subject}</td>
                                    <td>{e.city}</td>
                                </tr>
                            })
                            :
                            ""
                    }
                </tbody>
            </table>
        </div>
    )
}
