
import { NavLink ,Link } from 'react-router-dom'
import React from 'react'
import pic1 from './pages/images/images/images.jpg'
import pic2 from './pages/images/images/twi.png'
import pic3 from './pages/images/images/INS.jfif'
import pic4 from './pages/images/images/y.jfif'


function Footer() {
    return (
         <div className='footer'>

            <div className='fcoustomer'>
            
                <h1>CUSTOMER SERVICE</h1> <br />
               
                    <Link to="">Help & FAQs</Link><br />
                    <Link to="">Order Tracking</Link><br />
                    <Link to="">Shipping & Delivery</Link><br />
                    <Link to="">Orders History</Link><br />
                    <Link to="">Advanced Search</Link><br />
                    <Link to="">Login</Link>
                 
                
            </div>
            <div className="fabout">
                <h1>ABOUT US</h1> <br />
                <Link to="">About Us</Link> <br />
                <Link to="">Careers</Link> <br />
                <Link to="">Our Stores</Link> <br />
                <Link to="">Corporate Sales</Link> 
            
            </div>

            <div className="fmore">
                <h1>MORE INFORMATION</h1><br />
                <Link to="">Affiliates</Link> <br />
                <Link to="">Refer a Friend</Link> <br />
                <Link to="">Student Beans Offers</Link> <br />
            </div>

           <div className="fsocial">
            <h1>SOCIAL MEDIA</h1><br />
            <Link to=""><img src={pic1} style={{width:'25px'}}/> </Link>
            <Link to=""><img src={pic2} style={{width:'21px'}}/> </Link>
            <Link to=""><img src={pic3} style={{width:'21px'}}/></Link>
            <Link to=""><img src={pic4}style={{width:'25px'}}/></Link>
            
            
            
           </div>

            </div>
            )
}

            export default Footer;