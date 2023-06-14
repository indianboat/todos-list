"use server"; 

import AddTodo from "../components/AddTodo";
import { getAllTodos } from "../../../lib/todoscollection";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import ShowTodo from "../components/ShowTodo";

const Todos = async () => {

  const session = await getServerSession(authOptions);

  if(!session){
    redirect("/")
  }

  const { todos } = await getAllTodos(session?.user.email);

  return (
    <>
      <div className="md:my-6 sm:my-6 my-0 p-5 shadow bg-gray-50 dark:bg-gray-800 md:rounded-md sm:rounded-md rounded-none md:w-[520px] sm:w-[480px] w-full mx-auto ">
        <p className="mb-4 text-xl text-black dark:text-white md:text-left sm:text-left text-center">Your Todos</p>
        <AddTodo />
        
        <ShowTodo todos={todos} />
      </div>
    </>
  );
};

export default Todos;
