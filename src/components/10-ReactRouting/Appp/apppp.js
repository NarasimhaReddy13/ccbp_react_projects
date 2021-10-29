import {Route, Switch } from 'react-router-dom'

import Header from '../Header'
import Home from '../Home'
import About from '../About'
import BlogItemDetails from '../BlogItemDetails'

import './appp.css'

const RoutingApp = () => (
  <div className="app5-container">
    <div className="app-card">
      <Header />
      <div className="app-body">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/blogs/:id" component={BlogItemDetails} />
        </Switch>
      </div>
    </div>
  </div>
)

export default RoutingApp