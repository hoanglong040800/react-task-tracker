import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './base.css'
import Home from './Home'
import About from './About'


const App = () => {
	return (
		<div className='container'>
			<Router>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/about' component={About} />
				</Switch>
			</Router>
		</div>
	)
}

export default App
