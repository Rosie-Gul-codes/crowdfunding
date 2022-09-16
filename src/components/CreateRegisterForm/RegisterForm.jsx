import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
        emailaddress: ""
    });

    const postData = async () => {
        const response = await fetch(
        `${process.env.REACT_APP_API_URL}api-token-auth/`, 
        {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
        }
        );
        return response.json();
    };

    const history = useNavigate();
    // ...

    const handleSubmit = (e) => {
        e.preventDefault();
        if (credentials.username && credentials.password && credentials.emailaddress) {
        postData().then((response) => {
        window.localStorage.setItem("token", response.token);
        history("/");
        // console.log(response);
        });
        }
    };
  
    const handleChange = (e) => {
        const { id, value } = e.target;
        setCredentials((prevCredentials) => ({
        ...prevCredentials,
        [id]: value,
        }));
    };

    return (
        <form>
        <div>
        <label htmlFor="username">Username:</label>
        <input
            type="text"
            id="username"
            placeholder="Enter username"
            onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="password">Password:</label>
        <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
        />
        </div>

        <div>
        <label htmlFor="emailaddress">EmailAddress:</label>
        <input
            type="emailaddress"
            id="emailaddress"
            placeholder="EmailAddress"
            onChange={handleChange}
        />
        </div>

        <button type="submit" onClick={handleSubmit}>
        Register
        </button>
        </form>
    );
}

export default RegisterForm;

