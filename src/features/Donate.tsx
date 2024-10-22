import React from "react";
import "./Home.scss"

const Donate:React.FC=()=>{
    return(
       <div >
        <div className="Donate-container">
          <img
            src={`${process.env.PUBLIC_URL}/images/aboutImg/Able-SBI.png`}
            alt="SBI"
            className="SBI-Image"
          />
        </div>
       </div>
    )
}
export default Donate;