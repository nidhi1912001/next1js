"use client"
import React, { useCallback, useEffect, useState } from 'react';
import UserName from './username/page';

// client side//
const UserList = () => {
  const [ user, setUser ] = useState( []);

  useEffect( () => {
    fetchDataApi()
  }, []);

  const fetchDataApi =async () => {
    try {
      let data = await fetch( "https://jsonplaceholder.typicode.com/users" );
      let response = await data.json();
      setUser( response );
    }
    catch (e) {
      console.log( 'error::', e );
    }
  };

  return (
    <>
      {user?.map((user) => {
        return (
          <li key={user?.id}>
            {user?.name}
            <UserName username={user?.username} />
          </li>
        )
      })}
    </>
  )
}
export default UserList


// import UserName from "./username/page";
//
// const users = async () => {
//   let data = await fetch( "https://jsonplaceholder.typicode.com/users" )
//   data = await data.json()
//   return data
//
// }
//
// const UserList = async () => {
//   let userData = await users()
//
//   return (
//    <>
//      {userData.map((user)=>{
//        return (
//          <li>
//            {user.name}
//            <UserName username={user.username}/>
//            </li>
//        )
//
//      })}
//      </>
//   )
// }
//
// export default UserList