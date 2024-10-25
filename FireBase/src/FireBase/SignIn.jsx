import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebaseConfig';

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSignIn = async () => {
        let user = await signInWithEmailAndPassword(auth, email, password);
        console.log(user);
        if (user) {
            navigate("/dashbord");
        }

    }
    return (
        <div className='signup-container'>
            <h1>Sign In</h1>

            <input type="text" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />

            <button onClick={handleSignIn}>Sign In</button>
        </div>
    )
}
