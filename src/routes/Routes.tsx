import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from 'Pages/Home'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
    </Switch>
  )
}

export default Routes
