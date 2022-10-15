import React from 'react';
import '../componentstyle.css';
import { Link } from 'react-router-dom';
import Resume from '../images/my_resume.pdf';


const Home = () => {
  return (
    <div className='homeimg'>
      <div className='homecontent'>
        <div>
          <h2>Hello! I'm </h2>
          <h1>Jayabharathy Ravichandran</h1>
          <p>Full Stack Developer</p>
          <Link to='/about'><button id='btn'>About Me</button></Link>
          <a href={Resume} target='_blank' rel="noreferrer"><button id='btn-light'>Get Resume</button></a>
        </div>
        {/* <div id="followme">
          <p>FOLLOW ME</p>
          <div><a href='https://github.com/Jayabharathy-R' target='_blank'>  <LinkedInIcon fontSize='large' /></a>&nbsp;&nbsp;
            <a href='https://www.linkedin.com/in/jayabharathy-r/' target='_blank'> <GitHubIcon fontSize='large' /></a>
          </div>
        </div> */}
      </div>



      {/* <Button variant='contained' color='warning'>About me</Button> */}
    </div>
  )
}

export default Home;