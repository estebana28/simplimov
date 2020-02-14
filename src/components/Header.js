import React from 'react';
import axios from 'axios';

export default class Header extends React.Component {
  state = {
    config: [],
    product: []
  }

  componentDidMount() {
    axios.get('https://api.myjson.com/bins/17dcjc')
      .then(res => {
        const config = res.data;
        this.setState({ config });
      })
  }

  render() {
    const { index_header_image, logo:{ img } = {}} = this.state.config;
    return (
      <nav className="navbar">
          <a className="navbar-brand mx-auto" href="# ">
            <img src={img} alt="Royal Enfield Logo" width="200" />
          </a>
          <img className="index-header" src={index_header_image} alt="Royal Enfield Background"/>
      </nav>
    )
  }
}
