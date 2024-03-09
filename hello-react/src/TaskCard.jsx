import './TaskCard.css'

const TaskCard = (props) => {
  return (
    <div className="TaskItem text-center">
      <h2 className="text-xl font-bold text-blue-900">{props.title}</h2>
      {(props.dueDate) ? <p>Due: {props.dueDate}</p> : <p>Completed on: {props.completedAtDate}</p>}
      <p>Assignee: {props.assigneeName}</p>
    </div>
  )
}

export default TaskCard