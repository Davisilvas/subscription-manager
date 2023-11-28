import {useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import  './Auth.css'

const Register = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');
    const [age, setAge] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    //console.log(name, password,cpf, email,birthday, age);

    return (
        <div id="register">
            
            <h2>Subscription Manager</h2>
            <p className="subtitle">Inscreva-se para descomplicar suas assinaturas!</p>

            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Nome Completo.'
                    onChange={(e) => setName(e.target.value)}
                    value={name || ''}
                />
                <input 
                    type='email'
                    placeholder='Insira seu E-mail.'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email || ''}
                />
                <input 
                    type='text'
                    placeholder='Informe o seu cpf.'
                    onChange={(e) => setCpf(e.target.value)}
                    value={cpf || ''}
                />
                <input 
                    type='date'
                    placeholder='Informe o seu aniversário.'
                    onChange={(e) => setBirthday(e.target.value)}
                    value={birthday || ''}
                />
                <input 
                    type='number'
                    placeholder='Informe a sua idade.'
                    onChange={(e) => setAge(e.target.value)}
                    value={age || ''}
                />
                <input 
                    type='password'
                    placeholder='Crie sua senha.'
                    onChange={(e) => setPassword(e.target.value)}
                    min={0}
                />
                <input
                    type="submit" 
                    value="Cadastrar" 
                />
            </form>
            <p>
                Já possui cadastro? <Link to='/login'> Faça o Login aqui </Link>
            </p>
        </div>
    )
}

export default Register