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
      <nav className="navbar bg-dark p-0 vw-100">
          <a className="navbar-brand mx-auto py-20" href="# ">
            <img className="ml-lg-5 mb-lg-4" src={img} alt="Royal Enfield Logo" width="200" />
          </a>
          <img className="index-header" src={index_header_image} alt="Royal Enfield Background"/>
      </nav>
    )
  }
}
