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
        <div className="Pages">{ products.map((value, key) => {
            return <div key={key}>{value.name}</div>
          })
            }
          </div>
    )
}