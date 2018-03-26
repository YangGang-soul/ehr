import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './Components/App/App';
import Routing from './Router/Routing.component';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render( <Routing />, document.getElementById('root'));
registerServiceWorker();


