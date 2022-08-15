import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";

function HomePage() {
    // We are using the useState hook to update the state of our React App.
    const [projectData, updateProjectData] = useState([]);

    // We are using the useEffect hook to call/fetch data from our API and put that data into useState. 
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/`)
        .then(res => res.json())
        .then((data) => updateProjectData(data))
        .catch(err => {console.log("error is", err)})
    }, []);

    return (
        <div>
            {projectData.map((project, index) => {
                return <ProjectCard key={index} projectData={project} />
            })
            }
        </div>
    )
}

export default HomePage;



/**
 * These are all variables
 * 1 <- This is a number
 * 
 * "Hello" <- This is a string
 * 
 * [1, 2, 3] <- This is an array of numbers
 * 
 * { name: "Lachlan" } <- This is an object
 * 
 * const add = (a, b) => a + b <- This is an arrow function
 */