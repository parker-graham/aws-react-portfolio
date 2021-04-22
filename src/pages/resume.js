import React from "react";
import DisplayPDF from "../component/DisplayPDF";

const resumepage = () => {

    const respdf=process.env.PUBLIC_URL+'/ParkerGraham_Resume.pdf';

    return (
        <div className="body">
            <br></br>
        <DisplayPDF pdf={respdf} />
        <div>ur mommmm</div>
        </div>
    );
};

export default resumepage;