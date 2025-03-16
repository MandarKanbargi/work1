"use client";
import TodoList from "./components/Sidebar";
import TodoDetails from "./components/TodoDetail";

export default function Home() {
  return (
    <div className="flex h-screen">
      <TodoList />
      <TodoDetails />
    </div>
  );
}
