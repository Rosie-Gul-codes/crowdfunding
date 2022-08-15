import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProjectPage() {
    const [projectData, setProjectData] = useState({pledges: [] });
    const { id } = useParams()

    useEffect(() => {
        // Send GET request to:
        // https://fierce-basin-08012.herokuapp.com/projects/2
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
            .then((results) => results.json())
            .then((data) => setProjectData(data));
    }, []);

    return (
    <div>
        <h1>{projectData.title}</h1>
        <img src={projectData.image} alt={projectData.title} />
        <h3>Created at: { projectData.date_created}</h3>
        <h3>{`Status: ${projectData.is_open}`}</h3>
        <h3>Pledges:</h3>        
        <ul>
            {projectData.pledges.map((pledge, index) => (
                <li key={index}>{pledge.amount} from {} {pledge.supporter}</li>
            ))}
        </ul>
    </div>
    );
}

export default ProjectPage;
