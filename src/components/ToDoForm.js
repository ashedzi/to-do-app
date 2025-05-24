import { useEffect, useState } from "react";

function ToDoForm({ tasks, inputValue, editingId, dispatch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      dispatch({ type: "EDIT_TASK", payload: { id: editingId, name: inputValue } });
    } else {
      dispatch({ type: "ADD_TASK", payload: inputValue });
    }
    dispatch({ type: "RESET_INPUT" });
  };

  return (
    <form className="flex form-container center" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Task"
        value={inputValue}
        onChange={(e) => dispatch({ type: "UPDATE_INPUT", payload: e.target.value })}
        className={`input ${editingId ? "input-focused" : ""}`}
        maxLength={30}
        required
        autoFocus
      />
      <button type="submit">{editingId ? "Update" : "Add Task"}</button>
    </form>
  );
}

export default ToDoForm;