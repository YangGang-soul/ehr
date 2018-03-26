import React,{Component} from 'react';
import {
    Link,NavLink
} from 'react-router-dom';





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


    return(<nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
            <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">EHR</a>
                
            <ul className="navbar-nav col-sm-3 col-md-2 px-3">
                <li className="nav-item text-nowrap">
                    <a className="nav-link" href="#">退出</a>
                </li>
            </ul>
        </nav>
    )
}
}

export default Navigation