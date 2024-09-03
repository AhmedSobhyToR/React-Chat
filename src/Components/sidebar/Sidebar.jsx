import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import './Sidebar.css'
import { context } from '../../context/Context';
const Sidebar = () => {
    const [extended, setExtended] = useState(false);
    const AIContext = useContext(context)
    function handleNewPrompt(){
        AIContext.setPromptAnswer(null)
    }
    function handleEachRecent(p){
        AIContext.setPromptAnswer(p.body)
        AIContext.setCurrentPrompt(p.head)
    
    }
    return (
        <div className='side-bar'>
            <div className='sidebar-top'>
            <div className='menu' >
            <img src={assets.menu_icon} alt=""  onClick={()=> setExtended(prev => !prev)}/>
            </div>
            <div className='new-chat' onClick={()=>{handleNewPrompt()}}>
                
                <img src={assets.plus_icon} alt="" />
                
                {extended&& <p>New Chat</p>}
                
             
            </div>
            {extended&&  <div className='recent'>
             <h4 className='recent-header'>Recent</h4>
                <div className='all-recent-body'>
                {AIContext.prevPrompts.map((p,i)=>{
                    return(
                        <div key={i} className='recent-body' onClick={()=>{handleEachRecent(p)}}>
                            <img src={assets.message_icon} alt="" />
                            <p>{p.body.slice(0,18)}</p>
                        </div>
    
                    )
       
                })}
                </div>
               


                
            
            </div>
           
}
</div>
          

            <div className='account-actions'>
                <div className='recent-body'>
                <img src={assets.question_icon} alt="" />
                {extended&&<p>Help</p> }
                
                </div>
            <div className='recent-body'>
            <img src={assets.history_icon} alt="" />
            {extended&&  <p>History</p> }
            
            </div>
            <div className='recent-body'>
            <img src={assets.setting_icon} alt="" />
            {extended&&     <p>Settings</p> }
         
            </div>
            
            </div>
        </div>
    );
}

export default Sidebar;
