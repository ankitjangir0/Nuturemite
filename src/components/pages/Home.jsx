import React, { useState } from 'react'
import img1 from './images/download.png'
import img2 from './images/download (2).png'
import img3 from './images/download (3).png'
import img4 from './images/download (4).png'
import img5 from './images/banana.jpg'
import img6 from './images/m.png'

import SpecialP from './SpecialP'
import RangeP from './RangeP'



function Home() {
    const [bstate , setbstate]=useState(1)
    const [nstate , setnstate]=useState(1)
    const backpg =()=>{
// setbstate(index=>{
//     if (index===0) return cont1.length-1
// return index-1
// })        
    }

    const nextpg =()=>{
    }
  return (
    <>
    <div className="maincont">

    <div className="cont1">
        <br />
        <h1><span style={{color:'gray'}}> Exclusiv Product New Arrival</span> </h1>
        <h2>Organic coffee </h2>
        <h3>Special Blend</h3>
        <h4> <span style={{color:'gray'}}> BREAKFAST PRODUCT ON SALE </span></h4>
        <h5>UP TO</h5>
        <h6><span style={{color:'white'}}>50%</span></h6>
    </div>
    <div className="cont2">
        <br />
    <h1><span style={{color:'gray'}}> Exclusiv Product New Arrival </span></h1>
        <h2>Fit Low Carb </h2>
        <h3>CANDY BAR</h3>
        <h4><span style={{color:'gray'}}> BREAKFAST PRODUCT ON SALE </span></h4>
        <h5>UP TO</h5>
        <h6><span style={{color:'white'}}> 70% </span></h6>
    </div>
    <button className="sliderbtn" onClick={()=>backpg(setbstate) } style={{left:0}} ><i>&larr;</i></button>
    <button className="sliderbtn" onClick={()=>nextpg(setnstate)}  style={{right:0}}><i>&rarr;</i></button>
    </div>


    <div className="services">
        <div className="dilivery">
<img src={img1} alt="" />
<h1>FREE SHIPPING</h1>
<p>Free shipping on all orders above 2000RS </p>
        </div>
        <div className="money">
<img src={img2} alt="" />
<h1>MONEY BACK GARANTEE</h1>
<p>100% money back garantee</p>
        </div>
        <div className="time">
            <img src={img3} alt="" />
            <h1>ONLINE SUPPORT 24/7</h1>
            <p>whatsapp 8919993233 for online support</p>

        </div>
        <div className="security">
<img src={img4} alt="" />
<h1>SECURE PAYMENT</h1>
<p>100% Secure paument in out portal</p>
        </div>
    </div>

    <div className="departments">
        <h1>Popular Departments</h1>
        <p>Products From These Categories Often Buy</p>
    </div>

    <div className="popular">
        <h1>Most Popular</h1>
        <p>All our new arrivals in a exclusive brand selection</p>
    </div>

    <div className="prod">
        <RangeP/>
    </div>

    <div className="spl">
    <SpecialP />
    </div>

    <div className="newarrival">
<div className="new1">
   <h1> Exclusive Product New Arrival
    </h1>
    <h2>Nuturemite Coffee</h2>
    <h3>SPECIAL BLEND</h3>
    <p>FRESH!</p>
</div>
<div className="new2">
    <img src={img5} alt="" />
    <h1><span style={{color:'lightgreen'}}>Stay</span> Healthy</h1>
    <h2><span style={{color:'lightgreen'}}>Low</span> Carb</h2>
    <h3>
Nuturemite-Banana-Fruit-Powder</h3>
</div>

<div className="mail">
    <div className="mail1">
    <img src={img6} alt="" />
    <h1>
Subscribe To Our Newsletter</h1>
<p>Get all the latest information on Events, Sales and Offers.</p>
</div>

<div className="mail2">
<input type="email" placeholder='Enter your Email' />
<button>SUBSCRIBE NOW!</button>
</div>
</div>


    </div>
    
    </>
  )
}

export default Home