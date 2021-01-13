import React from 'react';
import Layout from '../core/Layout';
import {isAuthenticated} from '../auth';

const Dashboard = () => { 
    return (
        <Layout title="Dashboard" description="User Dashboard">
            <div className="card mb-5">
                <h3 class="card-header">User Information</h3>
                <ul className="list-group">
                    <li className="list-group-item">name</li>

                    <li className="list-group-item">email</li>

                    <li className="list-group-item">role</li>
                </ul>
            </div>
        </Layout>
    );
};

export default Dashboard;