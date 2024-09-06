import React from 'react';
import './Sharedphoto.css'
const Sharedphoto = () => {
    return (
        <div className='shared-photo'> 

        <div className='shared-photo-left'>
        <img src="../../../assests/sh1.jpg" alt="" />   
        <p>Photo Title</p>
        </div>

            <div className="shared-photo-right">
            <img src="../../../assests/download.png" alt="" />
            </div>
 
             
        </div>
    );
}

export default Sharedphoto;
