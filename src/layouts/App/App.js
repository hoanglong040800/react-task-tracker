import { useEffect, useState } from 'react'
import './App.css'
import './base.css'
import Header from '../../components/Header/Header'
import TaskList from '../../components/TaskList/TaskList'
import AddTask from '../../components/AddTask/AddTask'

const App = () => {
	const [showAddTask, setShowAddTask] = useState(false)

	const [taskList, setTaskList] = useState([])

	// useEffect
	useEffect(() => {


		getTaskList()
	}, [])

	// Get Tasks List
	const getTaskList = async () => {
		const response = await fetch('http://localhost:5000/taskList')
		const data = await response.json()
		setTaskList(data)
	}

	// Delete Task
	const deleteTask = (id) => {
		setTaskList(
			taskList.filter((el) => el.id !== id)
		)
	}

	// Toggle Reminder
	const toggleReminder = (id) => {
		setTaskList(
			taskList.map((el) =>
				el.id === id
					? { ...el, reminder: !el.reminder }
					: el
			)
		)
	}

	// Add Task
	const addTask = (task) => {
		const id = taskList
			? taskList[taskList.length - 1].id + 1
			: 1
		const newTask = { id, ...task }
		setTaskList([...taskList, newTask])
	}

	// Toggle Add Task
	const toggleAddTask = () => {
		setShowAddTask(!showAddTask)
	}


	return (
		<div className='container'>
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
		</div>
	)
}

export default App;
