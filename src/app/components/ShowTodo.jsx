"use client";

import { Delete, TickSquare } from "react-iconly";
import { deleteTask } from "./DeleteTodo";
import { updateTask } from "./UpdateTodo";

const ShowTodo = ({ todos }) => {


  return (
    <>
      <div className="my-6 gap-y-3 flex flex-col">
        {todos
          ?.map((todo) => {
            return (
              <div className="rounded-xl border border-gray-200 shadow p-2" key={todo._id}>
                <div
                  className={`p-2 ${
                    todo?.isCompleted
                      ? "bg-green-100"
                      : "bg-yellow-100"
                  } text-sm ${
                    todo?.isCompleted ? "text-green-600" : "text-yellow-600"
                  } rounded-xl flex justify-between place-items-center`}
                >
                  <h2 className="text-justify p-2 pr-3">{todo.desc}</h2>

                  <div className="m-0 flex justify-between place-items-center gap-x-2">
                    <button
                      onClick={() => deleteTask(todo._id)}
                      className="text-red-700 p-1 transition-all rounded-lg hover:bg-red-300"
                      title="Delete"
                    >
                      <Delete size={16} />
                    </button>
                    {todo?.isCompleted == true ? null : (
                      <button
                        onClick={() => updateTask(todo._id)}
                        className="text-green-700 transition-all p-1 rounded-lg hover:bg-green-300"
                        title="Mark Completed"
                      >
                        <TickSquare size={16} />
                      </button>
                    )}
                  </div>
                </div>
                <span className="text-xs px-2 text-gray-400">{todo?.createdAt.toDateString()} {todo?.createdAt.toLocaleTimeString().toLowerCase()}</span>
              </div>
            );
          })
          .reverse()}
      </div>
    </>
  );
};

export default ShowTodo;
