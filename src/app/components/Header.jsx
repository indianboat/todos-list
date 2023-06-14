"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { useTheme } from 'next-themes'
import { TbMoonFilled, TbSunFilled } from "react-icons/tb"

const Header = () => {
  const { data: session } = useSession();
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="flex gap-x-8 justify-center place-items-center py-4 bg-slate-700">
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

        <button className="px-2 py-2 rounded-full bg-slate-800" onClick={()=> theme == "light" ? setTheme("dark") : setTheme("light")}>{theme == "light" ? <TbSunFilled size={20} color="white" /> : <TbMoonFilled size={20} />}</button>
      </div>
    </>
  );
};

export default Header;
