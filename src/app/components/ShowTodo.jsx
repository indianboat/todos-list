"use client";

import { Delete, TickSquare } from "react-iconly";
import { deleteTask } from "./DeleteTodo";

const ShowTodo = ({todos}) => {

  return (
    <>
      <div className="my-6 gap-y-3 flex flex-col">
        {todos
          ?.map((todo) => {
            return (
              <div key={todo._id} className="p-2 hover:bg-yellow-50 text-sm text-yellow-600 rounded-xl flex justify-between place-items-center">
                <h2
                  
                >
                  {todo.desc}
                </h2>
                <div className="m-0 flex justify-between place-items-center gap-x-2">
                <button onClick={() => deleteTask(todo._id)} className="text-red-700 p-1 transition-all rounded-lg hover:bg-red-300" title="Delete"><Delete size={16} /></button>
                <button disabled className="text-green-700 transition-all p-1 rounded-lg hover:bg-green-300" title="Completed"><TickSquare size={16} /></button>
                </div>
              </div>
            );
          })
          .reverse()}
      </div>
    </>
  );
};

export default ShowTodo;
