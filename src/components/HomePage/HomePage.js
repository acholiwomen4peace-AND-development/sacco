import React, {Component} from 'react';
import './HomePage.css'
import '../Register/Register.css'
import Header from '../Header/Header'
import MenuItems from '../MenuItems/MenuItems'
import Register from '../Register/Register'
import Signin from '../Signin/Signin'
import Save from '../Save/Save'
import Update from '../Update/Update'
import Join from '../Join/Join'
import FacebookLogin from '../Contact/FacebookLogin';
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'
import { Routes, Route, Link } from 'react-router-dom'
import ForgotPassword from '../PasswordReset/ForgotPassword'
import ChangePassword from '../PasswordReset/ChangePassword'
import ParentAp from '../Register/ParentAp';



class HomePage extends Component{
	constructor(props){
		super(props)
		this.state={
			route: 'Sign',
			isSignin: false,
			
		}
	}

onRouteChange =(route)=>{
	if(route==='isSignin'){
		this.setState({isSignin:true})
	}
	else if(route==='Save'){
		this.setState({isSignin:true})
	}
	else if(route==='Update'){
		this.setState({isSignin:true})
	}
	else if(route==='Join'){
		this.setState({isSignin:false})
	}
	else if(route==='Sign'){
		this.setState({isSignin:false})
	}
	else if(route==='FacebookLogin'){
		this.setState({isSignin:false})
	}
	else if(route==='Contact'){
		this.setState({isSignin:false})
	}
	else if(route==='Projects'){
		this.setState({isSignin:false})
	}
	else if(route==='ForgotPassword'){
		this.setState({isSignin:false})
		}
	else if(route==='ChangePassword'){
		this.setState({isSignin:false})
		}
	this.setState({route:route});

}

render(){
return(
<div>	
<Header isSignin={this.state.isSignin} onRouteChange={this.onRouteChange}/> 
	
	{this.state.route==='isSignin'?
	<div className="container mt5" style={{height: '100%', width:'100%'}}>
	<MenuItems onRouteChange={this.onRouteChange} />
	<Register onRouteChange={this.onRouteChange}/>
	</div>

	:this.state.route==='Save'?
	<div className="container mt5">
	<MenuItems onRouteChange={this.onRouteChange}/>
	<Save onRouteChange={this.onRouteChange}/>
	</div>

	:this.state.route==='Update'?
	<div className="container mt5">
	<MenuItems onRouteChange={this.onRouteChange}/>
	<Update onRouteChange={this.onRouteChange}/>
	</div>

	:this.state.route==='HomePage'?
	<div className="container mt5">
	<MenuItems onRouteChange={this.onRouteChange} />
	<Register onRouteChange={this.onRouteChange}/>
	</div>

	:this.state.route==='Join'?
	<Join onRouteChange={this.onRouteChange}/>

	:this.state.route==='FacebookLogin'?
	<FacebookLogin onRouteChange={this.onRouteChange}/>

	:this.state.route==='Contact'?
	<Contact onRouteChange={this.onRouteChange}/>

	:this.state.route==='Projects'?
	<Projects onRouteChange={this.onRouteChange}/>

	:this.state.route==='ForgotPassword'?
	<ForgotPassword  onRouteChange={this.onRouteChange}/>
	
	:this.state.route==='ChangePassword'?
	<ChangePassword onRouteChange={this.onRouteChange}/>
	:
	<div>
	<Signin isSignin={this.state.isSignin} onRouteChange={this.onRouteChange} />
	</div>
	}
	
</div>

	)
}
}

export default HomePage;
