import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import New from './components/New';
import Personalize from './components/Personalize';
import Products from './components/Products';
import Informations from './components/Informations';
import SignUp from './components/SignUp';
import Footer from './components/Footer';

function App() {
  return (
    <div className='bg-[#0C0C0C] min-h-screen '>
      <Navbar />
      <Header />
      <New />
      <Products />
      <Personalize />
      <Informations />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
