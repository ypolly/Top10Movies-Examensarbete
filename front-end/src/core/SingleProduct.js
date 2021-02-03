import { promises } from 'fs';
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ShowImage from './ShowImage';
import moment from 'moment';
import { addItem, updateItem, removeItem} from './cartHelpers';


const SingleProduct = ({product
}) => {

  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);


  const addToCart = () => {
    addItem(product, setRedirect(true));
  };
  

  const showStock = quantity => {
    return quantity > 0 ? (
      <span className="badge badge-danger badge-pill">In Stock </span>
    ) : (
      <span className="badge badge-danger badge-pill">Out of Stock </span>
    );
  };


  return(
  
      <div className="d-flex justify-content-center">
        {/* <div className="card-header card-header-1">{product.name}</div> */}
        <div>
        <ShowImage item={product} url="product" />
          {/* <p className="lead mt-2">{product.description.substring(0, 100)}</p> */}
          <p className="balck-10">{product.price} SEK</p>
          <p className="black-9">Category: {product.category && product.category.name}</p>
          <p className="black-8">Added on {moment(product.createdAt).fromNow()}</p>
          {showStock(product.quantity)}
         
          <div>
          <button onClick={addToCart} className="btn btn-outline-warning mt-2 mb-2 card-btn-1  ">
            Add to cart
          </button>
          </div>
          </div>
       
      </div>

  )
}

export default SingleProduct;
