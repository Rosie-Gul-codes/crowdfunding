import React from "react"
import { Link } from 'react-router-dom'
import "./nav.css"

function Nav() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/project">NewProject</Link> 
            <Link to="/login">Login</Link>
        </nav>
    )
}

export default Nav


// import '.App.css'
// import 'Nav from '.components/Nav'

// function App() {
//     return (
//         <div className="App"
//     )
// }