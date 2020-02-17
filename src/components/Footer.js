/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import fb_img from '../images/facebook.svg';
import ln_img from '../images/linkedin.svg';
import tw_img from '../images/twitter.svg';
import yt_img from '../images/youtube.svg';
import ins_img from '../images/instagram.svg';



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


  if (error) {
    return (
      <div>
        <p>Ups, tuvimos un problema para cargar los datos del footer. Intentelo nuevamente mas tarde</p>
      </div>
    );
  } 



    return (
      <footer className="sticky-bottom text-left bg-dark row vw-100 ml-0">
        {!contact ? <div> Cargando... </div>:
          <div className="pl-md-4 col-12 pl-4 col-md-5 my-md-4 px-0 vw-100">
            <h3 className="font-weight-bold text-white">Contacto</h3>
            <p className="text-white mb-0">{contact.tel}</p>
            <p className="text-white mb-0">{contact.email}</p>
            <p className="text-white mb-0">{contact.address}</p>
          </div>}
        {!social ? <div> Cargando... </div>:
          <div className="pl-md-4 pl-4 col-12 col-md-6 my-4 px-0 vw-100">
            <h3 className="font-weight-bold text-white">Nuestras Redes</h3>
            <ul className="social-links pl-md-0">
              <li className="d-inline pl-md-2"><a href={social.fb} target="_blank" rel="noopener noreferrer"><img src={fb_img} alt="Facebook Icon" width="50px"/></a></li>
              <li className="d-inline pl-md-2"><a href={social.ln} target="_blank" rel="noopener noreferrer"><img src={ln_img} alt="LinkedIn Icon" width="50px"/></a></li>
              <li className="d-inline pl-md-2"><a href={social.tw} target="_blank" rel="noopener noreferrer"><img src={tw_img} alt="Twitter Icon" width="50px"/></a></li>
              <li className="d-inline pl-md-2"><a href={social.yt} target="_blank" rel="noopener noreferrer"><img src={yt_img} alt="Youtube Icon" width="50px"/></a></li>
              <li className="d-inline pl-md-2"><a href={social.ins} target="_blank" rel="noopener noreferrer"><img src={ins_img} alt="Instagram Icon" width="50px"/></a></li>
            </ul>
          </div>}
      </footer>
    )
  }

export default Footer;