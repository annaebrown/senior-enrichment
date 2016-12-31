'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import store from './store'

import Root from './components/Root'
import Campuses from './components/Campuses';

render (
  <Provider store={store}> 
  	<Router history={hashHistory}>
  		<Route path='/'>
  			<Route path='campuses' component={Campuses} />
  			<IndexRoute component={Root}/>
  		</Route>
  	</Router>
  </Provider>,
  document.getElementById('main')
)