import React, {Component} from 'react'
import {Router, Stack, Scene} from 'react-native-router-flux'
import Login from '../container/Login'

export default class AppRouter extends Component {
  render () {
    return (
      <Router>
        <Stack key="root">
          <Scene key="login" component={Login} title="Login"  hideNavBar initial = {true}/>
          {/* <Scene key="register" component={Register} title="Register" />
          <Scene key="home" component={Home} /> */}
        </Stack>
      </Router>
    )
  }
}

