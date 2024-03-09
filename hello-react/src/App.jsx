import TaskCard from "./TaskCard";

function App() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-red-500 text-center p-4">
        Smarter Tasks
      </h1>
      <p className="text-center text-lg font-semibold text-black-500 p-4">
        Manage your tasks with ease
      </p>

      <div className="auto flex grid gap-1 grid-cols-2 p-8">
        <div className="align-middle border-2 border-black-500 p-4 rounded-md shadow-md w-3/4 mx-auto">
          <h2 className="text-2xl font-bold text-blue-500 text-center p-2">
            Pending
          </h2>
          <TaskCard
            title="Task 1"
            dueDate="2024-03-13"
            assigneeName="John Doe"
          />
          <TaskCard
            title="Task 2"
            dueDate="2024-03-14"
            completedAtDate="2024-03-14"
            assigneeName="John Wick"
          />
        </div>
        <div className="align-middle border-2 border-black-500 p-4 rounded-md shadow-md w-3/4 mx-auto">
          <h2 className="text-2xl font-bold text-blue-500 text-center p-2">
            Done
          </h2>
          <TaskCard
            title="Task 3"
            completedAtDate="2024-03-08"
            assigneeName="John Wick"
          />
          <TaskCard
            title="Task 4"
            completedAtDate="2024-03-07"
            assigneeName="John Doe"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
