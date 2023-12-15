"use client"

const UserName=( { username })=>{

  return(
    <button onClick={()=>alert(username)}>show User-name</button>

  )
}
export default UserName