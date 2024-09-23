import React from 'react'

export default function LocalStorage() {

    localStorage.setItem("Name", "Jeet");
    localStorage.setItem("Subject", "React");
    let name = localStorage.getItem("Name");
    let subject = localStorage.getItem("Subject");
    console.log(name, subject);

    let obj = {
        name: "Jeet", subject: "React", mark: "77"
    }
    localStorage.setItem("Obj", JSON.stringify(obj));
    console.log(obj);

    let objdata = JSON.parse(localStorage.getItem("Obj"));
    console.log(objdata);

    localStorage.removeItem("Subject");




    return (
        <div>

        </div>
    )
}
