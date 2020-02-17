import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Bikelist = () => {
  const [bikes, setBikes] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get('https://api.myjson.com/bins/7gads')
      .then(res => {
        setBikes(res.data.product);
      })
      .catch(err => setError(err));
  }, []);


  if (error) {
    return (
      <div>
        <p>Ups, tuvimos un problema para cargar las hermosas motos que tenemos para vos. Intentelo nuevamente mas tarde</p>
      </div>
    );
  }
  

  return (
    <section>
      <ul className="bike-list mx-lg-auto d-flex flex-column flex-lg-row">
        {bikes?.map((bike) => {
          if(bike.is_active) {
          return (
          <li className="card bike-card ml-lg-1 mt-5 ml-3 mr-5 w-lg-25 w-90 my-lg-5" key={bike.id}>
            <img className="card-img-top bg-dark" src={bike.detail.main_image} alt={bike.name + " photo"} />
            <div className="card-body">
              <p className="card-text h1">{bike.name}</p>
              <p className="card-text">{bike.detail.price.currency + " "}{bike.detail.price.amount + ",00"}</p>
            </div>
          </li>
        )} return null;
        }) }
      </ul>
    </section>
  );
  

}

export default Bikelist;