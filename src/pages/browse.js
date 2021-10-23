import React, {useState, useEffect} from "react";

import axios from "axios"

export default function Browse() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/products")
        .then((res) => {
            setProducts(res.data);
        })
        ;
    }, []) 

    return (
        <div className="Pages Browse">
            {products.map((value, key) => {
                return (
                    <div className="Product" key={key}>
                        <img src={value.img} />
                        <h1>{value.name}</h1>
                        <p>{value.price}</p>
                    </div>
                )
            })} 
        </div>
    )
}