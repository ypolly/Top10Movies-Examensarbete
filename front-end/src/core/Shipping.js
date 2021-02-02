import React, { useState } from 'react';
import { chooseShipping } from './cartHelpers';



let Delivery = [{
  name: "PostNord",
  price: 49,
  days: 3
}, {
  name: "DHL",
  price: 149,
  days: 2
}, {
  name: "Schenker",
  price: 499,
  days: 1
}
  
];

const Shipping = ({ setRun = f => f, run = undefined }) => {
const [shipping, setShipping]= useState('');
  
const handleChange = event => {
    setRun(!run); 
    setShipping(event.target.value);
     localStorage.setItem('shipping', JSON.stringify(event.target.value));

  };

 const renderPaymentFields = () => {
    switch(shipping) {
      case '49': return(
      <div>
        <div >
          <p>{Delivery[0].name}</p>
          <p>Waiting time: {Delivery[0].days} days</p>
          <p>Shipping fee: {Delivery[0].price} kr.</p>
          <p>Expected delivery: {new Date(new Date().setDate(new Date().getDate() + Delivery[0].days)).toISOString().substring(0, 10)}</p>
        </div>
      </div>
      )
      case '149': return(
      <div>
         <div >
          <p>{Delivery[1].name}</p>
          <p>Waiting time: {Delivery[1].days} days</p>
          <p>Shipping fee: {Delivery[1].price} kr.</p>
          <p>Expected delivery: {new Date(new Date().setDate(new Date().getDate() + Delivery[1].days)).toISOString().substring(0, 10)}</p>
        </div>
      </div>
      ) 
      case '499': return(
      <div>
        <div >
          <p>{Delivery[2].name}</p>
          <p>Waiting time: {Delivery[2].days} days</p>
          <p>Shipping fee: {Delivery[2].price} kr.</p>
          <p>Expected delivery: {new Date(new Date().setDate(new Date().getDate() + Delivery[2].days)).toISOString().substring(0, 10)}</p>
        </div>
      </div>
      )
    }
  }


 
    return (
<>
        <h4>Choose the delivery method </h4>
        <div>
          <input type='radio' value={Delivery[0].price} id={Delivery[0].name}   name="shipping"// label="Postnord" 
          onChange={handleChange}
          //checked={this.state.selectedDeliveryMethod === "PostNord"}
          />
          <label for={Delivery[0].name}>{Delivery[0].name}</label>
          </div>
            <div>
          <input type='radio' value={Delivery[1].price} name="shipping" // label="DHL"
           onChange={handleChange} />
           <label for={Delivery[1].name}>{Delivery[1].name}</label>
           </div>
           <div>
          <input type='radio' value={Delivery[2].price} name="shipping"//label="Schenker" 
          onChange={handleChange} />
            <label for={Delivery[2].name}>{Delivery[2].name}</label>

        </div>
          
        <div>{renderPaymentFields()}</div>
       
</>
    );

}

export default Shipping ;
