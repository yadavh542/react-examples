import React, { useState } from 'react';
// import './Tree.css';

const Onetree = ({label, children}) => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle=() => {
        setExpanded(!expanded);
    };

  return (
    <div className='tree-node' style={{display:'flex', alignItems:'center', flexDirection:'column',position:'relative'}}>
        {/*children && (
            <div
            style={{
                borderLeft:'1px solid #ccc',
                height: expanded? '100%' : '20px',
                marginLeft:'10px',
                marginRight:'10px',
            }}
            />
        )*/}
        <div 
        onClick={handleToggle} 
        style={{
            cursor:'pointer',
            background: expanded? '#ddd' : '#fff',
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '5px 10px',marginBottom: '10px',
            textAlign:'center',
        }}>
            {expanded? "-":"+"}{label}
        </div>
        {expanded && children && (
            <div style={{marginLeft:'100px'}}>
        { children.map((child)=>(
            <Onetree key={child.label} {...child}/>
        ))}
        </div>)}
    </div>
  )
}

export default Onetree