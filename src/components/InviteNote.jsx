import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
    return (
        <section id="invite-note">
            <div className="from">
                <h5>An Invitation from:</h5>
                <h2>
                    Srimati K. Uchiramma and <br />
                    Sri K. Pedda Yellappa <br />
                    & <br />
                    Srimati Batthina Shakuntala and <br />
                    Sri Batthina Narayana
                </h2>

                <h5 className="address mb-3">
                    <br /> Chigili Village,
                    <br /> Aspari Mandal.
                </h5>
                <p className="address">
                    Contact: <br />
                    +91 95424 73020, <br />
                    +91 99514 13200.
                </p>
            </div>
        </section>
    );
}

export default InviteNote;
