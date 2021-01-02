import React from 'react'
import { Route, Switch } from 'react-router-dom'

import FrontPage from 'Components/FrontPage'

export default () => (
  <div className="content">
    <Switch>
      <Route exact path="/" component={FrontPage} />
    </Switch>
  </div>
)
