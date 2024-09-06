import React from 'react';
import './Containerprofile.css'
import Accordionitem from '../Accordionitem/Accordionitem';
import { auth } from '../../lib/firebase';
import { useNavigate } from 'react-router-dom';

const Containerprofile = () => {
    const navigate = useNavigate()
    function handleLogOut(){
        navigate('/login');
        auth.signOut()
    }
    return (
        <div className="container-profile">
            <div className='container-profile-header'>
                <img src="../../assests/favicon.png" alt="" />

                <p>Maria Nelson</p>
                <p>Grateful for every sunrise and sunset</p>
            </div>
            <div className='container-profile-body'>
                <Accordionitem></Accordionitem>
            </div>
            <div className='container-profile-footer'>
                <input type="button" value="Block User" />
                <input type="button" value="Logout" onClick={()=>{handleLogOut()}}/>

            </div>
        </div>
    );
}

export default Containerprofile;
