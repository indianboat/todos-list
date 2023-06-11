import React from "react";
import AddTodo from "../components/AddTodo";
import { getAllTodos } from "../../../lib/todoscollection";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";


const Todos = async () => {

  const session = await getServerSession(authOptions);
  const { todos } = await getAllTodos(session?.user.email);

  return (
    <>
      <div className="my-6 p-5 shadow rounded-md md:w-[520px] sm:w-[480px] w-full mx-auto ">
        <p className="mb-4 text-xl drop-shadow">Todos</p>

        <AddTodo />

        <div className="my-6 gap-y-3 flex flex-col">
          {todos
            ?.map((todo) => {
              return (
                <h2
                  key={todo._id}
                  className="p-2 hover:bg-yellow-100 text-sm text-yellow-600 rounded-xl"
                >
                  {todo.desc}
                </h2>
              );
            })
            .reverse()}
        </div>
      </div>
    </>
  );
};

export default Todos;
