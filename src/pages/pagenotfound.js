import React from "react";
import "../styles/pagenotfound/pagenotfound.css"

function PageNotFound() {
    return (
        <div className="centerInPage">
            <div className="mainContent">
                <div className="leftLargeError">4</div>
                <div className="centerLargeError">0</div>
                <div className="rightLargeError">4</div>
                <div className="message">
                    <p>Maybe this page moved?</p>
                    <p>Got deleted?</p>
                    <p>Is hiding out in quarantine?</p>
                    <p>Never existed in the first place?</p>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound;