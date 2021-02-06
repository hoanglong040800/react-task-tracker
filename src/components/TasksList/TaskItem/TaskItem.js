import './TaskItem.css'
import { TiDelete } from "react-icons/ti";
import { BsAlarmFill, BsAlarm } from "react-icons/bs"

const TaskItem = ({ task, onDelete, onToggle }) => {
  return (

    <div className='task-item__container' >

      {/* Reminder */}
      <div
        className="task-item__reminder"
        onClick={() => onToggle(task.id)}
        style={{
          backgroundColor: task.reminder ? 'var(--primary-color)' : 'lightgray',
          color: task.reminder ? '#fff' : '#333',
        }}
      >
        <BsAlarm
          className='icon-alarm'
        />
      </div>

      {/* Main Content */}
      <div className='task-item__main'>
        <div className="task-item__text">
          <h4 className='task-item'>{task.text}</h4>
          <p className='task-item'>{task.time}</p>
        </div>

        <TiDelete
          className='icon-del'
          onClick={() => onDelete(task.id, task.text)}
        />
      </div>

    </div>

  )
}

TaskItem.defaultProps = {
  text: 'default text',
  time: 'default time',
  reminder: false,
}

export default TaskItem