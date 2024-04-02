import "./TaskCard.css";

interface TaskProps {
    title : string;
    description: string;
    dueDate: string;
}

// class Task extends React.Component<TaskProps> {
//   render() {
//     return (
//       <div className="TaskItem shadow-md border border-slate-100">
//         <h3 className="text-base font-bold my-1">{this.props.title} ({this.props.dueDate})</h3>
//           {this.props.description}
//       </div>
//     );
//   }
// }

// export default Task;

const TaskFC = (props: TaskProps) => {
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <h3 className="text-base font-bold my-1">{props.title} ({props.dueDate})</h3>
        {props.description}
    </div>
  );
}

export default TaskFC;