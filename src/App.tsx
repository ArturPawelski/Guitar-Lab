import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import New from './components/New';

function App() {
  const newRef = useRef<HTMLDivElement>(null);

  const handleNewClick = (): void => {
    newRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='bg-[#0C0C0C] min-h-screen '>
      <Navbar onNewCLick={handleNewClick} />
      <Header />
      <New ref={newRef} />
    </div>
  );
}

export default App;
