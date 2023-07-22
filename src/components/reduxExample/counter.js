import { useDispatch, useSelector } from "react-redux"
import {selectCount, increment,decrement,dynamicValue} from '../../redux/counterReducer'
function Counter(){
    const dispatch = useDispatch();
    const reduxData = useSelector(selectCount);
    return(
        <>
        <p>{reduxData}</p>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(dynamicValue(5))}>Add 5</button>
        <button onClick={()=>dispatch(dynamicValue(10))}>Add 10</button>
        </>
    )
}
export default Counter