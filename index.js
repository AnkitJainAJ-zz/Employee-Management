import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import RouterMain from './routes';
import store from './store';

ReactDOM.render(
	<Provider store={store}>
		<RouterMain/>
	</Provider>,
	document.getElementById('root')
)