import "./App.css";
import AddTodoForm from "./componates/addTodoForm";
import TodoList from "./componates/todoList";

function App() {
  return (
    <>
      <div className="container mx-auto max-w-md h-screen py-6">
        <div className="flex felx-col p-4 border rounded-lg shadow-lg h-full">
          <h1 className="text-2xl font-bold mb-4">Todo List</h1>
          <AddTodoForm />
          <TodoList />
        </div>
      </div>
    </>
  );
}

export default App;
