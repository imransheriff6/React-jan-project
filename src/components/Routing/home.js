import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get("http://localhost:3000/products")
            .then((res) => {
                setData(res.data)
            })
            .catch(() => {
                setData([])
            })
            // .finally(()=>{
            //     setLoading(false)
            // })
    }, [])
    return (
        <div>
            {loading && <p>Loading.....</p>}
            {
                data.map((ele) => {
                    return <div><Link to={`/contact/${ele.product_id}`}>{ele.product_name}</Link></div>
                })
            }
        </div>
    )
}
export default Home