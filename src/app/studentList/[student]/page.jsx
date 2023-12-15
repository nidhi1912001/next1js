"use client"
const Student = ( { params } ) => {
  console.log(params,"params")

  return (
    <div>
      <h4>Student Details</h4>
      <p>Name:- {params.student} </p>
    </div>
  )
}

export default Student