

import React from "react";

function PropertyCard({ property }) {
    return (
        <div className="property">
            <img src={property.image} alt={property.title} style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }} />
            <h3>{property.title}</h3>
            <p>{property.description}</p>
            <p><strong>Price:</strong> {property.currency}{property.price.toLocaleString()}</p>
            <p><strong>Location:</strong> {property.location}</p>
        </div>
    );
}

export default PropertyCard;

