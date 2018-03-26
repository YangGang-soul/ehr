import React,{Component} from 'react';
import {
    Link,NavLink
} from 'react-router-dom';


import './Navigation.css'


class Navigation extends Component {

  
   constructor(props){
        super(props);
        this._logOut = this._logOut.bind(this);
        this.state = {
            phone: localStorage.getItem('username')
        };
 
   }
    _logOut(){
        //alert("_logOut");
        this.props.auth.logout();
    }
    
    render() {
    const {isLoggedIn}= this.props.auth;
    const isLogined = isLoggedIn();
    //alert("isLogined"+isLogined);
    const signinAngSignUpElement = (
               <ul className="nav navbar-nav navbar-right">
                    <li><a  data-toggle="modal" data-target="#pop-signin-Modal" className="smoothScroll">Sign In</a></li>
                    <li><a  data-toggle="modal" data-target="#pop-signup-Modal" className="smoothScroll">Sign up</a></li>
                </ul>
            );

    const signOutElement = (
         <ul className="nav navbar-nav navbar-right" >
           <li> <a  className="dropdown-toggle glyphicon glyphicon-user"
                                data-toggle="dropdown"> 你好 {localStorage.getItem('username')}
                 <span className="caret"></span></a>
                    <ul className="dropdown-menu" role="menu">
                        <li> <a data-toggle="modal" data-target="#pwdrestModal" 
                         className="active">重置密码</a></li>
                        <li> <NavLink to="/profile" className="active">个人中心</NavLink></li>
                        <li> <NavLink to="/my-blog" className="active">我的博客</NavLink></li>
                        <li id="signout"> <a  onClick={this._logOut} className="active">
                            <span className="glyphicon glyphicon-log-out">&nbsp;</span>退出 
                                </a></li>
                    </ul>
           </li>
        </ul>
    );        


    return(<nav className="navbar navbar-fixed-top navbar-inverse">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed"
                        data-toggle="collapse" data-target="#navbar"
                        aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <NavLink to="/" className="nav-top-logo" >
                    <img src="./assets/img/logo_small.png" className="nav-home" alt="logo" />
                </NavLink>
                <NavLink to="/" className="navbar-brand" >Project name</NavLink>
            </div>
            <div id="navbar" className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/repos">Repos</NavLink></li>
                    <li><NavLink to="/users">Users</NavLink></li>
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Application <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li className="dropdown-header">-----------Inventory-------</li>
                            <li><Link to="/inventory">Inventory Info</Link></li>
                            <li><Link to="/inventory-manage">Inventory Manage</Link></li>
                            <li role="separator" className="divider">Blog</li>
                            <li className="dropdown-header">-------------Blog----------</li>
                            <li><Link to="/blog">Blog list </Link></li>
                            <li><Link to="/blog-manage">Blog Manage</Link></li>
                            <li role="separator" className="divider">TODO</li>
                            <li className="dropdown-header">------------TODO-----------</li>
                            <li><Link to="/todo">TODO List</Link></li>
                            <li><Link to="/todo-manage">TODO Manage</Link></li>
                        </ul>
                    </li>
                </ul>
                {!isLogined ? signinAngSignUpElement:signOutElement}
                
            </div>
        </div>
    </nav>
    )
}
}

export default Navigation