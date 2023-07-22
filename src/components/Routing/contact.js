import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function Contact(){
    const [data,setData] = useState({});
    const {id} = useParams();
    useEffect(()=>{
        axios.get(`http://localhost:3000/products?product_id=${id}`)
        .then((res)=>{
            setData(res.data[0])
        })
        .catch(()=>{
            setData({});
        })
    },[])
    return (
        <>
        <img src={data.img_link}/>
            <h1>{data.product_name}</h1>
            <p>{data.about_product}</p>
            <small>{data.actual_price}</small>
        </>
    )
}
export default Contact