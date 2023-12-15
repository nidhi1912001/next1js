import UserName from "./username/page";

const products = async () => {
  let data = await fetch( "https://jsonplaceholder.typicode.com/users" )
  data = await data.json()
  return data

}

const UserList = async () => {
  let userData = await products()

  return (
   <>
     {userData.map((user)=>{
       return (
         <li>
           {user.name}
           <UserName username={user.username}/>
           </li>
       )

     })}
     </>
  )
}

export default UserList