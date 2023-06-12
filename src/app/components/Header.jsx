"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { useTheme } from 'next-themes'
import { BiSun, BiMoon } from "react-icons/bi";

const Header = () => {
  const { data: session } = useSession();
  const { theme, setTheme } = useTheme();

  const getThemeType = (e) =>{
    setTheme(e.target.value);
  }

  return (
    <>
      <div className="flex gap-x-8 justify-center py-4 bg-slate-700">
        <Link
          href="/"
          className="text-lg px-4 py-1 shadow shadow-slate-500 hover:shadow-lg rounded-md text-slate-50"
        >
          Home
        </Link>

        {
          session?(<Link
            href="/todos"
            className="text-lg px-4 py-1 shadow shadow-slate-500 hover:shadow-lg rounded-md text-slate-50"
          >
            Todos
          </Link>):null
        }

        <button className="px-2 py-2 rounded-full bg-slate-800" onClick={()=> theme == "light" ? setTheme("dark") : setTheme("light")}>{theme == "light" ? <BiSun size={24} color="white" /> : <BiMoon size={24} />}</button>
      </div>
    </>
  );
};

export default Header;
