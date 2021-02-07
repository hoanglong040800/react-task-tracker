import TaskItem from './TaskItem/TaskItem'

const TaskList = ({ taskList, onDelete, onToggle }) => {

  return (
    <div style={{ marginTop: 40 }}>
      {
        taskList.map((el, index) =>
          <TaskItem
            key={index}
            task={el}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        )
      }
    </div>
  )
}

export default TaskList