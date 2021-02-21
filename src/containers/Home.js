import { useEffect, useState } from 'react'

import Header from '../components/Header/Header'
import TaskList from '../components/TaskList/TaskList'
import AddTask from '../components/AddTask/AddTask'
import Footer from '../components/Footer/Footer'


const Home = () => {
	const [showAddTask, setShowAddTask] = useState(false)

	const [taskList, setTaskList] = useState([])

	useEffect(() => {
		getTaskList()
	}, [taskList])

	const getTaskList = async () => {
		const response = await fetch('http://localhost:5000/taskList')
		const data = await response.json()
		setTaskList(data)

	}

	const addTask = async (task) => {
		await fetch('http://localhost:5000/taskList', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(task),
		})

		setShowAddTask(false)
	}

	const deleteTask = async (id) => {
		await fetch(`http://localhost:5000/taskList/${id}`, {
			method: 'DELETE',
		})
	}

	const fetchTask = async (id) => {
		const res = await fetch(`http://localhost:5000/taskList/${id}`)
		const data = await res.json()
		return data
	}

	const toggleReminder = async (id) => {
		const curTask = await fetchTask(id)
		const newTask = { ...curTask, reminder: !curTask.reminder }

		await fetch(`http://localhost:5000/taskList/${id}`, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(newTask)
		})
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
