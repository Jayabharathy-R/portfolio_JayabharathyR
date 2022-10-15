import React from 'react';
import '../componentstyle.css';

const Contact = () => {
  return (
    <div className='homeimg'>
      <div className='Contactcontent'>
      <h2>Contact Details:</h2>
      <div className='info'>
     <span className='title'>EMail:</span>rjbharathy.1991@gmail.com<br/>
     <span className='title'>Contact number:</span> 8838655602<br/>
     <span className='title'>WhatsApp number: </span>9043656604<br/>
      </div>
       
      <h2>Current Location:</h2> 
        <div className='info'>
        Hebbal Kemapapura,<br/>
        Bangalore-560024.</div> 

        <h2>Permanent Address:</h2> 
        <div className='info'>
        Pallivarthi,<br/>
         Mannargudi,<br/>
         TamilNadu-614717. </div> 
       

      </div>
    
    </div>
  )
}

export default Contact;