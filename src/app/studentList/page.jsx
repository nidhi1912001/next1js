"use client"
import Link from "next/link";
import { useRouter }  from "next/router";


const StudentList = () => {
  const router=useRouter()
  console.log(router,"routerrrrr")

  const students = [ "anil", "Suresh", "Ramesh", "Bharghav" ]

  const handleclick=()=>{
    router.push({
      pathname: `/studentList/student`,
      query: { yourParameter: "name" },
    });
  }
  return (
    <>
      <p>Studentlist</p>

      {students.map( ( name,index ) => {
        return (
          <li>
            {/*<Link href={`/studentList/${name}`}>{name}</Link>*/}
            {/*<Link*/}
            {/*  href={{*/}
            {/*    pathname: `/studentList/student`,*/}
            {/*    query: {*/}
            {/*      name:name,*/}
            {/*      age:index*/}
            {/*    }*/}
            {/*  }}*/}
            {/*>{name}</Link>*/}

            <button onClick={handleclick}>{name}</button>
          </li>

        )
      } )}





    </>
  )
}
export default StudentList