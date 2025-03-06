import React, { useState, useEffect } from "react";
import PropertyList from "../components/propertyList";
import { getProperties } from "../api";

function Properties() {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        getProperties().then(data => {
            setProperties(data); // 加载 JSON 数据
        });
    }, []);

    return (
        <div className="container">
            <h1>Real Estate Listings</h1>
            <PropertyList properties={properties} />
        </div>
    );
}

export default Properties;
