import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Bike from '../components/Bike';

const Home = () => {
  return (
    <>
      <Header />
        <main>
          <Bike></Bike>
        </main>
      <Footer />
    </>
  );
}

export default Home

