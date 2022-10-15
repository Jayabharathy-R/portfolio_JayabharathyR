import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <div className='footer'>
       <div>
          <p>FOLLOW ME</p>
          <div><a href='https://github.com/Jayabharathy-R' target='_blank' rel="noreferrer">  <LinkedInIcon fontSize='large' /></a>&nbsp;&nbsp;
            <a href='https://www.linkedin.com/in/jayabharathy-r/' target='_blank' rel="noreferrer"> <GitHubIcon fontSize='large' /></a>
          </div>
          <div>
          Email: rjbharathy.1991@gmail.com<br/>
        Mobile: 8838655602
          </div>
         
        </div> 
        {/* <h3>contact</h3>
        Email: rjbharathy.1991@gmail.com<br/>
        Mobile: 8838655602<br/>
        LinkedIn: linkedin.com/in/jayabharathy-r<br/> */}
        
    </div>
  )
}

export default Footer