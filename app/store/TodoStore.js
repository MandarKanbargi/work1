import { create } from "zustand";

const useTodoStore = create((set) => ({
  todos: [],
  selectedTodo: null,

  setSelectedTodo: (todo) => set({ selectedTodo: todo }),

  deleteTodo: (title) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.title !== title),
      selectedTodo: null, // Clear selected TODO after delete
    })),

  updateTodo: (oldTitle, updatedTodo) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.title === oldTitle ? updatedTodo : todo
      ),
      selectedTodo: updatedTodo, // Update selected TODO in UI
    })),
}));

export default useTodoStore;
