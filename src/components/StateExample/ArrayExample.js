import { useState } from "react"
import Child from "./ArrayChild"

function ArrayExample() {
    const [data, setData] = useState([])
    const [userName, setUserName] = useState('');
    const [age, setAge] = useState('');
    const AddUser = () => {
        let newElement = {
            id: data.length + 1,
            fname: userName,
            age: +age,
        }
        setData(data.concat(newElement))
    }
    const EditUser = (id) =>{
        console.log(id);
        let copyData = [...data];
        let index = copyData.findIndex((ele)=>ele.id === id);
        copyData[index].age += 1;
        setData(copyData)
    }
    const DeleteUser = (id) =>{
        setData(data.filter((ele)=>ele.id !== id));
    }
    return (
        <>
            <h1>Array Example</h1>
            <input value={userName} placeholder="Name" onChange={(e) => setUserName(e.target.value)}></input>
            <input type='number' placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)}></input>
            <button onClick={AddUser}>Add</button>
            <div className="parent-arr">
                {
                    data.map((ele) => {
                        return <div>
                            <Child
                                information={ele}
                            />
                            <button onClick={()=>EditUser(ele.id)}>Edit</button>
                            <button onClick={()=>DeleteUser(ele.id)}>Delete</button>
                        </div>
                    })
                }
            </div>
        </>
    )
}
export default ArrayExample