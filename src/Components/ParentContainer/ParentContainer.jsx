import React from 'react';
import Containerlist from '../Containerlist/Containerlist';
import Containerchat from '../ContainerChat/Containerchat';
import Containerprofile from '../Containerprofile/Containerprofile';


const ParentContainer = () => {
    return (
        <>
        <Containerlist></Containerlist>
        <Containerchat></Containerchat>
        <Containerprofile></Containerprofile>
        </>
    );
}

export default ParentContainer;
