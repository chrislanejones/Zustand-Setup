import React from "react";
import useTodoStore from "../../store/todoStore";
import { motion } from "framer-motion";

const TodoItem = () => {
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
    ></motion.li>
  );
};

export default TodoItem;
