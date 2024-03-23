import React from 'react';
import "./TaskCard.css";

interface TaskProps {
    title : string;
    description: string;
    dueDate: string;
}

class Task extends React.Component<TaskProps> {
  render() {
    return (
      <div className="TaskItem shadow-md border border-slate-100">
        <h3 className="text-base font-bold my-1">{this.props.title} ({this.props.dueDate})</h3>
          {this.props.description}
      </div>
    );
  }
}

export default Task;