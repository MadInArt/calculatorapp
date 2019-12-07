import React from 'react'
import './ButtonClear.css';

export const ButtonClear = props => 
	(
		<div className="clear-btn" onClick={props.HandleCleaner}>
			{props.children}
		</div>
		);