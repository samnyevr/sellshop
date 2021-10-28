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
        <div className="Pages">
            <h1 className="Header">Browse</h1>
            <section className="Browse">
            {products.map((value, key) => {
                return (
                    <div className="Product" key={key}>
                        <img src={value.img} />
                        <h2>{value.name}</h2>
                        <p>{value.price}</p>
                    </div>
                )
            })} 
            </section>
        </div>
    )
}