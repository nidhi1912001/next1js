import { NextResponse } from "next/server";
const Middleware=(request)=>{
  if(request.nextUrl.pathname !== "/login"){
    return NextResponse.redirect(new URL("/login",request.url))
  }

  // return NextResponse.redirect(new URL("/login",request.url))



}
export const config={
  matcher:"/about"
}


  export default Middleware