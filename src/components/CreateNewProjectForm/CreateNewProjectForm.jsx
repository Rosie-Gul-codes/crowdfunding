import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateNewProjectForm() {
    const [newProjectDetails, setNewProjectDetails] = useState({
        title: "",
        description: "",
        goal: "",
        image: "",
    });

    const postData = async () => {
        const response = await fetch(
        `${process.env.REACT_APP_API_URL}projects/`, 
        {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newProjectDetails),
        }
        );
        return response.json();
    };

    const history = useNavigate();
    // ...

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newProjectDetails.title && newProjectDetails.description) {
        postData().then((response) => {
        history.push("/");
        console.log(response);
        });
        }
    };
    // Credential and setNewCredentials to b e updated with CreateNewProjectDetails
    // newProjectDetails, setNewProjectDetails
    const handleChange = (e) => {
        const { id, value } = e.target;
        setNewProjectDetails((prevNewProjectDetails) => ({
        ...prevNewProjectDetails,
        [id]: value,
        }));
    };

    return (
        <form>
        <div>
        <label htmlFor="title">Title:</label>
        <input
            type="text"
            id="title"
            placeholder="Enter title"
            onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="description">Description:</label>
        <input
            type="text"
            id="description"
            placeholder="description"
            onChange={handleChange}
        />
        <div>
        <label htmlFor="image">image</label>
        <input
            type="text"
            id="image"
            placeholder="Enter image"
            onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="goal">Goal:</label>
        <input
            type="text"
            id="goal"
            placeholder="Enter goal"
            onChange={handleChange}
        />
        </div>
        </div>
        <button type="submit" onClick={handleSubmit}>
        submit
        </button>
        </form>
    );
}

export default CreateNewProjectForm;

