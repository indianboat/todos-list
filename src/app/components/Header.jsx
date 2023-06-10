import Link from "next/link"


const Header = () => {
  return (
    <>
      <div className="flex gap-x-8 justify-center py-4 bg-slate-700">
        <Link href="/" className="text-lg px-4 py-1 shadow shadow-slate-500 hover:shadow-lg rounded-md text-slate-50">Home</Link>
        <Link href="/todos" className="text-lg px-4 py-1 shadow shadow-slate-500 hover:shadow-lg rounded-md text-slate-50">Todos</Link>
      </div>
    </>
  )
}

export default Header