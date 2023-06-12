"use client";

import React, { useRef } from "react";
import { create } from "../_actions";
import { useSession } from "next-auth/react";

const AddTodo = () => {
  const formRef = useRef();
  const { data: session } = useSession();

  async function action(formData) {
    await create(formData);
    formRef.current.reset();
  }

  return (
    <>
      <form ref={formRef} action={action}>
        <div className="flex md:flex-row sm:flex-row flex-col md:gap-x-4 sm:gap-x-4 gap-y-4">
          <textarea
            className="shadow-md w-full py-2 px-5 outline-none rounded-md"
            rows={4}
            name="task"
            placeholder="Enter a task"
            required
          />
          <input
            type="email"
            name="email"
            defaultValue={session?.user.email}
            hidden
          />
        </div>
        <div className="flex justify-end">
          <button
            className="py-2 mt-4 px-5 md:w-fit sm:w-full w-full rounded-full shadow-md bg-rose-600 text-rose-100"
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
