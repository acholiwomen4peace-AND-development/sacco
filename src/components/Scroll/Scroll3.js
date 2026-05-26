
import React from 'react';
//import './CardList.css';

const Scroll3 = (props) =>{

	 return(
	<div className="hover-blue" style={{ overflowY: 'scroll', border: '2px solid purple', height: 100, width: '100%', display: 'flex', 'justify-content': 'flex-start'}}>
	{props.children}
	</div>
	);
}
export default Scroll3;