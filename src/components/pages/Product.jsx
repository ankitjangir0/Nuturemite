import React from 'react'
import Range from './RangeP'
import SpecialP from './SpecialP'

function Product() {
    return (
        <div>
            <div className="navnav">
                <h1>PRODUCTS</h1>
            </div>
        <div className='productfilter'>
            <Range />
        </div>
        <div className="sproduct">
               <SpecialP/>
        </div>
        </div>
    )
}

export default Product