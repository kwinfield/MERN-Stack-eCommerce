import React from 'react';
import Layout from '../core/Layout'
import { isAuthenticated } from '../auth'
import {Link} from 'react-router-dom'


const adminDashboard = () => {

  const {user: {_id, name, email, role}} = isAuthenticated()

  const adminLinks = () => (
    <div className='card'>
      <h4 className="card-header">Admin Links</h4>
      <ul className="list-group">
        <il className="list-group-item">
          <Link className="nav-link" to='/create/category'>Create Category</Link>
        </il>
        <il className="list-group-item">
          <Link className="nav-link" to='/create/product'>Create Product</Link>
        </il>
        <il className="list-group-item">
          <Link className="nav-link" to='/admin/orders'>View Orders</Link>
        </il>
        <il className="list-group-item">
          <Link className="nav-link" to='/admin/products'>Manage Products</Link>
        </il>
      </ul>
    </div>
  );

  const adminInfo = () => (
    <div className="card mb-5">
      <h3 className="card-header">Admin Information</h3>
      <ul className="list-group">
        <il className="list-group-item">{name}</il>
        <il className="list-group-item">{email}</il>
        <il className="list-group-item">{role === 1 ? 'Admin' : 'Registered User'}</il>
      </ul>
    </div>
  );


  return(
    <Layout title="Dashboard" description={`Good Day ${name}!`} className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          {adminLinks()}
        </div>
        <div className="col-md-9">
          {adminInfo()}
        </div>
      </div>
    </Layout>
  )
}

export default adminDashboard;
