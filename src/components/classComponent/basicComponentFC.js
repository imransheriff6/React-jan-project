import axios from "axios";
import { useEffect, useState } from "react"

function BasicComponentFC(){
    const [data,setData] = useState([]);
    const [data1,setData1] = useState('Hello');
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .finally(()=>{
            // setLoading(false)
        })
        .then((res)=>{
            setData(res.data) 
        })
        .catch(()=>{
            setData([])
        })
    },[])
    return (
    <>
    {/* <h1>{data}</h1> */}
    <button onClick={()=>setData("Welcome")}>Change</button>
    {
        data.map((ele)=>{
            return <h1>{ele.username}</h1>
        })
    }
    </>
    )
}
export default BasicComponentFC