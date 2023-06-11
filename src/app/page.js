"use client";

import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Home() {

  const {data:session ,status} = useSession();

  const handleGoogleSignin = async () => {
    signIn("google", {
      callbackUrl: "http://localhost:3000",
    });
  }

  return (
    <>
      <div className="my-4 md:w-1/3 sm:w-1/2 w-1/2 mx-auto ">
        <h1 className="text-2xl">Hello to our ToDos App</h1>
        {
          status==="authenticated" ? 
          <>
            <p>Welcome {session?.user.name}</p>
            <p>Logged in as {session?.user.email}</p>
            <button className="mt-8 px-4 py-1 bg-slate-200 rounded-md" type="button" onClick={()=> signOut()}>Logout</button>
          </>: 
          
          <>
            <button className="mt-8 px-8 py-1 bg-slate-50 rounded-md" type="button" onClick={handleGoogleSignin}>Sign in with GOOGLE</button>
          </>
        }
        
      </div>
    </>
  )
}
