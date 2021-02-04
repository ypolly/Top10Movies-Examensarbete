import React, {useState, useEffect} from "react";
import Layout from './Layout';
import { read, listRelated } from './apiCore';
import SingleProduct from './SingleProduct';





const Product = (props) => {
    const [product, setProduct] = useState({});
    const [error, setError] = useState(false);
    const [relatedProduct, setRelatedProduct] = useState([]);


    const loadSingleProduct = productId => {
        read(productId).then( data => {
            console.log(data);
            if(data.error) {
                setError(data.error);
            } else {
                setProduct(data);
            }
        });
    };

    useEffect(() => {
        const productId = props.match.params.productId
        loadSingleProduct(productId)
    }, [props]);


    return (
        <Layout
        title={product && product.name}
       description=''
        className="container-fluid"
>
    <div className="d-flex justify-content-center">
                <div className="row-6">
                    {product && product.description && <SingleProduct product={product} showViewProductButton={false} />}
                </div>
                <p className="prdescription">{product && product.description && product.description.substring(0, 800)}</p>
                {/* <div className="row-6">
                    {relatedProduct.map((p, i) => (
                        <div className="mb-3" key={i}>
                            <Card product={p} />
                        </div>
                    ))}
                </div> */}
    </div>

</Layout>
    )

}

export default Product;
