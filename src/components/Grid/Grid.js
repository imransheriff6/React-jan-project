import Layout from "./Layout"
import './Grid.css'
function Grid(){
    return (
        <>
        <h1 style={{textAlign:'center'}}>What we do</h1>
        <div className="parent">
            <Layout title="Web Development" imgName='web'/>
            <Layout title="App Development" imgName="app"/>
            <Layout title="Website Design" imgName="website" />
        </div>
        </>
    )
}
export default Grid