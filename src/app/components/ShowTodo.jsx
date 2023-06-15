"use client";

import { Calendar, Delete, TickSquare } from "react-iconly";
import { deleteTask } from "./DeleteTodo";
import { updateTask } from "./UpdateTodo";
import { useEffect, useState } from "react";
import { TbSortAscending, TbSortDescending } from "react-icons/tb";

const ShowTodo = ({ todos }) => {
  const [sortingOrder, setSortingOrder] = useState("lo");

  useEffect(() => {
    const storedSortingOrder = localStorage.getItem("sortingOrder");
    if (storedSortingOrder) {
      setSortingOrder(storedSortingOrder);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("sortingOrder", sortingOrder);
  }, [sortingOrder]);


  // let now = new Date().toDateString();
  // let then = todos[0].createdAt.toDateString();
  // console.log(now == then);


  return (
    <>
      <div className="my-6 gap-y-3 flex flex-col">
        <div className="flex justify-between">
          <button
            className="p-2 rounded-full text-slate-600 bg-slate-200 dark:bg-slate-950"
            onClick={() =>
              sortingOrder == "lo"
                ? setSortingOrder("ol")
                : setSortingOrder("lo")
            }
          >
            {sortingOrder === "lo" ? (
              <TbSortAscending title="Latest to Old" size={24} />
            ) : (
              <TbSortDescending title="Old to Latest" size={24} />
            )}
          </button>
          <button className="p-2 rounded-full text-slate-600 bg-slate-200 dark:bg-slate-950">
            <Calendar title="Latest to Old" size={24}/>
          </button>
        </div>

        {sortingOrder === "lo"
          ? todos
              ?.map((todo) => {
                return (
                  <div
                    className="rounded-xl border dark:border-0 bg-white dark:bg-gray-900 border-gray-200 shadow p-2"
                    key={todo._id}
                  >
                    <div
                      className={`p-2 ${
                        todo?.isCompleted ? "bg-green-100" : "bg-yellow-100"
                      } text-sm ${
                        todo?.isCompleted ? "text-green-600" : "text-yellow-600"
                      } rounded-lg flex justify-between place-items-center`}
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
                    <div className="flex justify-between mt-2">
                      <span className="text-xs px-2 text-gray-400 italic">
                        {todo?.createdAt.toDateString()}
                        {todo?.createdAt.toLocaleTimeString().toLowerCase()}
                      </span>
                      {todo?.isCompleted === true ? (
                        <span className="text-xs px-2 py-1 rounded-xl text-green-700 dark:text-green-400 italic bg-green-200 dark:bg-green-900">
                          Done
                        </span>
                      ) : (
                        <span className="text-xs px-2 py-1 rounded-xl text-yellow-700 dark:text-yellow-400 italic bg-yellow-100 dark:bg-yellow-900">
                          Pending
                        </span>
                      )}
                    </div>
                  </div>
                );
              })
              .reverse()
          : todos?.map((todo) => {
              return (
                <div
                  className="rounded-xl border dark:border-0 bg-white dark:bg-gray-900 border-gray-200 shadow p-2"
                  key={todo._id}
                >
                  <div
                    className={`p-2 ${
                      todo?.isCompleted ? "bg-green-100" : "bg-yellow-100"
                    } text-sm ${
                      todo?.isCompleted ? "text-green-600" : "text-yellow-600"
                    } rounded-lg flex justify-between place-items-center`}
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
                  <div className="flex justify-between mt-2">
                    <span className="text-xs px-2 text-gray-400 italic">
                      {todo?.createdAt.toDateString()}{" "}
                      {todo?.createdAt.toLocaleTimeString().toLowerCase()}
                    </span>
                    {todo?.isCompleted === true ? (
                      <span className="text-xs px-2 py-1 rounded-xl text-green-700 italic bg-green-100 dark:bg-green-200 ">
                        Done
                      </span>
                    ) : (
                      <span className="text-xs px-2 py-1 rounded-xl text-gray-700 italic bg-slate-100 dark:bg-slate-200 ">
                        Pending
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
      </div>
    </>
  );
};

export default ShowTodo;
