import TaskItem from './TaskItem/TaskItem'

const taskList = [
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

const TasksList = () => {
  return (
    <>
      {
        taskList.map((el) => (
          <TaskItem id={el.id} text={el.text} time={el.time} reminder={el.reminder} />
        ))
      }
    </>
  )
}

export default TasksList