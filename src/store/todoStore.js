import { create } from "zustand";
const useTodoStore = create((set) => ({
  todos: [],
  addTodo: (text) =>
    set((state) => ({
      todos: [...state.todos, { text, completed: false, id: Date.now() }],
    })),

  removeTodo: (id) =>
    set((state) => ({ todos: state.todos.filter((e) => e.id !== id) })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((e) =>
        e.id === id ? { ...e, completed: !e.completed } : e
      ),
    })),
}));

export default useTodoStore;
