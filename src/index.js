import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './login';
import ListNews from './containers/NewsContainers';
import { Provider } from 'react-redux';
import configureStore from './store';
import Home from './Home';
import * as serviceWorker from './serviceWorker';
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';

ReactDOM.render(
<Provider store={configureStore}>
  <Router>
        <div>
            <Route exact path="/" component={Login} />
            <Route path="/News" component={ListNews}/>
            <Route path="/Home" component={Home}/>
        </div>
  </Router>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
