'use server';

import { revalidatePath } from "next/cache";
import { createTodo } from "../../lib/todoscollection";
 
export async function create(formData){
  const task = formData.get('task');
  await createTodo(task);
  revalidatePath('/todos')
}
