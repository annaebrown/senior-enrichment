'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import { gettingAllCampuses } from './reducers/actions/getCampuses';

import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import store from './store'

import Root from './components/Root'
import AllCampuses from './containers/AllCampuses';

const loadCampuses = () => store.dispatch(gettingAllCampuses());

render (
  <Provider store={store}> 
  	<Router history={hashHistory}>
  		<Route path='/'>
  			<Route path='campuses' component={AllCampuses} onEnter={loadCampuses} />
  			<IndexRoute component={Root}/>
  		</Route>
  	</Router>
  </Provider>,
  document.getElementById('main')
)