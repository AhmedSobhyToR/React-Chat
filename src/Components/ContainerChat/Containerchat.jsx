import React, { useEffect, useRef, useState } from 'react';
import './Containerchat.css'
import EmojiPicker from 'emoji-picker-react';
import Message from '../Message/Message';
const Containerchat = () => {
    const[showEmoji, setShowEmoji] = useState(false);
    const[text,setText] = useState("");
    function handleEmojiClick(e){
        setText(prev=> prev+e.emoji)
    }
    const endRef = useRef(null)

    useEffect(()=>{
        if (endRef.current) {
            endRef.current.scrollIntoView({behavior:"smooth"});
        }
    },[])
  
    return (
        <div className="container-chat">
            {/* Header */}
        <div className='container-chat-header'>
            <div className='chat-header-left'>
                
                <img src="../../assests/favicon.png" alt="" />
                <div>
                    <p>Maria Nelson</p>
                    <p>Grateful for every sunrise and sunset</p>
                </div>

            </div>

            <div className='chat-header-right'>
                <img src="../../assests/phone.png" alt="" />
                <img src="../../assests/video.png" alt="" />
                <img src="../../assests/info.png" alt="" />
            </div>

        </div>
        { /* Body */ }
        
        <div className='container-chat-body'>
            <Message></Message>
            <Message></Message>
            <Message></Message>
            <Message></Message>
            <Message></Message>
            <Message></Message>
            <Message></Message>
            <Message></Message>
            <Message></Message>
            <Message></Message>
            <Message></Message>
            <div ref={endRef}></div>
        </div>
      

        {/* Footer */}
        
        <div className='container-chat-footer'>
            <div className='chat-footer-left'>
                <img src="../../assests/img.png" alt="" />
                <img src="../../assests/camera.png" alt="" />
                <img src="../../assests/mic.png" alt="" />
            </div>
            <div className='chat-footer-mid'>
            <input type="text" placeholder='Type a message'  onChange={(e)=>setText(e.target.value)}/>
            </div>
            <div className='chat-footer-right'>
                <div className="emoji">
               
                <img src="../../assests/emoji.png" alt="" onClick={()=>{setShowEmoji(cur => !cur)}} />
                <div className="picker">
                {showEmoji?<EmojiPicker onEmojiClick={handleEmojiClick}></EmojiPicker>:<></> } 

                </div>
               
                
                </div>
                <input type="button"   value="Send"/>

            </div>

        </div>
    </div>
    );
}

export default Containerchat;
