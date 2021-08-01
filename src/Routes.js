import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import HomeScreen from './screens/Home'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/media">
          <Media />
        </Route>
        <Route path="/show">
          <Show />
        </Route>
        <Route path="/">
          <HomeScreen />
        </Route>
      </Switch>
    </Router>
  )
}


function Media() {
  return <h2>Media</h2>
}

function Show() {
  return <h2>Show</h2>
}
