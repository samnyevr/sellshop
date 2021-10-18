import React, {useState, useEffect} from "react";

import Cloth1 from "../images/Products/Cloth1.jpg";
import Cloth2 from "../images/Products/Cloth2.jpg";
import Cloth3 from "../images/Products/Cloth3.jpg";
import Cloth4 from "../images/Products/Cloth4.jpg";
import Cloth5 from "../images/Products/Cloth5.jpg";

export default function Accordion() {
    return (<>
        <section className="AccordionContainer">
            <ol className="Accordion">
                <li className="Accordion">
                    <img src={Cloth1} />
                    <p>Women Plain Tee</p>
                </li>
                <li className="Accordion">
                    <img src={Cloth2} />
                    <p>Kid's Plain Tee</p>
                </li>
                <li className="Accordion">
                    <img src={Cloth3} />
                    <p>Men Graphic Tee</p>
                </li>
                <li className="Accordion">
                    <img src={Cloth4} />
                    <p>Women Graphic</p>
                </li>
                <li className="Accordion">
                    <img src={Cloth5} />
                    <p>Strips Tee</p>
                </li>

            </ol>
        </section>
    </>)
}