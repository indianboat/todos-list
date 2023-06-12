import clientPromise from "./db";
import { ObjectId } from "mongodb";

let client;
let db;
let todos;

async function init(){
  if (db) return
  try {
    client = await clientPromise;
    db = await client.db("todos");
    todos = await db.collection("tasks");
  } catch (error) {
    throw new Error("Failed to connect to the database.")
  }
}

(async () => {
  await init();
})


//CRUD operations

//get all todos
export async function getAllTodos(email){
  try {
    if(!todos) await init();

    const result = await todos.find({ email }).map((todo)=> ({...todo, _id:todo._id.toString()})).toArray()
    return { todos: result}

  } catch (error) {
    return { error: 'Failed to fetch todos!' }
  } 
}


//create todo
export async function createTodo(task, email){
  try {
    if(!todos) await init();

    return await todos.insertOne({ desc:task, email, isCompleted:false, createdAt: new Date(Date.now()) })
  } catch (error) {
    return { error: 'Failed to create todo!' }
  }
}

//delete todo
export async function deleteTodo(id){
  try {
    if(!todos) await init();

    return await todos.deleteOne({ _id: new ObjectId(id) })
  } catch (error) {
    return { error: 'Failed to delete todo!' }
  }
}

//update todo
export async function updateTodo(id){
  try {
    if(!todos) await init();

    return await todos.findOneAndUpdate({ _id: new ObjectId(id)}, {$set: {isCompleted: true}})
  } catch (error) {
    return { error: 'Failed to update todo!' } 
  }
}