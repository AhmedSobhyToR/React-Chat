import React, { useEffect, useRef, useState } from 'react';
import { createContext } from "react";
import run from '../config/ai';

export const context = createContext();


const Context = (props) => {

    const promptValue = useRef();
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [currentPrompt, setCurrentPrompt] = useState(null);
    const [input, setInput] = useState(null);
    const [promptAnswer, setPromptAnswer] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{

    },[loading])
    async function handleRun(val) {
        setLoading(true);

        let prompt = input || val;
        setCurrentPrompt(prompt);
        promptValue.current.value = null;
        let result = await run(prompt);

        if (result) {
            let promArray1 = result.split("**");
            let promtext1 = "";

            for (let i = 0; i < promArray1.length; i++) {
                if (i === 0 || i % 2 === 0) {
                    if (promArray1[i].includes("\n")) {
                        promtext1 += `${promArray1[i]}<br />`;
                    } else {
                        promtext1 += promArray1[i];
                    }
                } else {
                    if (promArray1[i].includes("\n")) {
                        promtext1 += `<b>${promArray1[i]}</b><br />`;
                    } else {
                        promtext1 += `<b>${promArray1[i]}</b>`;
                    }
                }
            }

            let promText2 = promtext1.split("*").join("<br />");
            setPromptAnswer(promText2);
            setPrevPrompts([{ head: prompt, body: promText2 }, ...prevPrompts]);
        }

      
        setLoading(false);
        // setCurrentPrompt(null);
        setInput(null);
    }

    const contextValue = {
        promptValue,
        prevPrompts,
        promptAnswer,
        loading,
        currentPrompt,
        input,
        handleRun,
        setPromptAnswer,
        setCurrentPrompt,
        setInput,
    };

    return (
        <context.Provider value={contextValue}>
            {props.children}
        </context.Provider>
    );
};

export default Context;
