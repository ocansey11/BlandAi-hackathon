import React from "react";
import PropertyCard from "./propertyCard";

function PropertyList({ properties }) {
    return (
        <div className="property-list">
            {properties.length > 0 ? (
                properties.map(property => (
                    <PropertyCard key={property.id} property={property} />
                ))
            ) : (
                <p>No properties available.</p>
            )}
        </div>
    );
}

export default PropertyList;
