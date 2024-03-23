import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}
interface TaskFormState {
  title : string;
  description: string;
  dueDate: string;
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = { title: "", description: "", dueDate: new Date().toDateString() };
  }
  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
      description: this.state.description,
      dueDate: this.state.dueDate,
    };
    this.props.addTask(newTask);
    this.setState({ title: "" });
    this.setState({ description: "" });
    this.setState({ dueDate: new Date().toDateString() });
  };


  dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ dueDate: event.target.value });
  };

  descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ description: event.target.value });
  };

  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value });
  };

  render(){
    return (
      <div className='font-bold text-xl text-red-500 text-center'>
        Task form
        <form onSubmit={this.addTask}>
          <input type="text" className = "border-2 border-gray-500" id="todoTitle" required
          placeholder="Title" value={this.state.title} onChange={this.titleChanged}
          />
          <input type="text" className = "border-2 border-gray-500" id="todoDescription" required
          placeholder="Description" value={this.state.description} onChange={this.descriptionChanged}
          />
          <input type="date" className = "border-2 border-gray-500" id="todoDueDate" required
          placeholder="Due Date" value={this.state.dueDate} onChange={this.dueDateChanged}
          />
          <button type="submit" id="addTaskButton"
          className="bg-blue-500 hover:bg-blue-700 text-white ml-2 font-bold py-1 px-3 rounded">
            Add item
          </button>
        </form>
      </div>
    );
  }
}
 export default TaskForm;