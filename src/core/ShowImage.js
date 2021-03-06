import React from 'react';
import {API} from '../config'

const ShowImage = ({item, url}) => (
  <div className="product-img">
    <img src={`${API}/${url}/photo/${item._id}`} alt="{item.name}" className="mb-3 image-fluid" style={{maxHeight: '200px', maxWidth: '150px'}}/>
  </div>
);

export default ShowImage;
