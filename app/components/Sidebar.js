"use client";
import { useState } from "react";
import { Search } from "lucide-react"; // Importing search icon
import useTodoStore from "@/app/store/TodoStore";

const TodoList = () => {
  const { setSelectedTodo } = useTodoStore();
  const [searchQuery, setSearchQuery] = useState("");

  const todos = [
    {
      title: "New Additions",
      description: "To stay representative of framework & new example apps.",
      date: "July 7, 2023",
    },
    {
      title: "Bug Fixes",
      description: "Resolved known issues in the system.",
      date: "March 16, 2025",
    },
    {
      title: "UI Enhancements",
      description: "Improved UI elements for better user experience.",
      date: "February 10, 2025",
    },
    {
      title: "Performance Boost",
      description: "Optimized database queries for faster response times.",
      date: "January 5, 2025",
    },
    {
      title: "Security Update",
      description: "Implemented OAuth 2.0 authentication.",
      date: "December 20, 2024",
    },
  ];

  // Filter TODOs based on search query
  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-1/2 p-4">
      <h2 className="text-2xl font-bold mb-4">TODO List</h2>

      {/* Search Input with Icon */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search TODOs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 pl-10 border border-gray-300 rounded"
        />
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          size={20}
        />
      </div>

      {/* TODO List */}
      {filteredTodos.length > 0 ? (
        filteredTodos.map((todo, index) => (
          <div
            key={index}
            className="p-4 mb-2 bg-gray-100 rounded cursor-pointer hover:bg-gray-200"
            onClick={() => setSelectedTodo(todo)}
          >
            <h3 className="font-bold">{todo.title}</h3>
            <p>{todo.description}</p>
            <small>{todo.date}</small>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No TODOs found.</p>
      )}
    </div>
  );
};

export default TodoList;
