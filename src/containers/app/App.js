import './App.css'
import './base.css'
import Header from '../../components/Header/Header'
import TasksList from '../../components/TasksList/TasksList'

const App = () => {
	return (
		<div className='container'>
			<Header className='header' title='React Task Tracker' />

			<TasksList />
		</div>
	)
}

export default App;
