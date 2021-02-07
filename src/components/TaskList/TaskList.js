import TaskItem from './TaskItem/TaskItem'

const TaskList = ({ taskList, onDelete, onToggle }) => {

  return (
    <div style={{ marginTop: 40 }}>
      {
        taskList.map((el) =>
          <TaskItem
            key={el.id}
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