import React from 'react';
import styled from 'styled-components';


const SwitchLabel = styled.label`
display: flex;
 align-items: center;
 margin-left: -11px;
 margin-right: 16px;
 vertical-align: middle;
 -webkit-tap-highlight-color: transparent;
 @media only screen and (max-width: 600px) {

    display: none;

}
`;

function SwitchControl(){
    return(
        <div className="onoffswitch">
        <SwitchLabel>
                <span className="Switch-main">
                    <span className="Switch-base">
                        <span className="Switchinput-container">
                            <input className="Switch-input" type="checkbox"/>
                        <span className="Switch-bullet"/>
                        </span>
                    </span>
                    <span className="Switch-track"/>
                </span>
                <span>Dark mode</span>
         </SwitchLabel>
       </div>
    );
};

export default SwitchControl;