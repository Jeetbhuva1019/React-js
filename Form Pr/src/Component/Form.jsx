import React, { useState, useRef, useEffect } from 'react';

const MyForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);

    useEffect(() => {
        nameRef.current.focus();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        ref={nameRef}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        ref={emailRef}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        ref={messageRef}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="form-control"
                    />
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default MyForm;
