import React, { useState } from "react";
import { Circle, CircleCheck, EditIcon } from "lucide-react";

function TaskList({ tasks, onDelete, onStartEdit }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="flex flex-col items-center pt-4 w-full">
      <ul className="w-full max-w-xl list-inside space-y-1 text-lg pt-2 ml-0 px-4">
        {tasks?.map((task) => (
          <li
            key={task.id}
            className="group mb-2 text-left pl-2 border-b border-gray-200 p-2 "
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onDelete(task.id)}
                  onMouseEnter={() => setHoveredId(task.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="text-gray-400 transition hover:text-orange-600"
                >
                  {hoveredId === task.id ? (
                    <CircleCheck className="h-5.5 w-5.5" strokeWidth={1} />
                  ) : (
                    <Circle className="h-5.5 w-5.5" strokeWidth={1} />
                  )}
                </button>
                <span className="text-sm">{task.task}</span>
              </div>
              <button
                onClick={() => onStartEdit(task)}
                className="
                    hidden
                    group-hover:block
                    text-gray-400
                    hover:text-gray-700
                    cursor-pointer"
              >
                <EditIcon className="h-5 w-5" strokeWidth={1} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
