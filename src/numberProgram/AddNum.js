import React,{ useState} from 'react';

const AddNum = () => {
    const [result, setResult]= useState(0);
    const [num, setNum] = useState("");
    
    const adNum=(num) => {
        let str=num.toString();
        let arr=str.split("").map(n=>parseInt(n));
        let total=arr.reduce((a,b)=>a+b);
        if(total>10){
            adNum(total);
        }else{
            setResult(total);
        }
        
    }

       
        
  return (
    <div>
        <h2>{result}</h2>
        <button onClick={()=>setResult(()=>adNum(num))}>Click</button>
        <h3>{num}</h3>
        <input value={num} onChange={e=>setNum(e.target.value)}/>
    </div>
  )
}

export default AddNum;