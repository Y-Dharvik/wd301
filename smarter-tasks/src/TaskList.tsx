import Task from "./Task";
import { TaskItem } from "./types";
interface Props {
  tasks: TaskItem[];
}
// interface State {}
// class TaskList extends React.Component<Props, State> {
  
//   render() {
//     return this.props.tasks.map((task, idx) => (
//       <Task key={idx} title={task.title} dueDate={task.dueDate} description={task.description}/>
//     ));
//   }
// }
// export default TaskList;

const TaskListFC = (props: Props) => {
  const list = props.tasks.map((task, idx) => (
    <Task key={idx} title={task.title} dueDate={task.dueDate} description={task.description}/>
  ));
  return <>{list}</>
}

export default TaskListFC;