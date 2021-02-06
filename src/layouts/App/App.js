import { useState } from 'react'
import './App.css'
import './base.css'
import Header from '../../components/Header/Header'
import TasksList from '../../components/TasksList/TasksList'
import AddTask from '../../components/AddTask/AddTask'

const App = () => {
	const [tasksList, setTasksList] = useState(
		[
			{
				id: 1,
				text: 'Clean up',
				time: '6:30 AM',
				reminder: true,
			},
			{
				id: 2,
				text: 'Eat breakfast',
				time: '7:00 AM',
				reminder: false,
			},
			{
				id: 3,
				text: 'Learn ReactJS',
				time: '7:30 AM',
				reminder: true,
			},
		]
	)

	// Delete Task
	const deleteTask = (id) => {
		setTasksList(
			tasksList.filter((el) => el.id !== id)
		)
	}

	// Toggle Reminder
	const toggleReminder = (id) => {
		setTasksList(
			tasksList.map((el) =>
				el.id === id
					? { ...el, reminder: !el.reminder }
					: el
			)
		)
	}


	return (
		<div className='container'>
			<Header className='header' title='React Task Tracker' />

			<AddTask />

			{
				tasksList.length > 0
					? (
						<TasksList
							tasksList={tasksList}
							onDelete={deleteTask}
							onToggle={toggleReminder}
						/>
					) : (
						<p style={{ marginTop: 20 }}>
							No task to show
						</p>
					)
			}
		</div>
	)
}

export default App;
