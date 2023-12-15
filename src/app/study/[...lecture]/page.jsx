"use client"

const Lecture=({params})=>{
  console.log( { params },"paramssss")

  return(
    <p>lecture 1 of the day {params.lecture[0]}  {params.lecture[1]} {params.lecture[2]}</p>
  )
}

export  default Lecture