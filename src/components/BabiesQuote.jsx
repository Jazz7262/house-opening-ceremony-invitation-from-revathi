import React from "react";
import "../styles/BabiesQuote.css";

function BabiesQuote() {
    return (
        <section id="babies-quote">
            <div className="inner-content">
                <h1>Heartly Welcome To Our House Opening Ceremony ....</h1>
                <h3>
                    --- Yellamma Revathi,
                    {/* <br />
                    --- Jasrah Manahil, */}
                    <br />
                    --- Uday Indu,
                    <br />
                    --- Praveen.
                </h3>
            </div>
            {/* <div className="inner-content mt-4 pt-4 line-break">
                <h1>Heartly Welcome To Our Brother's Wedding ....</h1>
                <h3>
                    --- Sri Charitha,
                    <br />
                    --- Tejaswini,
                    <br />
                    --- Harshita.
                    <br />
                    --- Shravan Kumar.
                    <br />
                    --- Varshith.
                </h3>
            </div> */}
        </section>
    );
}

export default BabiesQuote;
