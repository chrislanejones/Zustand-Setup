import React, { useState } from "react";
import useTodoStore from "../../store/todoStore";

const AddTodoForm = () => {
  const [text, setText] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e) => {
    e.preventdefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };
  return (
    <form onSubmit={handleSubmit} className="flex justifed-between p-2">
      <input className="flex-1 p-2 border rounded" type="text" value={text} />
    </form>
  );
};

export default AddTodoForm;
