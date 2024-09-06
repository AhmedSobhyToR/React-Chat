import React, { useContext, useState } from 'react';
import './Containerlist.css'
import Chat from '../Chat/Chat';
import { UserContext } from '../../context/UserContext';
import Notification from '../Notification/Notification';
import { toast } from 'react-toastify';
import { Toast } from 'react-bootstrap';
const Containerlist = () => {
    const {user} = useContext(UserContext)
    const [addMode,setAddMode] = useState(false);
    
    toast.success(`Logged in as ${user.username}`);
    return (
        <div className="container-list">
            <div className='container-list-header'>
                <div className='container-list-header-left'>
                <img src="../../assests/favicon.png" alt="" />
                <p>{user.username}</p>
                </div>

            <div className='container-list-header-right'>
                <img src="../../assests/more.png" alt="" />
                <img src="../../assests/video.png" alt="" />
                <img src="../../assests/edit.png" alt="" />
            </div>
            </div>


            <div className='container-list-search'>
                <div className='container-list-search-left'>
                    <img src="../../assests/search.png" alt="" />
                    <input type="text"  placeholder="Search" />
                </div>
                <div className='container-list-search-right' onClick={()=>setAddMode(prev=> !prev)}>
                    {
                        !addMode? <> <img src="../../assests/plus.png" alt=""  /></>
                        :<> <img src="../../assests/minus.png" alt=""  /></>
                    }
               
                </div>

            </div>



            <div className='container-list-body'>
                <Chat></Chat>
                <Chat></Chat>
                <Chat></Chat>
                <Chat></Chat>
                <Chat></Chat>
                <Chat></Chat>
                <Chat></Chat>

                <Chat></Chat>

            </div>
        
        </div>

                 
    );
}

export default Containerlist;
