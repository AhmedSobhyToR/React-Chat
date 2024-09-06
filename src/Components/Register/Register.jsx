import React, { useContext, useState } from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth, db } from '../../lib/firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import Notification from '../Notification/Notification';
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate } from 'react-router-dom';
import {UserContext} from '../../context/UserContext'
const Register = () => {
    const navigate = useNavigate();
    const [avatar,setAvatar] = useState({
        file: null,
        url: ""
    });
    function handleAvatar(e){
        console.log(e.target.files[0]);
        if(e.target.files[0]){
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }

    }
   const {user,setUser} = useContext(UserContext)


    async function handleRegister(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const { username, email, password } = Object.fromEntries(formData);

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            await setDoc(doc(db, "users", res.user.uid), {
                username: username,
                email: email,
                id: res.user.uid,
                blocked: []
            });

            await setDoc(doc(db, "userchats", res.user.uid), {
                chats: []
            });

            setUser({
                uid: res.user.uid,
                email: email,
                username: username
            });
          
            toast.success(`Account created ${username}, You will be directed to the home page`);
            setTimeout(()=>{
                navigate('/');
            },1500)
       
          
        } catch (err) {
            console.log(err);
            toast.error("Register Failed: " + err.message);
        }
    }
    

    return (
        <div className='register'>
        <p className='register-header'>Register</p>


            <form onSubmit={handleRegister}>
            <div className='register-form'>
            <p>Create an Account</p>
            <input type="text" placeholder='Username' name='username'/>
            <input type="email" placeholder='Email' name='email'/>

            <input type="password" placeholder='Password' name='password' />
            <div className='upload-img'>
     
            <label htmlFor="file"> 
            <img src={avatar.url || "../../../assests/upload.svg"} alt="" 
            /> Upload an Image</label>
            <input type="file" id="file" style={{display:"none"}}  onChange={handleAvatar}/>

            </div>

            <input type="submit" value="Sign Up" onClick={()=>{}}/>
            <div className='register-link'>
               
                <p>Already have an account?  <Link to="/login"> <span>Login</span></Link> </p>
                </div>
                </div>
            </form>


     

    </div>
    );
}

export default Register;
