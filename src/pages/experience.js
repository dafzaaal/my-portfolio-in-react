import MyButton from './button.js'

function experience() {
    return (
        <html>
            <head>

                <title>Work Experience</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Asap:wght@100&family=IBM+Plex+Sans:wght@100&family=Nunito:wght@200&family=Open+Sans:wght@300&family=Roboto:wght@100&family=Space+Mono&display=swap" rel="stylesheet"/>
            </head>
            <body>
                <div class="typewritter">
                    <h1>Work Experience</h1>
                </div>

                <div class="exp">
                    <p>
                        <h3>DevOps Engineer Co-op at Nokia</h3> <br />
                        <h4>May 2024 - August 2024</h4> <br />

                        <ul>
                            <li>Automated the build process of a Docker image by leveraging Docker labels with the printevn command.</li> <br />
                            <li>Implemented GitLab Integration to create and push a Git tag whenever a newer version of the image was generated ensuring version control and traceability.</li> <br />
                            <li>Integrated over 80+ company repositories with Jira by creating a python script to automate the process using the Gitlab API</li> <br/>
                            
                        </ul>

                    </p>
                </div>
                    
                <MyButton />


            </body>

        </html>
    );
}


export default experience;