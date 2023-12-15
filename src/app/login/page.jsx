"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter()
  const navigate = (page) => {
    router.push( `/login/${page}` )
  }


  return (
    <>
      <h1>Login</h1>

      <button onClick={() => navigate("loginStudent")}> Go to login Student page</button>
      <br/>
      <br/>
      <button onClick={() => navigate("loginTeacher")}> Go to login Teacher page</button>

      <br/>
      <br/>
      <Link href="/">Back to Home Page</Link>
    </>
  )
}

export default Login