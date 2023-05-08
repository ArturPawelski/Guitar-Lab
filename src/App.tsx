import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import New from './components/New';

function App() {
  return (
    <div className='bg-[#0C0C0C] min-h-screen'>
      <Navbar />
      <Header />
      <New />
    </div>
  );
}

export default App;
