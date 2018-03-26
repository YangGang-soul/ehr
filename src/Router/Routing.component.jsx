import React,{Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import { Navbar,Jumbotron,Button } from 'react-bootstrap'

import {config } from '../Config/App.config.jsx';
import Auth  from '../Service/Auth.service.jsx';



import Dashboard from '../Components/Dashboard/Dashboard.component';
import OrgStructure from '../Components/OrgStructure/OrgStructure.component';
import Contact from '../Components/Contact/Contact.component.jsx';
import Repos from '../Components/Repos/Repos.component.jsx';
import Profile from '../Components/Profile/Profile.component.jsx'
import Users from '../Components/User/User.component.jsx';
import Footer from '../Components/Footer/Footer.component.jsx';
import TopNavigation from '../Components/Navigation/TopNavigation.component.jsx';
import LeftNavigation from '../Components/Navigation/LeftNavigation.component.jsx';
import Signin from '../Components/Sign-in/Sign-in.component.jsx'
import Signout from '../Components/Sign-out/Sign-out.component.jsx'
import Signup from '../Components/Sign-up/Sign-up.component.jsx'
import UserDetail from '../Components/User/User-detail.component.jsx'


const auth = new Auth();
class Routing extends Component {

   
    render() {
       const captchaUrl = config.API_CAPTCHA;
       console.log("Auth===",auth);

        return(
            <Router>
            <div>
                <TopNavigation auth={auth}/>
                <div className="container-fluid">
                 <div className="row">
                  <LeftNavigation auth={auth}/>
                  <main className="col-md-9 ml-sm-auto col-lg-9 pt-3 px-4">
                    <Route exact path="/" render={(props) => <Dashboard auth={auth} {...props} />}/>
                    <Route path="/org-structure"  render={(props) => <OrgStructure auth={auth} {...props} />}/>
                    <Route path="/contact" render={(props) => <Contact auth={auth} {...props} />}/>
                    <Route path="/repos" render={(props) => <Repos auth={auth} {...props} />} />
                    <Route path="/profile" render={(props) => <Profile auth={auth} {...props} />} />

                    <Route path="/users" render={(props) => <Users auth={auth} {...props} />} />

                    <Route path="/user/:id" render={(props) => <UserDetail auth={auth} {...props} />}/>

                  </main>
                  </div>
                 </div>
               
               <Signin auth={auth}/>
               <Signup auth={auth} />
            </div>
          </Router>
        )
    }
}
export default Routing