"use client";

import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Home() {

  const {data:session ,status} = useSession();

  const handleGoogleSignin = async () => {
    signIn("google", {
      callbackUrl: "https://todos-list-jet.vercel.app/",
    });
  }

  return (
    <>
      <div className="my-4 p-4 justify-center grid">
        {
          status==="authenticated" ? 
          <>
            <div className="text-center">
            <p>Welcome {session?.user.name}</p>
            <p>Logged in as <span className="text-gray-500">{session?.user.email}</span></p>
            </div>
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
