import React from "react"
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/project">Project</Link>
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