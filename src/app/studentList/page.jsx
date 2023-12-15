import Link from "next/link";
import { useRouter } from "next/navigation";


const StudentList = () => {

  const students = [ "anil", "Suresh", "Ramesh", "Bharghav" ]

  return (
    <>
      <p>Studentlist</p>

      {students.map( ( name,index ) => {
        return (
          <li>
            <Link href={`/studentList/${name}`}>{name}</Link>
          </li>

        )
      } )}





    </>
  )
}
export default StudentList