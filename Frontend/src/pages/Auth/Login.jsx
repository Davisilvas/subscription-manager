import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    console.log(email, password)

    const handleSubmit = (e) =>  {
        e.preventDefault()
    }

    return (
        <div id="login">
            <h2>Subscription Manager</h2>
            <p className='subtitle'>Faça o seu login aqui!</p>

            <form onSubmit={handleSubmit}>
                <input 
                    type="email"
                    placeholder='Insira seu E-mail'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type='password'
                    placeholder='Insira a sua senha'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="submit" 
                    value="Entrar" 
                />
            </form>
            <p>
                Não possui cadastro? <Link to='/register'>Crie sua conta aqui!</Link>
            </p>
        </div>
    )
}

export default Login