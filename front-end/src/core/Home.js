import React, {useState, useEffect} from "react";
import Layout from './Layout';
import { getProducts } from './apiCore';
import Card from './Card';
import Search from './Search';
import { Carousel } from "react-bootstrap";


const Home = () => {
    const [productsBySell, setProductsBySell] = useState([]);
    const [productsByArrival, setProductsByArrival] = useState([]);
    const [error, setError] = useState(false);

    const loadProductsBySell = () => {
        getProducts('sold').then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProductsBySell(data);
            }
        });
    };

    const loadProductsByArrival = () => {
        getProducts('createdAt').then(data => {
            console.log(data);
            if (data.error) {
                setError(data.error);
            } else {
                setProductsByArrival(data);
            }
        });
    };

    useEffect(() => {
        loadProductsByArrival();
        loadProductsBySell();
    }, []);

return (
    <Layout

    
    title=""
    description=""
    className="container-fluid"
>

    <Search />

    <div className="caontainercaro d-flex justify-content-center">
    <div className="App">

      <Carousel className="customcarousel">
        <Carousel.Item>
          <img
            className="customcarousel d-block w-100"
            src="/images/sliderimg01.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Top 10 Movies</h3>
            <p>High Quality Picture HD and UltraHD</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="customcarousel d-block w-100"
            src="/images/sliderimg04.jpg"
            alt="Third slide"
          />

          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="customcarousel d-block w-100"
            src="/images/sliderimg02.jpg"
            alt="Third slide"
          />

        </Carousel.Item>
      </Carousel>
    </div>
    </div>


    <h2 className="customheader mb-4 d-flex justify-content-center">New Arrivals</h2>
    <div className="mainprcontainer d-flex justify-content-center">
    <div className="customproductcontainer ">
    <div className="row">
        {productsByArrival.map((product, i) => (
            <div key={i} className="col-4 mb-3">
                <Card product={product} />
            </div>
        ))}
    </div>

    <h2 className="customheader mb-4 d-flex justify-content-center">Best Sellers</h2>
    <div className="row">
        {productsBySell.map((product, i) => (
            <div key={i} className="col-4 mb-3">
                <Card product={product} />
            </div>
        ))}
    </div>
    </div>
    </div>
</Layout>

);

};

export default Home;
