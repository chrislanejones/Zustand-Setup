import "./App.css";
import AddTodoForm from "./componates/AddToDo";
import TodoList from "./componates/TodoList";

function App() {
  return (
    <>
      <main className="bg-gradient-to-r from-slate-900 to-slate-700">
        <div className="container mx-auto max-w-md h-screen py-6">
          <div className="h-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 p-2">
            <div className="flex flex-col p-4 rounded-lg shadow-lg h-full dark:bg-slate-800 ">
              <h1 className="text-2xl font-bold mb-4 text-white">Todo List</h1>
              <AddTodoForm />
              <TodoList />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
