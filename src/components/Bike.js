import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    data: {}
  }
  componentDidMount() {
    axios.get('../data.json')
      .then(res => {
        const data = res.data;
        this.setState({ data });
        console.log(data);

      })
  }


  render() {
    return (
      <div className="bike-wrapper">
          <div>
            <img src='' alt=""/>
            <h2></h2>
            <h3>Ola </h3>
          </div>
      </div>
    )
  }
}
