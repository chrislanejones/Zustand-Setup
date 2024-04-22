import React from "react";
import useTodoStore from "../../store/todoStore";
import { motion } from "framer-motion";

const TodoItem = (todo) => {
  const { removeTodo, toggleTodo } = useTodoStore();
  const variants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 0, y: 0 },
  };
  return (
    <motion.li
      variants={variants}
      initial="initial"
      animate="animate"
      className={`flex items-center p-2`}
      Layout
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="form-checkbox h-5 w-5"
      />
      <span className={`flex-1 ml-2 ${todo.completed ? "line-through" : ""}`}>
        {todo.text}
      </span>
    </motion.li>
  );
};

export default TodoItem;
