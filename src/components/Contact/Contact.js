import React, {Component} from 'react';
import './Contact.css';
import ButtonMailto from './ButtonMailto';
import Cellphone from './Cellphone.JPG';
import LocationIcon from './LocationIcon'
import MembersList from '../MembersData/MembersList'
import Scroll1 from '../Scroll/Scroll1'
 import { MembersInfo } from '../MembersData/MembersInfo'
 import SearchBox from './SearchBox'


import {FacebookShareCount, EmailShareButton, FacebookIcon, FacebookShareButton,EmailIcon, 
	WhatsappShareButton, WhatsappIcon, TwitterShareButton, TwitterIcon, 
	LineIcon, LineShareButton} from 'react-share';


class Contact extends Component{
	constructor(props){
		super(props);
		this.state={
			searchfield:"",
			MembersInfo: MembersInfo
		}
	}
onSearchChange=(event)=>{
	this.setState({searchfield:event.target.value});
	}
render(){

	const FilterMember=this.state.MembersInfo.filter(MembersInfo=>{
		return MembersInfo.Tel.includes(this.state.searchfield)
	|| MembersInfo.name.toLowerCase().includes(this.state.searchfield.toLowerCase())||MembersInfo.email.toLowerCase().includes(this.state.searchfield.toLowerCase())})
return(
<div className="flex-container shadow-5 mw-100">
	<div className="flex-container1 shadow-5 mw-50 br2 center">
	
		<div className="Location-Container">
			<div className="Location-Container1 center">
				<div className="center pink ">
				<h3 className="center pink ">Contact Us</h3>
				</div>

				<div className="center">
				<a href="https://wa.me/256782005826"> <WhatsappIcon size={32} round={true} alt="Whatsapp" style={{width: '20px', height: '20px', 'margin-top': '5px', cursor: 'pointer'}}/></a> 
				</div>

				<div className="center">
				<EmailIcon size={32} round={true} style={{width: '15px', height: '15px', 'margin-top': '5px', cursor: 'cursor'}}/> 
				<ButtonMailto mailto="mailto:acholiwomen4peaced@gmail.com" />
				</div>
			</div>
			<div className="Location-Container2 center">

				<div className="center">
				<LocationIcon size='5em'/>
				</div>

				<div className="center">
				<p><em>Patongo East Cell, Patongo Lira Road, Opposite Dr. Layoo Clinic, Patongo Town Council, Agago District</em> </p>
				</div>

			</div>
		
		</div>
	
	</div>
	<div className="flex-container2 shadow-2 mw-50 br2 center">	
		<div className="fc2-2">
			<h4 className="mv0">Chairperson</h4>
		    <h6 className="mv0">
			<img src={Cellphone} alt="Tel:" style={{width: '15px', 'border-radius': '50%', height: '15px'}}/> <span></span>  +256 782 005 826 <span></span>
			
			<a href="https://wa.me/256782005826"> <WhatsappIcon size={32} round={true} alt="Whatsapp" style={{width: '20px', height: '20px', 'margin-top': '5px', cursor: 'pointer'}}/></a><span></span> 
			<FacebookIcon size={32} round={true} onClick={()=>this.props.onRouteChange('FacebookLogin')}  alt="facebook" style={{width: '20px', height: '20px', cursor: 'pointer'}}/><span></span><br></br>

			<EmailIcon size={32} round={true} style={{width: '15px', height: '15px', 'margin-top': '5px', cursor: 'cursor'}}/> 
			<ButtonMailto 
			label={" acholiwomen4peaced@gmail.com"} mailto="mailto:acholiwomen4peaced@gmail.com" />
			 
			</h6>
		</div>

		<div className="fc2-2">
		<h4 className="mv0">Treasurer</h4>
		    <h6 className="mv0">
			<img src={Cellphone} alt="Tel:" style={{width: '15px','border-radius': '50%', height: '15px'}}/> <span></span>  +256 782 005 826
			<span>
			<a href="https://wa.me/256782005826"> <WhatsappIcon size={32} round={true} alt="Whatsapp" style={{width: '20px', height: '20px', 'margin-top': '5px', cursor: 'pointer'}}/></a><span></span> 
			<FacebookIcon size={32} round={true} onClick={()=>this.props.onRouteChange('FacebookLoginHeader')}  alt="facebook" style={{width: '20px', height: '20px', cursor: 'pointer'}}/><span></span><br></br>
			<EmailIcon size={32} round={true} style={{width: '15px', height: '15px', 'margin-top': '5px', cursor: 'cursor'}}/> 
			<ButtonMailto 
			label={" acholiwomen4peaced@gmail.com"} mailto="mailto:acholiwomen4peaced@gmail.com" />
			</span> 
			</h6>
		</div>

		<div className="fc2-2">
		<h4 className="mv0">Secretary</h4>
		    <h6 className="mv0">
			<img src={Cellphone} alt="Tel:" style={{width: '15px','border-radius': '50%', height: '15px'}}/> <span></span>  +256 782 005 826
			<span>
			<a href="https://wa.me/256782005826"> <WhatsappIcon size={32} round={true} alt="Whatsapp" style={{width: '20px', height: '20px', 'margin-top': '5px', cursor: 'pointer'}}/></a><span></span> 
			<FacebookIcon size={32} round={true} onClick={()=>this.props.onRouteChange('FacebookLoginHeader')}  alt="facebook" style={{width: '20px', height: '20px', cursor: 'pointer'}}/><span></span><br></br>
			<EmailIcon size={32} round={true} style={{width: '15px', height: '15px', 'margin-top': '5px', cursor: 'cursor'}}/> 
			<ButtonMailto 
			label={" acholiwomen4peaced@gmail.com"} mailto="mailto:acholiwomen4peaced@gmail.com" />
			</span> 
			</h6>
		</div>
	</div>
	<div>
	<SearchBox SearchChange={this.onSearchChange} />
	</div>
	
	<div className="flex-container4">
	<Scroll1>
	<MembersList MembersInfo={FilterMember} />
	</Scroll1>
	</div>	
	
</div>
);
}
}
export default Contact;