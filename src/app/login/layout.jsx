"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Layout = ( { children } ) => {

   // const pathName=usePathname()

  return (
    <>
      <div>
        <Link href={"/login/loginStudent"}> Go to Login student Page</Link>
        <Link href={"/login/loginTeacher"}> Go to Login Teacher Page</Link>
        {children}
      </div>


     {/* {pathName != "/login/loginTeacher" ?*/}
     {/*   <div>*/}
     {/*     <Link href={"/login/loginStudent"}> Go to Login student Page</Link>*/}
     {/*     <Link href={"/login/loginTeacher"}> Go to Login Teacher Page</Link>*/}
     {/*   </div>*/}
     {/*: null }*/}
     {/* {children}*/}
    </>
  )
}
export default Layout