import { promises } from 'fs';
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ShowImage from './ShowImage';
import moment from 'moment';
import { addItem, updateItem, removeItem} from './cartHelpers';


const Card = ({product, 
  showViewProductButton = true , 
  showAddToCartButton = true, 
  cartUpdate=false,
  showRemoveProductButton=false,
  setRun = f => f,
  showDetails=true,
  run = undefined,
  cart= false
}) => {

  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  const handleChange = productId => event => {
    setRun(!run); // run useEffect in parent Cart
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateItem(productId, event.target.value);
    }
  };

  const showViewButton = (showViewProductButton, cartUpdate) => {
    return (
      showViewProductButton && (
        <Link to={`/product/${product._id}`} className="mr-2">
        <button className="btn btn-outline-primary mt-2 mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
        </svg>
        &nbsp;&nbsp;
        {!cartUpdate && ' View Product'}
      </button>
      </Link>
      )
    )
  };

  const addToCart = () => {
   // console.log('added');
    addItem(product, setRedirect(true));
  };
  
  const showRemoveButton = (showRemoveProductButton , cartUpdate)=> {
    return (
      showRemoveProductButton && (
        <button
          onClick={() => {
            removeItem(product._id);
            setRun(!run); // run useEffect in parent Cart
          }}
          className="btn btn-outline-danger mt-2 mb-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
             <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
             <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
           </svg>
           &nbsp;&nbsp;
          {!cartUpdate && 'Remove Product'}
         
        </button>
      )
    );
  };
  const shouldRedirect = redirect => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCartBtn = showAddToCartButton => {
    return (
      showAddToCartButton && (
        <button onClick={addToCart} className="btn btn-outline-warning mt-2 mb-2 card-btn-1  ">
          Add to cart
        </button>
      )
    );
  };

  const showCartUpdateOptions = cartUpdate => {
    return (
      cartUpdate && (
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Adjust Quantity</span>
            </div>
            <input type="number" className="form-control" value={count} onChange={handleChange(product._id)} />
          </div>
        </div>
      )
    );
  };

  const showStock = quantity => {
    return quantity > 0 ? (
      <span className="badge badge-danger badge-pill">In Stock </span>
    ) : (
      <span className="badge badge-danger badge-pill">Out of Stock </span>
    );
  };


  return(
  
      <div className="card">
        <div className="card-header card-header-1">{product.name}</div>
        <div className="card-body">
        {shouldRedirect(redirect)}

        {cart ? <><ShowImage item={product} url="product" cart="true"/></> : 
        <><ShowImage item={product} url="product"/></>}
          {/* <p className="lead mt-2">{product.description.substring(0, 100)}</p> */}
          <p className="text-info balck-10">{product.price} SEK</p>
          { showDetails && (<><p className="black-9">Category: {product.category && product.category.name}</p>
          <p className="black-8">Added on {moment(product.createdAt).fromNow()}</p>
          {showStock(product.quantity)}
          <br/>
          </>)}
          
          {showRemoveButton(showRemoveProductButton,cartUpdate)}
          {showViewButton(showViewProductButton,cartUpdate)}
          {showAddToCartBtn(showAddToCartButton)}
          {showCartUpdateOptions(cartUpdate)}

    
        </div>
      </div>

  )
}

export default Card;
