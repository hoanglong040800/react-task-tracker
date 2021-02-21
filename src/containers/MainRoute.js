import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './About'

import App from './App'
import About from './About'


const MainRoute = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/about' component={About} />
      </Switch>
    </Router>
  )
}

export default MainRoute
