
function Contact () {
    return (
        <div className="container">
                            <form class="form-style" action="https://formspree.io/f/xvolwjwz"
                            method="POST">

                        <div className="input-field">
                            <label htmlFor="fname">First Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                        </div>

                        <div className="input-field">
                            <label htmlFor="lname">Last Name</label>
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                        </div>

                        <div className="input-field">
                            <label htmlFor="subject">Subject</label>
                            <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}} />
                        </div>      

                            <input className="submit-button" type="submit" value="Submit" />
                            </form>

                        </div>
            )   
}

export default Contact