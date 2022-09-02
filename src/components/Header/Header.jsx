import {Link } from "react-router-dom"
import "./header.css"

    function Header() {
        return (
            <header>
            <div class="header-text">
                <a href="index.html">                
                </a>

            </div>
            <nav>
                <Link to="/">Home</Link>
                {/* <Link to="about.html">About</Link> */}
                <Link to="project">Project</Link>
                <Link to="contact">Contact</Link>
                <Link to="login">Login</Link>
                <Link to="https://github.com/Rosie-Gul-codes"><img src="images/icons8-github-24.png" /> </Link>
                <Link to="https://www.linkedin.com/in/gulkizil/"><img src="https://img.icons8.com/fluency/48/000000/linkedin.png"/></Link>
            </nav>
        </header>
        ) 
    }

export default Header



 