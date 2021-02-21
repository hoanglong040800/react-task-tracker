import { useEffect, useState } from 'react'

import Header from '../components/Header/Header'
import TaskList from '../components/TaskList/TaskList'
import AddTask from '../components/AddTask/AddTask'
import Footer from '../components/Footer/Footer'


const Home = () => {
	const [showAddTask, setShowAddTask] = useState(false)

	const [taskList, setTaskList] = useState([])

	useEffect(() => {
		fetchTask()
	}, [])

	const fetchTask = async (id = '') => {
		const res = await fetch(`https://my-json-server.typicode.com/hoanglong040800/react-task-tracker/taskList/${id}`)
		const data = await res.json()
		setTaskList(data)
	}

	const addTask = async (task) => {
		// await fetch('https://my-json-server.typicode.com/hoanglong040800/react-task-tracker/taskList', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-type': 'application/json',
		// 	},
		// 	body: JSON.stringify(task),
		// })

		// front-end add
		const newId = taskList[taskList.length - 1].id + 1
		const newTask = { newId, ...task }
		setTaskList([...taskList, newTask])

		// Close Add Task form
		setShowAddTask(false)
	}

	const deleteTask = async (id) => {
		// await fetch(`https://my-json-server.typicode.com/hoanglong040800/react-task-tracker/taskList/${id}`, {
		// 	method: 'DELETE',
		// })

		// front-end delete
		setTaskList(
			taskList.filter(el => el.id !== id)
		)
	}

	const toggleReminder = async (id) => {
		// const curTask = await fetchTask(id)
		// const newTask = { ...curTask, reminder: !curTask.reminder }

		// await fetch(`https://my-json-server.typicode.com/hoanglong040800/react-task-tracker/taskList/${id}`, {
		// 	method: 'PUT',
		// 	headers: {
		// 		'Content-type': 'application/json',
		// 	},
		// 	body: JSON.stringify(newTask)
		// })

		// front-end toggle
		setTaskList(
			taskList.map(el =>
				el.id === id
					? { ...el, reminder: !el.reminder }
					: el
			)
		)
	}

	const toggleAddTask = () => {
		setShowAddTask(!showAddTask)
	}


	return (
		<div>
			<Header
				className='header'
				title='React Task Tracker'
				showAddTask={showAddTask}
				onShowAddTask={toggleAddTask}
			/>

			{
				showAddTask
					? <AddTask onAdd={addTask} />
					: null
			}

			{
				taskList.length > 0
					? <TaskList
						taskList={taskList}
						onDelete={deleteTask}
						onToggle={toggleReminder}
					/>
					: <p style={{ marginTop: 20 }}>No task to show</p>
			}

			<Footer />
		</div>
	)
}

export default Home;
