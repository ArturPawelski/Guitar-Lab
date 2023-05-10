import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import New from './components/New';
import Products from './components/Products';

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
    </div>
  );
}

export default App;
