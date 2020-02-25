import React, {Component} from 'react'
import {Router, Stack, Scene} from 'react-native-router-flux'
import Login from '../container/Login'
import Home from '../container/Home'


export default class AppRouter extends Component {
  render () {
    return (
      <Router>
        <Stack key="root">
          <Scene 
          key="login" 
          component={Login} 
          hideNavBar initial = {true}/>
          {/* <Scene key="register" component={Register} title="Register" /> */}
          <Scene key="Home" 
          component={Home} 
          type = {'reset'}
          hideNavBar />
        </Stack>
      </Router>
    )
  }
}

