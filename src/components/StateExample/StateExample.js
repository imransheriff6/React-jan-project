import { useState } from "react"

function StateExample() {
    const [text, setText] = useState({
        fname: 'Sam',
        lname: 'Curran',
        age: '24'
    });
    function ChangeHandler() {
        setText({
            fname: 'Tom',
            lname: 'Curran',
            age: '30'
        })
    }
    return <>
        <p>{text.fname} {text.lname} {text.age}</p>
        <button onClick={ChangeHandler}>Change</button>
    </>
}
export default StateExample