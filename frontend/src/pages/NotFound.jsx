import { Link } from "react-router-dom";
import { House} from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";



function NotFound() {

  const {authUser} = useAuthStore()

  return (
   <main className="min-h-screen grid place-items-center">
    <section className="text-center"> 
      <h1 className="text-8xl font-bold">404</h1>
      <p className="text-3xl mb-4">Page Not Found</p>
      <Link
      to={authUser ? "/discover" : '/'}
      className=" inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-500"
      >
        <House className="size-5" aria-hidden="true"/>
        <span>Go Home</span>

      </Link>
    </section>
   </main>
  )
}

export default NotFound
