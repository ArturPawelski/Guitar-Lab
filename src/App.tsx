import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import New from './components/New';
import Personalize from './components/Personalize';
import Products from './components/Products';
import Informations from './components/Informations';
import SignUp from './components/SignUp';

function App() {
  const newRef = useRef<HTMLDivElement>(null);

  const handleNewClick = (): void => {
    newRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='bg-[#0C0C0C] min-h-screen '>
      <Navbar onNewClick={handleNewClick} />
      <Header />
      <New ref={newRef} />
      <Products />
      <Personalize />
      <Informations />
      <SignUp />
    </div>
  );
}

export default App;
