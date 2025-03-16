"use client";
import { useState } from "react";
import useTodoStore from "@/app/store/TodoStore";
import { Trash2, Edit, Check } from "lucide-react"; // Icons for delete, edit, and save

const TodoDetails = () => {
  const { selectedTodo, deleteTodo, updateTodo, setSelectedTodo } =
    useTodoStore();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(selectedTodo?.title || "");
  const [editedDescription, setEditedDescription] = useState(
    selectedTodo?.description || ""
  );

  if (!selectedTodo) {
    return <p className="text-gray-500">Select a TODO to view details.</p>;
  }

  // Handle delete
  const handleDelete = () => {
    deleteTodo(selectedTodo.title);
    setSelectedTodo(null);
  };

  // Handle save after editing
  const handleSave = () => {
    updateTodo(selectedTodo.title, {
      title: editedTitle,
      description: editedDescription,
      date: selectedTodo.date, // Keep the same date
    });
    setIsEditing(false);
  };

  return (
    <div className="w-1/2 p-4 border-l flex flex-col">
      <div className="flex justify-between items-center">
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="text-xl font-bold border rounded p-1 w-full"
          />
        ) : (
          <h2 className="text-xl font-bold">{selectedTodo.title}</h2>
        )}

        <div className="flex space-x-2">
          {isEditing ? (
            <Check
              className="text-green-600 hover:text-green-800 cursor-pointer"
              onClick={handleSave}
              size={20}
            />
          ) : (
            <Edit
              className="text-blue-600 hover:text-blue-800 cursor-pointer"
              onClick={() => setIsEditing(true)}
              size={20}
            />
          )}

          <Trash2
            className="text-red-500 hover:text-red-700 cursor-pointer"
            onClick={handleDelete}
            size={20}
          />
        </div>
      </div>

      {isEditing ? (
        <textarea
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
          className="text-gray-600 mt-2 border rounded p-2 w-full"
        />
      ) : (
        <p className="text-gray-600 mt-2">{selectedTodo.description}</p>
      )}

      <small className="text-gray-400">{selectedTodo.date}</small>
    </div>
  );
};

export default TodoDetails;
