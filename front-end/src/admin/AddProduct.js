import React, {useState, useEffect} from 'react';
import Layout from '../core/Layout';
import {isAuthenticated} from '../auth';
import { createProduct} from './apiAdmin';
import { Link } from 'react-router-dom';
import {getCategories} from './apiAdmin';

const AddProduct = () => {
    const {user, token} = isAuthenticated();
    const [values, setValues] = useState({
        name: '',
        description: '',
        price: '',
        categories: [],
        category: '',
        shipping: '',
        quantity: '',
        photo: '',
        loading: false,
        error: '',
        createProduct: '',
        redirectToProfile: false,
        formData: ''

    })

    const {name,
    description,
    price,
    categories,
    category,
    shipping,
    quantity,
    photo,
    loading,
    error,
    createProduct,
    redirectToProfile,
    formData
    } = values;

    const init = () => {
        getCategories().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    categories: data,
                    formData: new FormData()
                });
            }
        });
    };
    

    useEffect(() => {
        init();
    }, []);


    const handleChange = name => event => {
        const value = name === 'photo' ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: '', loading: true });

        createProduct(user._id, token, formData).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    name: '',
                    description: '',
                    photo: '',
                    price: '',
                    quantity: '',
                    loading: false,
                    createdProduct: data.name
                });
            }
        });
    };

    const postNewForm = () =>(
        <form className="mb-3" onSubmit={clickSubmit}>
            <h4>
                Post Photo
            </h4>

            <div className="form-group">
                <label className="btn btn-secondary">
                <input type="file" onChange={handleChange('photo')} name="photo" accept="image/*" />
                </label>
            </div>

            <div className="form-group">
                <label className="text-muted">Name</label>
                <input type="text" onChange={handleChange('name')} className="form-control" value={name} />
            </div>

            <div className="form-group">
                <label className="text-muted">Description</label>
                <textarea onChange={handleChange('description')} className="form-control" value={description} />
            </div>

            <div className="form-group">
                <label className="text-muted">Price</label>
                <input type="number" onChange={handleChange('price')} className="form-control" value={price} />
            </div>

            <div className="form-group">
                <label className="text-muted">Shipping</label>
                <select  onChange={handleChange('shipping')} className="form-control">
                    <option value="0">No</option>
                    <option value="1">Yes</option>
                </select>
            </div>

            <div className="form-group">
                <label className="text-muted">Category</label>
                <select  onChange={handleChange('category')} className="form-control">
                <option>Please select</option>
                    {categories &&
                        categories.map((c, i) => (
                            <option key={i} value={c._id}>
                                {c.name}
                            </option>
                        ))}
                </select>
            </div>

            <div className="form-group">
                <label className="text-muted">Quantity</label>
                <input type="number" onChange={handleChange('quantity')} className="form-control" value={quantity} />
            </div>
            <button className="btn btn-outline-primary">Create Product</button>
        </form>

    );
    return (
       
            <Layout title="Add New Product" description={`${user.name}, ready to add new product?`} >
             <div class="row">
            <div class="col-md-8 offset-md-2">
                {postNewForm()}
            </div>
             </div>
        
            </Layout>
        );
};

export default AddProduct;