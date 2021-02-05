import TaskItem from './TaskItem/TaskItem'

const TasksList = ({ tasksList, onDelete,onToggle}) => {

  return (
    <>
      {
        tasksList.map((el) =>
          <TaskItem
            key={el.id}
            task={el}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        )
      }
    </>
  )
}

export default TasksList