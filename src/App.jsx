import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Productcard from './components/productcard.jsx';

function App() {
  const ProductData ={
    productImage :viteLogo ,
    productName :'nuttela' ,
    price:'3499',
  }
  const cards = Array.from({ length: 10 });
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '16px',
    padding: '16px',
  };

  return (
    <div style={gridStyle}>
      {cards.map((_, index) => (
        <Productcard key={index} ProductData={ProductData} />
      ))}
    </div>
  );
}

export default App;
