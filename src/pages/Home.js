import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Bikelist from '../components/Bikelist';

const Home = () => {
  return (
    <>
      <Header></Header>
        <main>
          <Bikelist />
        </main>
      <Footer></Footer>
    </>
  );
}

export default Home

