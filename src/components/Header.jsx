import React from "react";
import "../styles/Header.css";

function Header() {
    return (
        <section id="header">
            <div className="d-flex justify-content-between">
                {/* <h4 className="pt-5 text-shadow">Srirasthu !</h4>
                <h4 className="text-shadow">Subhamasthu !!</h4>
                <h4 className="pt-5 text-shadow">Kalyanamasthu !!!</h4> */}

                <h4 className="pt-1 text-shadow">Srirasthu !</h4>
                <h4 className="pt-1 text-shadow">Subhamasthu !!</h4>
            </div>
            <img
                src="../assets/images/poster.png"
                alt="poster"
                className="poster"
            />
            <h3>Sri Ganesha Namaha</h3>
            <h3>Sri Renuka Yellammavva Prasannaha</h3>
        </section>
    );
}

export default Header;
