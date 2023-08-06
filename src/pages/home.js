import { Link } from 'react-router-dom'
import contact from '../images/contact.png'
import exp from '../images/work-exp.jpg'
import linkedin from '../images/linkedin.png'

function Home() {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Asap:wght@100&family=IBM+Plex+Sans:wght@100&family=Nunito:wght@200&family=Open+Sans:wght@300&family=Roboto:wght@100&family=Space+Mono&display=swap" rel="stylesheet"/>
          <title>Home</title>
      </head>


    <body>
      <div class="container mx-auto">
        <div class="typewritter">
          <h1>Welcome!</h1>
        </div>
          
      </div>
      
        <p class="shadow-lg" >
          Hello! My name is Dawood Afzaal, I am a current Undergraduate Computer Science student at the University of Calgary 
          I am currently working as a Test Automation Developer Co-op at Nokia, prior to this, I worked at Nutrien as an IT Digital 
          Delivery Co-op student where I worked with both the development and QA team during my 12-month internship period 
        </p>


      <div class="content">
        <h2>Learn more about my previous work! Or contact me by clicking the mail icon.</h2>
        <Link to="/experience">
          <img src={exp} alt="work exp icon"/>
        </Link>

        <Link to="/contact">
          <img src={contact} alt="contact-image" class="contact"/>
        </Link>
          


      </div>




    </body>
   
    </html>


  );
}

export default Home;