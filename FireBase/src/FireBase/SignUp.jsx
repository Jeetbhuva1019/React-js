import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebaseConfig';

export default function SignUp() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const handleSignup = async () => {
        let user = await createUserWithEmailAndPassword(auth, email, password);
        console.log(user);
        if (user) {
            navigate("/dashbord")
        }
    }


    return (
        <div className='signup-container'>
            <h1>Sign Up</h1>

            <input type="text" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignup}>Sign Up</button>

            <Link to={"/SignIn"}>Sign In</Link>
        </div>
    )
}
