import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';

const Json = () => {
    const [users, setUsers]= useState(null);

    useEffect(()=>{
        axios.get('https://reqres.in/api/users?page=2')
        .then(res=>setUsers(res.data))
        .catch(e=>console.log(e));
    },[]);
    console.log(users);

  return (
    <div className='container'>
        {
            users?(
                users.data.map(user=>
                <div className="user__container">
                    
                <p className='user__title'>{user.first_name} {user.last_name}</p>
                <img src={user.avatar} />
                
                </div>
                )
            ):(<h1>No Users found</h1>)
        }
    </div>
  )
}

export default Json