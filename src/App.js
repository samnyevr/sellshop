import React, {Component, useEffect, useState} from "react";

import axios from "axios"

import "./styles/index.scss"
import {Onboarding} from "./pages/index.js";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/products")
      .then((res) => {
        setProducts(res.data);
      })
    ;
  }, []) 

  return (
    <>
      <Onboarding></Onboarding>
      
      <div>{ products.map((value, key) => {
        return <div key={key}>{value.name}</div>
      })
        }
      </div>
    </>
  );
};

export default App;
