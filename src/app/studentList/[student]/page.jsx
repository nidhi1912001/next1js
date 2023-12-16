"use client"
// const Student = ( { params } ) => {
//   console.log(params,"params")
//
//   return (
//     <div>
//       <h4>Student Details</h4>
//       <p>Name:- {params.student} </p>
//     </div>
//   )
// }
//
// export default Student

import { useSearchParams } from 'next/navigation'

export default function SearchBar() {
  const searchParams = useSearchParams()
  console.log(searchParams,"searchParams")

  const name = searchParams.getAll('name')
  console.log(name,"nammeeee")
  const age=searchParams.get('age')

  // URL -> `/dashboard?search=my-project`
  // `search` -> 'my-project'
  return <>Search: {name} and age is {age}</>
}