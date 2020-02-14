import React from 'react';
import Bike from './Bike';
import axios from 'axios';
import { Item } from 'react-bootstrap/lib/Breadcrumb';

export default class Header extends React.Component {
  state = {
    config: [],
    product: []
  }

  componentDidMount() {
    axios.get('https://api.myjson.com/bins/7gads')
      .then(res => {
        const product = res.data;
        this.setState({ product });
        console.log(product);
      })
  }

  const Bikelist = ({ bikes }) => {
    return (
      <section>
        <ul>
          {bikes.map(item => {
            return <Bike key={Item.id} bike={item} />;
          })}
        </ul>
      </section>
    );
  };
