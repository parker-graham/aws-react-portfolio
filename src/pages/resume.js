import React from "react";
import DisplayPDF from "../component/DisplayPDF";

const resumepage = () => {

    const respdf=process.env.PUBLIC_URL+'/ParkerGraham_Resume.pdf';

    return (
        <div className="body">
            <br></br>
        <DisplayPDF pdf={respdf} />
        <h5
            style={{textAlign: "center", fontFamily: "oxygenlight"}}>
            The library I used, react-pdf, displays PDF's as static images. Personally I would like a more responsive option..
        </h5>
        </div>
    );
};

export default resumepage;