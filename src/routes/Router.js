import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Header } from '../components'
import { HomePage, UserPage } from '../pages'
import NotFound from '../pages/NotFound'

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/:username">
          <UserPage />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
