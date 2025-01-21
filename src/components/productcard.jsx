// write product card here
import React from 'react'
import Button from './button.jsx'

function Productcard({ProductData}){
    return(
        <div>
             <img src= {ProductData.productImage}  alt="ProductImage"  />
             <div>
               <p>productName: {ProductData.productName}</p>
               <p>price: {ProductData.price}</p>
               <Button />
             </div>
              
        </div>
    )
}
export default Productcard