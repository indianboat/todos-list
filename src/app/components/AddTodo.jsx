"use client"

import React, {useRef} from "react";
import { create } from '../_actions';


const AddTodo = () => {

  const formRef = useRef()

  async function action(formData){
    await create(formData);
    formRef.current.reset();
  }

  return (
    <>
      <form ref={formRef} action={action}>
        <div className="flex md:flex-row sm:flex-row flex-col md:gap-x-4 sm:gap-x-4 gap-y-4">
          <input
            className=" shadow-md w-full py-2 px-5 outline-none rounded-full"
            type="text"
            name="task"
            placeholder="enter a task"
          />
          <button
            className="py-2 px-5 rounded-full shadow-md bg-rose-600 text-rose-100"
            type="submit"
          >
            create
          </button>
        </div>
      </form>
    </>
  );
};

export default AddTodo;
