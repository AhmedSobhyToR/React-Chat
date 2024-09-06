import React, { useContext, useEffect } from 'react';
import './Container.css';
import Containerchat from '../ContainerChat/Containerchat';
import Containerlist from '../Containerlist/Containerlist';
import Containerprofile from '../Containerprofile/Containerprofile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import ParentContainer from '../ParentContainer/ParentContainer';
import { UserContext } from '../../context/UserContext';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import Notification from '../Notification/Notification';

const Container = () => {
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        const unSub = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                setUser(null);
            }
        });

        return () => {
            unSub();
        };
    }, [setUser]);

    return (
        <div className='container'>
            <BrowserRouter>
                <Routes>
                    {user ? (
                        <>
                            <Route path='/' element={<ParentContainer />} />
                            <Route path='*' element={<Navigate to="/" />} /> 
                        </>
                        
                    ) : (
                      
                        <>
                            <Route path='/login' element={<Login />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='*' element={<Navigate to="/login" />} /> {/* Redirect to login if not authenticated */}
                        </>
                    )}
                </Routes>
            </BrowserRouter>
   


        </div>
    );
};

export default Container;
