import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}
interface TaskFormState {
  title : string;
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = { title: "" };
  }
  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
    };
    this.props.addTask(newTask);
    this.setState({ title: "" });
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
          <input type="text" className = "border-2 border-gray-500" 
            value={this.state.title} onChange={this.titleChanged}
          />
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white ml-2 font-bold py-1 px-3 rounded"
          >Add item</button>
        </form>
      </div>
    );
  }
}
 export default TaskForm;