import React, { useState } from 'react';
import api from '../../services/api';
import './index.css';

function RegisterPage(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSumbmit(event) {
        event.preventDefault();
        if (email === '' || password === '' || name === '') return;
        try {
            const response = await api.post("/api/register", { email, password });
            const { token } = response.data;
            localStorage.setItem('token', token);
            props.history.push('/dashboard');
        } catch(err) {
            console.error(err);
        }

    }


    return (
        <div className="container">
            <form onSubmit={handleSumbmit} className="form">
                <h2>Register</h2>
                <input placeholder="Digite seu nome" type="text" onChange={e => setName(e.target.value)} value={name} />
                <input placeholder="Digite seu email" type="email" onChange={e => setEmail(e.target.value)} value={email}/>
                <input placeholder="Digite sua senha" type="password" onChange={e => setPassword(e.target.value)} value={password}/>
                <div className="actions">
                    <button onClick={() => props.history.push('/') }>Login</button>
                    <button>Confirmar</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterPage;