'use client'
import styles from './page.module.css'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router=useRouter()

  const navigate=()=>{
    router.push("/login")


  }


  return (
    <main>
      <h1>Welcome</h1>

      <Link href="/login"> Go to Login Page</Link>
      <br/>
      <br/>
      <button onClick={()=>navigate()}> Go to Login Page </button>

    </main>
  )
}
