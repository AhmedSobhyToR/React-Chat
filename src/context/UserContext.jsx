import React, { createContext, useState, useContext, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../lib/firebase'; 
import { doc, getDoc } from 'firebase/firestore';

export const UserContext = createContext(null);

 const UserProvider = (props) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
             
                const userDoc = await getDoc(doc(db, "users", user.uid));
                if (userDoc.exists()) {
                    const userData = userDoc.data();
                    console.log(userData.blocked);
                    setUser({
                        uid: user.uid,
                        email: user.email,
                        username: userData.username,
                        blocked: userData.blocked || [] 
                    });
                }
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);


    const contextValue = {user,setUser};
    return (
        <UserContext.Provider value={contextValue}>
               {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;
