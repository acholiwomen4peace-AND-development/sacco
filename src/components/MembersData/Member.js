import React from 'react'
function Member(props){
	const MemberPic=require(`./MembersPics/${props.id}.jpg`)
	return(
	<div className="br2 pa3 ma2 w-20 bg-pink tc grow shadow-5">
		<img src={MemberPic} alt='Member pic' style={{width: '150px', height: '150px', 'border-radius': '50%'}} />
		<div>
		<p>{props.name}</p>
		<p>{props.Tel}</p>
		<p>{props.email} </p>
		</div>
	</div>

		);
} export default Member;