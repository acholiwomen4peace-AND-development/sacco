import React from 'react';
//import './CardList.css';

const Scroll2 = (props) =>{

	 return(
	<div className="hover-blue" style={{ overflowY: 'scroll', border: '2px solid purple', height: 200}}>
	{props.children}
	</div>
	);
}
export default Scroll2;