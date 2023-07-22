import axios from "axios";
import { Component } from "react";
class BasicComponent extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            data1: "Hello"
        }
    }
    changeHandler(e){
        console.log(e)
        this.setState({
            data:"Welcome"
        })
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .finally(()=>{
            // setLoading(false)
        })
        .then((res)=>{
            this.setState({
                data:res.data
            }) 
        })
        .catch(()=>{
            this.setState({
                data:[]
            }) 
        })
    }
    render() {
        return (
            <>
                {/* <h1>{this.state.data}</h1> */}
                {
                    this.state.data.map((ele)=>{
                        return <h1>{ele.username}</h1> 
                    })
                }
                <button onClick={(e)=>this.changeHandler(e)}>Change</button>
            </>
        )
    }
}
export default BasicComponent