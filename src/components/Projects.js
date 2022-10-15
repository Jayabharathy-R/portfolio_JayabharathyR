import React from 'react';
import youtube from '../images/youtube-clone.png';
import pettycash from '../images/pettycash-manager.png';
import shoppingcart from '../images/shopping-cart.png';
import webscrapping from '../images/web-scrapping.png';


const Projects = () => {
  return (
    <div className='homeimg'>
      <div className='projectcontent'>
        <h2>Work Samples</h2>
        <div className='samples'>
        <div>
          <a href='https://harmonious-concha-70f5cf.netlify.app/' target='_blank' rel="noreferrer">
          <img src={pettycash} alt='Pettycash-manager'></img><br/>
          </a>
          <p>Pettycash Manager</p>
          <span><a href='https://github.com/Jayabharathy-R/PettcashManager' target='_blank'  rel="noreferrer">Github Link</a></span>
        </div>
        <div>
          <a href='https://gifted-mcclintock-6fb704.netlify.app/' target='_blank' rel="noreferrer">
          <img src={youtube} alt='Youtube-clone'></img><br/>
          </a>
          <p>Youtube Clone</p>
           <span><a href='https://github.com/Jayabharathy-R/youtube-clone' target='_blank'  rel="noreferrer">Github Link</a></span>
        </div>
        <div>
        <a href='https://inquisitive-seahorse-b64244.netlify.app/' target='_blank' rel="noreferrer">
        <img src={shoppingcart} alt='Shopping-cart'></img><br/>
        </a>
        <p>Shopping Cart</p>

          <span><a href='https://github.com/Jayabharathy-R/checkoutpage' target='_blank'  rel="noreferrer">Github Link</a></span>
        </div>
        <div>
        <a href='https://frolicking-fairy-35c7f5.netlify.app/' target='_blank' rel="noreferrer">
        <img src={webscrapping} alt='Web-scrapping'></img><br/>
        </a>
        <p>Web Scrapping</p>

          <span><a href='https://github.com/Jayabharathy-R/WebScraping-Ecommerce-Backend' target='_blank'  rel="noreferrer">Github Link</a></span>
        </div>
        <div>
        <a href='https://frolicking-fairy-35c7f5.netlify.app/' target='_blank' rel="noreferrer">
        <img src={webscrapping} alt='Web-scrapping'></img><br/>
        </a>
        <p> My Portfolio</p>

          <span><a href='https://github.com/Jayabharathy-R/PettcashManager' target='_blank'  rel="noreferrer">Github Link</a></span>
        </div>
        
        </div>
      </div>
    </div>
  )
}

export default Projects;