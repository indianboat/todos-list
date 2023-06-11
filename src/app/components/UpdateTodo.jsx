"use server";

import { revalidatePath } from "next/cache";
import { updateTodo } from "../../../lib/todoscollection";

export async function updateTask(x){
  await updateTodo(x);
  revalidatePath("/todos")
}