import React from "react";
import { API } from "../config";

const ShowImage = ({ item, url, cart = false }) => (
    <div className="product-img">
        <img
            src={`${API}/${url}/photo/${item._id}`}
            alt={item.name}
            className="productimage"
           
            style={{
                maxHeight: cart ? '100px' : '100%',
                maxWidth: cart ? '100px' : '100%'
              }}
        />
    </div>
);

export default ShowImage;