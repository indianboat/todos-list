"use server"; 
import AddTodo from "../components/AddTodo";
import { getAllTodos, deleteTodo } from "../../../lib/todoscollection";
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
      <div className="my-6 p-5 shadow rounded-md md:w-[520px] sm:w-[480px] w-full mx-auto ">
        <p className="mb-4 text-xl drop-shadow">Todos</p>
        <AddTodo />
        <ShowTodo todos={todos} />
      </div>
    </>
  );
};

export default Todos;
