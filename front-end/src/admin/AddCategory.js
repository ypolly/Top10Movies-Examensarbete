import React, {useState} from 'react';
import Layout from '../core/Layout';
import {isAuthenticated} from '../auth';
import { createCategory } from './apiAdmin';
import { Link } from 'react-router-dom';



const AddCategory = () => {
    const [name, setName] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    
    const {user, token} = isAuthenticated();

    const handleChange = (e) => {
        setError('');
        setName(e.target.value);
    };

    const clickSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);
        createCategory(user._id, token, {name})
        .then(data=> {
            if(data.error){
                setError(true);
            }
            else{
                setError("");
                setSuccess(true);
            }
        })
    }; 

    const showSuccess = () =>{
        if(success) {
            return <h3 className="text-success">{name} is created</h3>
        }
    };

    const showError= () =>{
        if(error) {
            return <h3 className="text-danger">Category should be unique</h3>
        }
    };

    const goBack= () =>(
       <div className="mt-5">
           <Link to="/admin/account" className="text-warning">Go back to Account</Link>
       </div>
    );

    const newCategoryForm = () => (
        <form onSubmit={clickSubmit}>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    value={name}
                    autoFocus
                    required
                />
            </div>
            <button className="btn btn-outline-primary">Create Category</button>
        </form>
    );

    return (
        <Layout title="Create New Category" description={`${user.name}`} >
         <div class="row">
        <div class="col-md-8 offset-md-2">
        {showSuccess()}
        {showError()}
        {newCategoryForm()}
        </div>
         </div>
        {goBack()}
        </Layout>
    );
};

export default AddCategory;
