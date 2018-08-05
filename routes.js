import React from 'react';
import {Route, browserHistory, Router, IndexRoute} from 'react-router';

import App from './containers/App';
import Team from './containers/Team';
import AddComponent from './containers/AddComponent';
import EditComponent from './containers/EditComponent';

const RouterMain= ()=>{
	return (
		<Router history={browserHistory}>
			<Route path='/' component={App}>
				<IndexRoute component={Team}/>
				<Route name="/add" path='/add' component={AddComponent}/>
				<Route name='/edit' path='/edit' component={EditComponent}/>
			</Route>
		</Router>
	)
}

export default RouterMain;