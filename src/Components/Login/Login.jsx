import React, { useContext } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import Notification from "../Notification/Notification"
import { toast } from 'react-toastify';
import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../../lib/firebase'
import {UserContext} from '../../context/UserContext'
import { useNavigate } from 'react-router-dom';
const Login = () => {

    
        const { user, setUser } =  useContext(UserContext);
        const navigate = useNavigate();
        async function handleLogin(e) {
            e.preventDefault();
            const formData = new FormData(e.target);
            const { email, password } = Object.fromEntries(formData);
    
            try {
                const res = await signInWithEmailAndPassword(auth, email, password);
                setUser({
                    uid: res.user.uid,
                    email: res.user.email,
                    username: res.user.displayName
                });

                // toast.success(`Logged in as ${user.username}`);
                setTimeout(()=>{
                    navigate('/');
                },1500)
          
            } catch (err) {
                console.log(err);
                toast.error("Login Failed: " + err.message);
            }
        }


    return (
        <div className='login'>
            <p className='login-header'>Login</p>

            <form className='login-form' onSubmit={handleLogin}>
                <p>Welcome Back</p>
                <input type="email" placeholder='Email' name='email' />
                <input type="password" placeholder='Password' name='password'/>
                
                <input type="submit" value="Login" />
                <div className='login-link'>
                    
                <p>Don't have an account? <Link to="/register"><span>Register</span></Link> </p>
                </div>
               
            </form>


        </div>
    );
}

export default Login;
