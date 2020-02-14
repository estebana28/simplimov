/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import axios from 'axios';
import fb_img from '../images/facebook.svg';
import ln_img from '../images/linkedin.svg';
import tw_img from '../images/twitter.svg';
import yt_img from '../images/youtube.svg';
import ins_img from '../images/instagram.svg';



export default class Header extends React.Component {
  state = {
    config: []
  }

  componentDidMount() {
    axios.get('https://api.myjson.com/bins/17dcjc')
      .then(res => {
        const config = res.data;
        this.setState({ config });
      })
  }

  render() {
    const { contact: {tel, email, address} = {}, social: {fb, ln, tw, yt, ins} = {} } = this.state.config;
    return (
      <footer>
        <div>
          <h3>Contacto</h3>
          <h4>{tel}</h4>
          <h4>{email}</h4>
          <h4>{address}</h4>
        </div>
        <div>
          <h3>Nuestras Redes</h3>
          <ul className="social-links">
            <li><a href={fb} target="_blank" rel="noopener noreferrer"><img src={fb_img} alt=""/></a></li>
            <li><a href={ln} target="_blank" rel="noopener noreferrer"><img src={ln_img} alt=""/></a></li>
            <li><a href={tw} target="_blank" rel="noopener noreferrer"><img src={tw_img} alt=""/></a></li>
            <li><a href={yt} target="_blank" rel="noopener noreferrer"><img src={yt_img} alt=""/></a></li>
            <li><a href={ins} target="_blank" rel="noopener noreferrer"><img src={ins_img} alt=""/></a></li>
          </ul>
        </div>
      </footer>
    )
  }
}
