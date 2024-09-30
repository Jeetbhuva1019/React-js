import React, { useEffect, useState } from 'react';

export default function Project() {

    const [task, SetTask] = useState("");

    const [record, setRecord] = useState([]);
    const [editindex, setEditIndex] = useState(null);

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("Student")) || [];
        setRecord(data);
    }, []);

    const handleAdd = () => {
        let user = { id: new Date().getTime(), task, update: "Pending" }; 
        let oldRecord = JSON.parse(localStorage.getItem("Student")) || [];

        if (editindex !== null) {
            let updatedRecord = record.map((item) =>
                item.id === editindex ? { ...item, task } : item
            );
            setRecord(updatedRecord);
            localStorage.setItem("Student", JSON.stringify(updatedRecord));
            setEditIndex(null);
        } else {
            oldRecord.push(user);
            setRecord(oldRecord);
            localStorage.setItem("Student", JSON.stringify(oldRecord));
        }

        SetTask("");
    };

    const handleEdit = (id) => {
        let singledata = record.find((item) => item.id === id);
        SetTask(singledata.task);
        setEditIndex(id);
    };

    const handleDelete = (id) => {
        let deleteData = record.filter((item) => item.id !== id);
        setRecord(deleteData);
        localStorage.setItem("Student", JSON.stringify(deleteData));
    };

    const handleComplete = (id) => {
        let updatedRecord = record.map((item) =>
            item.id === id ? { ...item, update: "Completed" } : item
        );
        setRecord(updatedRecord);
        localStorage.setItem("Student", JSON.stringify(updatedRecord));
    };

    return (
        <div>
            <h1>Project</h1>

            <input type="text" value={task} placeholder='Enter Task' onChange={(e) => SetTask(e.target.value)}
            />

            <button onClick={handleAdd}>
                {editindex ? "Update" : "Add"}
            </button>

            <table>
                <thead>
                    <tr>
                        <td>Task</td>
                        <td>Status</td>
                        <td colSpan={3}>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        record.length > 0 ?
                            record.map((e, i) => {
                                return (
                                    <tr key={e.id}>
                                        <td>{e.task}</td>
                                        <td>{e.update}</td>
                                        <td><button onClick={() => handleEdit(e.id)}>Edit</button></td>
                                        <td><button onClick={() => handleDelete(e.id)}>Delete</button></td>
                                        <td><button onClick={() => handleComplete(e.id)}>Complete</button></td>
                                    </tr>
                                );
                            })
                            :
                            ""
                    }
                </tbody>
            </table>
        </div>
    );
}
