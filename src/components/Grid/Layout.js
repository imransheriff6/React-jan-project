import bg from '../../logo.svg'
function Layout(props){
    // console.log(props)
    return (
        <div>
            <img 
            src={require(`../../images/${props.imgName}.png`)}
            />
            <h1>{props.title}</h1>
            <p>many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which</p>
            <button>Read More</button>
        </div>
    )
}
export default Layout