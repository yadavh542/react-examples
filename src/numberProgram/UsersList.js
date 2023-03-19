import React, { useState } from 'react';
import { useEffect } from 'react';

const UsersList=()=>{
    const[users,setUsers] = useState([]);

    useEffect(()=>{
        const fetchUsers =async()=>{ 
        await fetch('https://reqres.in/api/users?page=2')
        .then(res=>res.json())
        .then(data=>setUsers(data))
        .catch(e=>e.message)}
        fetchUsers();
    },[])


    return(
        <div>
            {/* <h1 className='m-5'>Hello World</h1> */}
            <div className='top-20 m-20'> 
            {users && users?.data?.map(user=>(
                <p className='border border-2'>{user.email}</p>
            ))}
            </div>
        </div>
    );
}

export default UsersList;