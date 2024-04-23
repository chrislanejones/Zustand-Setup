import useTodoStore from "../store/todoStore";
import TodoItem from "./TodoItem";
import { AnimatePresence } from "framer-motion";

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);
  return (
    <AnimatePresence>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </AnimatePresence>
  );
};

export default TodoList;
