import React from 'react';
import LabTabs from './Tab'
const LeftDrop = (props) => {
    return (
        <div>
            <div  className={`drop-container ${props.och === true ? 'drop-con' : ''}`}>
                <div className="drop-drop">
                    <LabTabs />
                </div>
            </div>
        </div>
    );
};

export default LeftDrop;