import MyButton from "./button.js";
import {Link} from 'react-router-dom'
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'

function contact(){
    return (
        <html>
        <div>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Asap:wght@100&family=IBM+Plex+Sans:wght@100&family=Nunito:wght@200&family=Open+Sans:wght@300&family=Roboto:wght@100&family=Space+Mono&display=swap" rel="stylesheet"/>
            </head>
        </div>

        <body>

            <div class="typewritter">
                <h2>Fill out the form below to send me an email!</h2>
            </div>


            <div class="form">
                <form action="mailto:dawoodafzaal13@gmail.com" method="get" encType="text/plain">
                    Subject: <input type="text" name= "subject" id="name" placeholder="E-mail subject..."></input> <br /> <br/>
                    E-mail: <input type="text" name="email" id="email" placeholder="Your e-mail..."></input> <br /> <br/>
                    <textarea rows = "5" cols = "50" name = "body" id="body" placeholder="Enter message..."></textarea> <br/> <br />
                    <input type="submit" value="Send" id="send"></input>
                </form>
            </div>
            
            <div class="container" id="socials">
                <Link to="https://www.linkedin.com/in/dawood-afzaal-36933b1a5/" target="_blank">
                    <img src={linkedin} alt="linkedin logo" id="linkedin"/>
                </Link>

                <Link to="https://github.com/dafzaaal" target="_blank">
                    <img src={github} alt="github logo" id="github"/>
                </Link>
            </div>


            <MyButton />
            


        </body>
    
    
    </html>
    );

}


export default contact;