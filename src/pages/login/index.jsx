import React, { useState } from 'react';
import './index.css';
import api from '../../services/api';

function LoginPage(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSumbmit(event) {
        event.preventDefault();
        if (email === '' || password === '') return;
        try {
            const response = await api.post("/api/login", { email, password});
            const {token} = response.data;
            
            if (localStorage.getItem("token")) {
                localStorage.removeItem("token");
            }

            localStorage.setItem("token", token);
            props.history.push('/dashboard');
        } catch(err) {
            console.error(err)
        }
    }


    return (
        <div className="container">
                
            <form onSubmit={handleSumbmit} className="form">
                <h2>Login</h2>
                <input placeholder="Digite seu email" type="email" onChange={e => setEmail(e.target.value)} value={email}/>
                <input placeholder="Digite sua senha" type="password" onChange={e => setPassword(e.target.value)} value={password}/>
                <div className="actions">
                    <button onClick={() => props.history.push('/register')}>Registrar</button>
                    <button type="submit">Confirmar</button>
                </div>
            </form>
        </div>
    )
}

export default LoginPage;