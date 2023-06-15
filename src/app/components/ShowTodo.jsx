"use client";

import { useEffect, useState } from "react";
import { TbSortAscending, TbSortDescending } from "react-icons/tb";
import ShowOneTodo from "./ShowOneTodo";
import ErrorMsg from "./ErrorMsg";

const ShowTodo = ({ todos }) => {

  const [sortingOrder, setSortingOrder] = useState("lo");

  useEffect(() => {
    const storedSortingOrder = localStorage.getItem("sortingOrder");
    if (storedSortingOrder) {
      setSortingOrder(storedSortingOrder);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("sortingOrder", sortingOrder);
  }, [sortingOrder]);

  //handleSortFilter
  const [filter, setFilter] = useState("all");

  const handleOptionChange = (event) =>{
    setFilter(event.target.value);
  }

  const filteredData = todos.filter((todo)=>{
    if(filter === 'all'){
      return todo
    } else if(filter === "done"){
      return (todo.isCompleted === true)
    } else if(filter === "pending"){
      return (todo.isCompleted === false)
    }
  })

  return (
    <>
      <div className="my-6 gap-y-3 flex flex-col">
        <div className="flex justify-between">
          <button
            className="p-2 rounded-full text-slate-600 bg-slate-200 dark:bg-slate-950"
            onClick={() =>
              sortingOrder == "lo"
                ? setSortingOrder("ol")
                : setSortingOrder("lo")
            }
          >
            {sortingOrder === "lo" ? (
              <TbSortAscending title="Latest to Old" size={24} />
            ) : (
              <TbSortDescending title="Old to Latest" size={24} />
            )}
          </button>

          <div className="flex">
          <select name="sortby" value={filter} onChange={handleOptionChange} placeholder="Sort by completion" className="p-2 outline-none bg-slate-200 dark:bg-slate-950 rounded-md">
            <option className="text-slate-900 dark:text-slate-400" value="all">All</option>
            <option className="text-slate-900 dark:text-slate-400" value="done">Done</option>
            <option className="text-slate-900 dark:text-slate-400" value="pending">Pending</option>
          </select>
          </div>
        </div>
        
        {
          todos.length <= 0 ? <div className="p-2 rounded-lg bg-slate-400 text-slate-900 dark:bg-slate-900 dark:text-slate-400 flex justify-center">No task for now</div> : (
            sortingOrder === "lo"
          ? filteredData?.map((todo) => { return ( <ShowOneTodo todo={todo} key={todo._id} /> )}).reverse()
          : filteredData?.map((todo) => { return ( <ShowOneTodo todo={todo} key={todo._id} /> )})
          )
        }
      </div>

      <ErrorMsg/>
    </>
  );
};

export default ShowTodo;
