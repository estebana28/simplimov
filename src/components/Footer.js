/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import fb_img from '../images/facebook.svg';
// import ln_img from '../images/linkedin.svg';
// import tw_img from '../images/twitter.svg';
// import yt_img from '../images/youtube.svg';
// import ins_img from '../images/instagram.svg';



const Footer = () => {
  const [contact, setContact] = useState(undefined);
  const [social, setSocial] = useState(undefined);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get('https://api.myjson.com/bins/17dcjc')
      .then(res => {
        setContact(res.data.contact);
        setSocial(res.data.social);
      })

      .catch(err => setError(err));
  }, []);

  console.log("contact",contact);

  if (error) {
    return (
      <div>
        <p>Ups, tuvimos un problema para cargar los datos del footer. Intentelo nuevamente mas tarde</p>
      </div>
    );
  } 



    return (
      <footer>
        {contact ? <div> Cargando... </div>:
          <div>
            <h3>Contacto</h3>
            <h4>{contact.tel}</h4>
            <h4>{}</h4>
            <h4>{}</h4>
          </div>}
        {/* 
        <div>
          <h3>Nuestras Redes</h3>
          <ul className="social-links">
            <li><a href={fb} target="_blank" rel="noopener noreferrer"><img src={fb_img} alt=""/></a></li>
            <li><a href={ln} target="_blank" rel="noopener noreferrer"><img src={ln_img} alt=""/></a></li>
            <li><a href={tw} target="_blank" rel="noopener noreferrer"><img src={tw_img} alt=""/></a></li>
            <li><a href={yt} target="_blank" rel="noopener noreferrer"><img src={yt_img} alt=""/></a></li>
            <li><a href={ins} target="_blank" rel="noopener noreferrer"><img src={ins_img} alt=""/></a></li>
          </ul>
        </div> */}
      </footer>
    )
  }

export default Footer;