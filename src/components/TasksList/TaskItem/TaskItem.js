import './TaskItem.css'
import { TiDelete } from "react-icons/ti";
import { BsAlarmFill, BsAlarm } from "react-icons/bs"

const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <div className='task-item-container'>

      <div className="task-item__text">
        <h4 className='task-item'>{task.text}</h4>
        <p className='task-item'>{task.time}</p>
        {
          task.reminder
            ? (
              <BsAlarmFill
                className='icon-alarm'
                onClick={() => onToggle(task.id)}
              />
            ) : (
              <BsAlarm
                className='icon-alarm'
                onClick={() => onToggle(task.id)}
              />
            )
        }
      </div>

      <TiDelete
        className='icon-del'
        onClick={() => onDelete(task.id, task.text)}
      />
    </div>
  )
}

TaskItem.defaultProps = {
  text: 'default text',
  time: 'default time',
  reminder: false,
}

export default TaskItem