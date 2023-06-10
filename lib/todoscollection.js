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
export async function getAllTodos(){
  try {
    if(!todos) await init();

    const result = await todos.find({}).map((todo)=> ({...todo, _id:todo._id.toString()})).toArray()
    return { todos: result}

  } catch (error) {
    return { error: 'Failed to fetch todos!' }
  } 
}

//create todo
export async function createTodo(task){
  try {
    if(!todos) await init();

    return await todos.insertOne({ desc:task, isCompleted:false })
  } catch (error) {
    return { error: 'Failed to create todo!' }
  }
}