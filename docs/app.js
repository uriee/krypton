import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from '../app/src/store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../app/src/containers/HomePage'
import Room from '../app/src/containers/RoomPage'
import NotFound from '../app/src/components/NotFound'
import styles from '../app/src/app.css'

render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/r/:room" component={Room} />
				<Route path="*" component={NotFound} />
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById('app')
);