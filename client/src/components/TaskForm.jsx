import { AlarmClock, ArrowUp, CheckIcon, EditIcon, XIcon } from "lucide-react";
import React, { useState } from "react";

function TaskForm({
  mode = "add",
  intialValue = "",
  onSubmit,
  onCancel,
  toggle,
}) {
  const [value, setValue] = useState(intialValue);
  const [showCalender, setShowCalender] = useState("");

  function handleSubmit() {
    if (value.trim() === "") {
      return alert("Write Your Task");
    }
    onSubmit(value.trim());
    setValue("");
  }

  function handleCancel() {
    if (mode === "edit") {
      onCancel();
      return;
    }
    if (value.trim() === "") {
      onCancel();
      return;
    }
    setValue("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  }

  return (
    <div className="flex justify-center p-4 w-full">
      <div className="w-full max-w-xl overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm ">
        <textarea
          className="autofocus w-full h-30 resize-none border-0 bg-transparent px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-0"
          value={value}
          placeholder={mode === "edit" ? "" : "Add task"}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <div className="flex items-center justify-between border-t border-gray-200 bg-gray-50 px-3 py-2.5">
          <div className="flex items-center gap-2 focus:outline-none focus:ring-0">
            <input
              type="date"
              value={showCalender}
              onChange={(e) => setShowCalender(e.target.value)}
              className="flex items-center gap-1 rounded-md border border-gray-200 bg-white px-2.5 py-1.5 text-sm text-gray-500 transition hover:bg-gray-100 hover:text-gray-600 cursor-pointer"
            />
            <button className="flex items-center gap-1 rounded-md border border-gray-200 bg-white px-2.5 py-1.5 text-sm text-gray-500 transition hover:bg-gray-100 hover:text-gray-600 cursor-pointer">
              <AlarmClock className="h-4 w-4 text-gray-400" />
              Reminders
            </button>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleCancel}
              className="rounded-md p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600 cursor-pointer"
            >
              <XIcon className="h-7 w-7" strokeWidth={1} />
            </button>
            <button
              onClick={handleSubmit}
              className="flex items-center justify-center rounded-md bg-red-600 p-2 text-white transition hover:bg-red-700 cursor-pointer"
            >
              {mode === "edit" ? (
                <CheckIcon className="w-5 h-5" />
              ) : (
                <ArrowUp className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskForm;
