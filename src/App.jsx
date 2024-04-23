import "./App.css";
import AddTodoForm from "./componates/addTodoForm";
import TodoList from "./componates/todoList";

function App() {
  return (
    <>
      <main className="dark:bg-slate-700">
        <div className="container mx-auto max-w-md h-screen py-6">
          <div className="flex flex-col p-4 border rounded-lg shadow-lg h-full dark:bg-slate-800">
            <h1 className="text-2xl font-bold mb-4 text-white">Todo List</h1>
            <AddTodoForm />
            <TodoList />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
