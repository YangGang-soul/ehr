import React, {Component} from 'react';
import Cmscontent from '../Cms-content/Cms-content.component.jsx';
class Repos extends Component {
    render(){
        return(
            <div className="Repos">
                <div className="container">
                 
                    <Cmscontent auth={this.props.auth} src="repos" />
                
                </div>
            </div>
        )
    }
}
export default Repos