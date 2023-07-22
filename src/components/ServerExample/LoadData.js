import { useEffect, useState } from "react"
import Child from "../StateExample/ArrayChild";
import axios from "axios";

function LoadData(){
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    function serverCall(){
        setLoading(true)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .finally(()=>{
            setLoading(false)
        })
        .then((res)=>{
            setData(res.data) 
        })
        .catch(()=>{
            setData([])
        })
    }
    useEffect(function(){
        
    },[])
    return(
        <>
        <button onClick={serverCall}>Load Data</button>
        {/* {data.length === 0 && <p>No data found</p>} */}
        {loading && <p>Loading....</p>}
        {
            data.map((ele)=>{
                return <Child information={ele}/>
            })
        }
        </>
    )
}
export default LoadData