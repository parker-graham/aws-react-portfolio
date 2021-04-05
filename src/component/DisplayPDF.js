import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;


export default function DisplayPDF(props)  {

    const [pageNumber, setPageNumber] = useState(1); // show first page

    function onDocumentLoadSuccess({numPages}) {
        setPageNumber(1);
    }

    const {pdf} = props;

    return (
        <div className="displayPdf">
            <Document 
                file = {pdf}
                options={{ workerSrc: pdfjsWorker}}
                onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={1} />
            </Document>
        </div>
    );
}