import './TaskItem.css'

const TaskItem = ({ id, text, time, reminder }) => {
  return (
    <div className='task-item-container'>
      <p className='task-item'>{text}</p>
      <p className='task-item'>{time}</p>
      <p className='task-item'>{reminder}</p>
    </div>
  )
}

TaskItem.defaultProps = {
  text: 'default text',
  time: 'default time',
  reminder: false,
}

export default TaskItem