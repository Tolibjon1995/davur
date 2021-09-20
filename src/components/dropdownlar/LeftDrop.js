import React from 'react';
import LabTabs from './Tab'
const LeftDrop = (props) => {
    return (
        <div>
            <div onClick={props.fun} className={`drop-container ${props.och === true ? 'drop-con' : ''}`}>
                
            </div>
            <div className={`drop-drop ${props.och === true ? 'drop-con' : ''}`}>
                    <LabTabs />
            </div>
        </div>
    );
};

export default LeftDrop;