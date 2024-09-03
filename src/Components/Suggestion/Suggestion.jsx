import React, { useContext } from 'react';
import './Suggestion.css'
import { context } from '../../context/Context';
const Suggestion = (props) => {

    const AiContext = useContext(context)
   const  sug = props.data;
   function handleSuggestion(val){
    
    AiContext.handleRun(val);
   }
    return (
        <div className='suggestion' onClick={()=>{handleSuggestion(sug.paragraph)}}>
            <p>{sug.paragraph}</p>
            <div><img src={sug.image} alt="" /></div>
            
        </div>
    );
}

export default Suggestion;
