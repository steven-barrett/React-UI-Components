import React from 'react';
import './Button.css';

export const ClearButton = (props) => (
    <div className="clear-btn" onClick={props.handleClear}>
        {props.children}
    </div>
)

export default ClearButton;