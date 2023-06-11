"use server";

import { revalidatePath } from "next/cache";
import { deleteTodo } from "../../../lib/todoscollection";

export async function deleteTask(x){
  await deleteTodo(x);
  revalidatePath("/todos")
}