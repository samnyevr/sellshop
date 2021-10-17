import React from "react";
import Hero from "../images/Pages/Heropage2.jpg"

export default function Home() {
    return (
    <>
        <h1 className="Container">SellShop</h1>
        <img src={Hero} alt=""/>
        <section className="HeroText">
            Browse Selection Men and Women Styled Tee
        </section>
    </>
    )
}