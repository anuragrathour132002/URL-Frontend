import React, { useState } from 'react';
import { registerUserEmail } from '../../Actions/User.actions';
import { useDispatch, useSelector } from 'react-redux';
import './Login-Register.css'; // Import the CSS file for styling
import Alert from '../Alert/Alert';

const Signup = () => {
    const { error, message } = useSelector(state => state.user);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !email || !password) {
            alert('Please fill all the fields');
            return;
        }
        dispatch(registerUserEmail({ username, email, password }));
    };

    return (
        <div className='login-register'>
            {error ? <Alert text={error} type={"error"} /> :
                message ? <Alert text={message} type={"success"} /> : null}
            <h2>Register User</h2>
            <div className="login-register-form">
                <form action="" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" name="username" id="name" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="Password" />
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
