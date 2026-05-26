import React from 'react';
//import './CardList.css';

const Scroll1 = (props) =>{
	
	 return(
	<div className="hover-blue" style={{ overflowY: 'scroll', border: '2px solid purple', height: 250}}>
	{props.children}
	</div>
	)
}
export default Scroll1;