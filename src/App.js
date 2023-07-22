import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import './App.css'
import Grid from './components/Grid/Grid'
import Header from './components/Header/Header'
import About from './components/Routing/about'
import Contact from './components/Routing/contact'
import Home from './components/Routing/home'
import LoadData from './components/ServerExample/LoadData'
import ArrayExample from './components/StateExample/ArrayExample'
import StateExample from './components/StateExample/StateExample'
import BasicComponent from './components/classComponent/basicComponent'
import BasicComponentFC from './components/classComponent/basicComponentFC'
import Counter from "./components/reduxExample/counter"
import { Provider } from "react-redux"
import store from "./redux/store"

function App() {
  return <>
    {/* <Header/>
    <Grid/> */}
    {/* <StateExample /> */}
    {/* <ArrayExample /> */}
    {/* <LoadData /> */}
    {/* <BasicComponent />
    <BasicComponentFC /> */}    
    <Provider store={store}>
    <BrowserRouter>
    <Link className='link' to='/home'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/contact/5'>Contact</Link>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/redux" element={<Counter/>}></Route>
        <Route path="/contact/:id" element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  </>
}
export default App