import React from 'react';
import axios from 'axios';

export default class Header extends React.Component {
  state = {
    config: {}
  }

  componentDidMount() {
    axios.get('https://api.myjson.com/bins/17dcjc')
      .then(res => {
        const config = res.data;
        this.setState({ config });
        console.log(config);
      })
  }

  render() {
    const { logo:{img} } = this.state.config;
    return (
      <div>
        <p></p>
        <img src={} alt=""/>
      </div>
    )
  }
}
//   return (
//       <header className="re-navbar">
//         <Link to="/">
//           <img src="" alt="Royal Enfield Header"/>
//         </Link>
//       </header>
//   )


// export default Header
