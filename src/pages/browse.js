import React, {useState, useEffect} from "react";

import axios from "axios"

export default function Browse() {
    const [products, setProducts] = useState([]);
    const [showFilter, setShowFilter] = useState(true);
    const [filterOptions, setFilterOptions] = useState({});

    useEffect(() => {
//        axios.get("http://localhost:3001/products")
        axios.get("https://sellshop-server.herokuapp.com/products")
        .then((res) => {
            setProducts(res.data);
        });
        setFilterOptions({
            WomenPlainTee: false,
            KidsPlainTee: false,
            MenGraphicTee: false,
            WomenGraphic: false,
            StripeTee: false
        })

    }, []) 

    const handleFilterIconClick = () => {
        setShowFilter(!showFilter);
    }

    const handleFilterListClick = (event) => {
        if(event.target.classList.contains("WomenPlainTee")) {
            setFilterOptions({...filterOptions, WomenPlainTee: !filterOptions.WomenPlainTee});
        }
        else if(event.target.classList.contains("KidsPlainTee")) {
            setFilterOptions({...filterOptions, KidsPlainTee: !filterOptions.KidsPlainTee});
        }
        else if(event.target.classList.contains("MenGraphicTee")) {
            setFilterOptions({...filterOptions, MenGraphicTee: !filterOptions.MenGraphicTee});
        }
        else if(event.target.classList.contains("WomenGraphic")) {
            setFilterOptions({...filterOptions, WomenGraphic: !filterOptions.WomenGraphic});
        }
        else if(event.target.classList.contains("StripeTee")) {
            setFilterOptions({...filterOptions, StripeTee: !filterOptions.StripeTee});
        }
    }

    return (
        <div className="Pages">
            <section className="BrowseHeader Header">
                <h1 className="">Browse</h1>
                {showFilter ?
                <section className="Filter" onClick={handleFilterIconClick}>
                    <h2>Filter</h2>
                    <div className="FilterIcon">
                        <div className="Icon Line1"></div>
                        <div className="Icon Line2"></div>
                        <div className="Icon Line3"></div>
                        <div className="Icon Line4"></div>
                    </div>
                </section>
                : 
                <section className="Filter Modal">
                    <div className="FilterIcon"  onClick={handleFilterIconClick}>
                        <div className="Icon Cross1"></div>
                        <div className="Icon Cross2"></div>
                    </div>
                    <div className="FilterList">
                        <p className={`WomenPlainTee ${filterOptions.WomenPlainTee ? "FilterListActive" : ""}`} onClick={handleFilterListClick}>Women Plain Tee</p>
                        <p className={`KidsPlainTee ${filterOptions.KidsPlainTee ? "FilterListActive" : ""}`} onClick={handleFilterListClick}>Kid's Plain Tee</p>
                        <p className={`MenGraphicTee ${filterOptions.MenGraphicTee ? "FilterListActive" : ""}`} onClick={handleFilterListClick}>Men Graphic Tee</p>
                        <p className={`WomenGraphic ${filterOptions.WomenGraphic ? "FilterListActive" : ""}`} onClick={handleFilterListClick}>Women Graphic</p>
                        <p className={`StripeTee ${filterOptions.StripeTee ? "FilterListActive" : ""}`} onClick={handleFilterListClick}>Stripe Tee</p>
                    </div>
                </section>
                }
            </section>
            <section className="Browse">
            {products.map((value, key) => {
                return (
                    
                    (<div className="Product" key={key}>
                        <img src={value.img} />
                        <h2>{value.name}</h2>
                        <p>{value.price}</p>
                    </div>)
                )
            })} 
            </section>
        </div>
    )
}