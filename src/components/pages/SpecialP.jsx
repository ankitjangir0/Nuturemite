import React, { useState } from 'react'
import img1 from './images/1074381-1-2048x1904.webp'
import img2 from './images/sp2.webp'
import img3 from './images/star.png'


function SpecialCard({ pic, title, price, rate }){
  return (
    <div className="productspl">
      <h1><img src={pic} alt="" /></h1>
      <h2>{title}</h2>
      <p>Price: {price}Rs</p>
      <p id='rst'>Rate our Product:<img src={img3 } alt="" /></p>
  
    </div>
  );
}

function SpecialP() {
  const initialProducts = [
    { pic: img1, title: 'Nuturmite Strawerry fruit spray driet powder', price: 150, rate: img3 },
    { pic: img2, title: 'Nuturmite Piapple fruit spray driet powder', price: 1230, rate: img3 },
    { pic: img1, title: 'Nuturmite Strawerry fruit spray driet powder', price: 640, rate: img3 },
    { pic: img2, title: 'Nuturmite Piapple fruit spray driet powder', price: 800, rate: img3 },
    { pic: img1, title: 'Nuturmite Strawerry fruit spray driet powder', price: 1400, rate: img3 },
    { pic: img2, title: 'Nuturmite Piapple fruit spray driet powder', price: 1455, rate: img3 },
    { pic: img1, title: 'Nuturmite Strawerry fruit spray driet powder', price: 2122, rate: img3 },
   
    // Add more products here
  ];

  const [products, setProducts] = useState(initialProducts);

  const sortProducts = () => {
     setProducts(products);
  };



  return (
    <div className="productsp">
 <h1> This Week's Specials</h1>
 <p>All our new arrivals in a exclusive brand selection</p>
 <div className="productss">
 {products.map((Product, index) => (
          <SpecialCard key={index} pic={Product.pic} title={Product.title} price={Product.price} />
        ))}
      
 </div>
       
    </div>
  )
}


export default SpecialP;