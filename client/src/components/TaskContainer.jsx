import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function TaskContainer({
  tasks,
  setInputs,
  onDelete,
  editId,
  onStartEdit,
  onEdit,
  onCancelEdit,
  formMode,
  onSubmit,
  onCancelAdd,
  onOpenAddForm,
}) {
  return (
    <div className="flex flex-col items-center pt-4 w-full">
      {formMode === null && (
        <div>
          <TaskForm mode="add" onSubmit={onSubmit} onCancel={onCancelAdd} />
        </div>
      )}
      {formMode === "add" && (
        <div>
          <TaskForm mode="add" onSubmit={onSubmit} onCancel={onCancelAdd} />
        </div>
      )}
      {formMode === "edit" && (
        <div>
          <TaskForm
            mode="edit"
            intialValue={tasks.find((task) => task.id === editId)?.task || ""}
            onSubmit={(text) => onEdit(editId, text)}
            onCancel={onCancelEdit}
          />
        </div>
      )}
      <TaskList tasks={tasks} onDelete={onDelete} onStartEdit={onStartEdit} />
    </div>
  );
}

export default TaskContainer;
