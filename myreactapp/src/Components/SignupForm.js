// src/SignupForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignupForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/signup', { email, password });
            navigate('/login'); // Redirect to login after successful signup
        } catch (error) {
            console.error('Signup failed:', error.response.data.error);
        }
    };

    return (
        <div className="signup-container">
            <h2 className="signup-title">Create a New Account</h2>
            <form className="signup-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" className="signup-button">Sign Up</button>
            </form>
        </div>
    );
}

export default SignupForm;
