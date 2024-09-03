import React, { useContext, useEffect, useRef, useState } from 'react';
import './Main.css'
import { assets } from '../../assets/assets';
import Suggestion from '../Suggestion/Suggestion';
import {v4 as uuid} from "uuid"
import { context } from '../../context/Context';
const Main = () => {
        
    const AICont = useContext(context);
    const [profileImage, setProfileImage] = useState(null);
    const fileInputRef = useRef(null);
    const handleImageClick = () => {
        fileInputRef.current.click();
      };
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            setProfileImage(reader.result);
          };
          reader.readAsDataURL(file);
        }
      };
    


    useEffect(()=>{
},[AICont.loading, AICont.promptAnswer, AICont.currentPrompt])

    const Suggestions = [{
        paragraph:"Suggest Beautiful Places to see on an upcoming trip",
        image : assets.compass_icon
    },{
        paragraph:"Give me some quotes and advices to keep on mind",
        image : assets.bulb_icon
    },{
        paragraph:"Make a good Frontend CV for me to post on LinkedIn",
        image : assets.message_icon
    },{
        paragraph:"If you have any coding questions feel free to reach out",
        image : assets.code_icon
    }];
    function handleEnterKey(event){
        if(event.key === 'Enter'){
            AICont.handleRun(AICont.input);
        }

    }

    return (

        <div className='main'>
        
            <div className='nav'>
                <p>AIScript</p>
                <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />
                
                <img src={profileImage? profileImage: assets.upload_icon} alt="" onClick={handleImageClick}/>
            </div>
            <div className='main-section'>

            {AICont.promptAnswer?
          
            <>
                    
            <div className="prompt-answer">
                <div className='prompt-answer-header' >
                <img src={profileImage? profileImage: <></>} alt="" />
                    <p>{AICont.currentPrompt}</p>
                    
                </div>
                {AICont.loading?<>
                <div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                </div>
                  
                    
                </>:<>
                <div className='prompt-answer-body'>
                    <p dangerouslySetInnerHTML={{__html:AICont.promptAnswer}}></p>
                    </div>
                </>}
         
                   

            </div>
            
            </>:<>
            <div className='main-welcome-message'>
                    <p>How can I help you today?</p>
                  
                </div>

            <div className='main-suggestions'>
                {Suggestions.map((s)=>{
                    return (<Suggestion key={uuid()} data = {s}></Suggestion>)
                })}
            
            </div>
            </>}
          
                
                <div className='main-search'>
                <input type="text" name="search-prompt" placeholder='Enter a prompt here' onChange={(r)=>{
                    AICont.setInput(r.target.value);
                
                }}  ref={AICont.promptValue}
                onKeyDown= {handleEnterKey}/>
                <div className='main-search-icons'>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                {AICont.input?<>
                    <img src={assets.send_icon} onClick={()=>AICont.handleRun(AICont.input)} alt="" />

                </>:<></>}
                </div>
              

            </div>
                

            <div className='footer'>
                <p>This Website is Made & Powered By Ahmed Sobhy</p>
            </div>
            </div>

      
        </div>
    );
}

export default Main;
