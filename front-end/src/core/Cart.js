import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import { getCart, removeItem ,getShipping} from './cartHelpers';
import Card from './Card';
import Checkout from './Checkout';
import  Shipping from './Shipping';


const Cart = () => {
    const [items, setItems] = useState([]);
    const [shipping, setShipping] = useState('');

    const [run, setRun] = useState(false);

    useEffect(() => {
        setItems(getCart());
        setShipping(getShipping())
    }, [run]);

    const showItems = items => {
        return (
            <div>
                <h4>Your cart has {`${items.length}`} items</h4>
                <hr />
                {items.map((product, i) => (
                    <Card
                        key={i}
                        product={product}
                        showAddToCartButton={false}
                        cartUpdate={true}
                        setRun={setRun}
                        run={run}
                        cartUpdate={true}
                        showRemoveProductButton={true}
                        showDetails={false}

                    />
                ))}
            </div>
        );
    };

    const noItemsMessage = () => (
        <h4>
            Your cart is empty. <br /> <Link to="/shop">Continue shopping</Link>
        </h4>
    );

    return (
        <Layout
            title="Shopping Cart"
            description=""
            className="container-fluid"
        >
            <div className="cartcontainer d-flex justify-content-center">
                <div className="cart-secondcontainter row ">

                    <h4 className="cart-items col-4">
                        {items.length > 0 ? showItems(items) : noItemsMessage()}
                    </h4>

                    <div className="col-8">
                    <Shipping setRun={setRun}
                        run={run}/>

                    <h4 className="mb-4">Your cart summary</h4>
                    <hr />
                    <Checkout products={items} shipping={shipping} />
                    </div>
                </div>
            </div>
       
        </Layout>
    );
};

export default Cart;