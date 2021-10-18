import React from "react";
import Hero from "../images/Pages/Heropage2.jpg"

import { Accordion } from "../components";

export default function Home() {
    return (
    <>
        <h1 className="Container">SellShop</h1>
        <div className="hero">
            <img src={Hero} alt=""/>
            <p className="HeroText">
                Browse Selection Men and Women Styled Tee
            </p>
        </div>
        <Accordion />
    </>
    )
}