import React, { useState } from 'react';
import img1 from './images/images.jpg'
import img2 from './images/star.png'


function ProductCard({ pic, name, price, rate }) {
  return (
    <div className="product-card">
      <h1><img src={pic} alt="" /></h1>
      <h2>{name}</h2>
      <p>Price: {price}Rs</p>
      <p id='rst'>Rate our Product:<img src={img2 } alt="" /></p>
  
    </div>
  );
}

function Range() {
  const [maxPrice, setMaxPrice] = useState(650);


  const Sproducts = [
    {pic:img1, name: 'Nuturmite Aamla powder 150gm', price: 650 },
    {pic:img1, name: 'Nuturmite Aamla powder 150gm', price: 650 },
    {pic:img1, name: 'Nuturmite Aamla powder 150gm', price: 650 },
    {pic:img1, name: 'Nuturmite Ashwgandha powder 150gm', price: 850 },
    {pic:img1, name: 'Nuturmite Aamla powder 250gm', price: 1250 },
    {pic:img1, name: 'Nuturmite Ashwgandha powder 250gm', price: 1350 },
    {pic:img1, name: 'Nuturmite Ashwgandha powder 250gm', price: 1350 },
    {pic:img1, name: 'Nuturmite Ashwgandha powder 250gm', price: 1350 },
    {pic:img1, name: 'Nuturmite Aamla powder 350gm', price: 2450 },
    {pic:img1, name: 'Nuturmite Ashwgandha powder 350gm', price: 2550 },
    {pic:img1, name: 'Nuturmite Ashwgandha powder 350gm', price: 2550 },
    {pic:img1, name: 'Nuturmite Ashwgandha powder 350gm', price: 2550 },
    {pic:img1, name: 'Nuturmite Aamla powder 450gm', price: 2550 },
    {pic:img1, name: 'Nuturmite Ashwgandha powder 450gm', price: 2850 },
    {pic:img1, name: 'Nuturmite Aamla powder 550gm', price: 3050 },
    {pic:img1, name: 'Nuturmite Aamla powder 550gm', price: 3550 },
    {pic:img1, name: 'Nuturmite Aamla powder 550gm', price: 3550 },
    {pic:img1, name: 'Nuturmite Aamla powder 550gm', price: 3550 },
    {pic:img1, name: 'Nuturmite Aamla powder 550gm', price: 3550 },
    {pic:img1, name: 'Nuturmite Aamla powder 650gm', price:4000 },
  ];

  const handlePriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  return (
    <div id='range'>
      <h1>FILTER BY PRICE</h1>
      <label htmlFor="priceRange">Price Range:</label>
      <input
        type="range"
        id="priceRange"
        min="650"
        max="4000"
        value={maxPrice}
        onChange={handlePriceChange}
      />
      <span id="priceOutput">{maxPrice}</span>

      <div id="shopproduct">
        {Sproducts.map((product, index) => (
          product.price <= maxPrice && (
            <ProductCard key={index} pic={product.pic} name={product.name} price={product.price}/>
          )
        ))}
      </div>
    </div>
  );
}

export default Range;
