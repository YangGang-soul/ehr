import React, { Component } from 'react';

import Cmscontent from '../Cms-content/Cms-content.component.jsx';

import './Contact.css'

class Contact extends Component {
   

    render(){
        console.log(this.props);
        return (
            <div className="Contact">
                <div className="container">
                    <Cmscontent auth={this.props.auth} src="contact" />
                </div>
            </div>
        );
    }
}

export default Contact;