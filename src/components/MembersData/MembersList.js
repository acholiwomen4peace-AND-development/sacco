import React from 'react'
 import { MembersInfo } from './MembersInfo'
 import Member from './Member'
 import MembersDataList from './MembersDataList.css'
 function MembersList({MembersInfo}){
 	const List=MembersInfo.map((user, i)=>{
return <Member key={i} id={MembersInfo[i].id} name={MembersInfo[i].name} Tel={MembersInfo[i].Tel} 
email={MembersInfo[i].email} />
 	}); 
 	return(
 		<div className="DataList">
 		{List}
 		</div>
 		);
 	}export default MembersList;