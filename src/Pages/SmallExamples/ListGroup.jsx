import React, { useState } from 'react'

const ListGroup = () => {
    const [selectedItem, setselectedItem] = useState(0);
    const cities=['mumbai', 'New York', 'Tokyo', 'New Delhi', 'Paris'];

  return (<>
    <h2>List Group</h2>
    <ul className='list-group'>
        {cities?.map((item, index)=>(
            <>
            <li 
            key={item} 
            className={`list-group-item ${selectedItem===index && "active"}`} 
            role='button'
            onClick={()=>setselectedItem(index)}>
                {item}
            </li>
            {selectedItem===index && <div style={{height:'50px',color:'red'}}>Hi {item} </div>}
            </>
        ))}
    </ul>
    </>)
}

export default ListGroup