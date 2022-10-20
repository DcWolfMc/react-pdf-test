import React, { useState, useEffect } from "react";
import { callSinisterById } from "./services/callSinisterById";
import { FormData, IncidentImages } from "./@types/types";
import { VerWeb } from "./VerWeb";
import { callSinisterImages } from "./services/callSinisterImages";
import { VerPdf } from "./VerPdf";
import { PDFViewer } from '@react-pdf/renderer';
import {JsonData} from "./data"
import { PDF } from "./pdf";
function App() {
  const [data, setData] = useState<any>(JsonData);
  const [showWeb, setShowWeb] = useState<boolean>(true);
  const [showPdf, setShowPdf] = useState<boolean>(false);
  const [imagesArray, setimagesArray] = useState<IncidentImages[]>([]);
  // useEffect(() => {
  //   async function apiCalls() {
  //     callSinisterById("650dfc2c-3a3a-4419-ae91-a91a5adf0932")
  //       .then((response) => {
  //         console.log("sinistro: ", response.data);
  //         setData(response.data);
  //       })
  //       .catch((error) => {
  //         console.log("callSinisterById error:",error)
  //         setData(JsonData)
  //       });

  //     callSinisterImages("af0b4082-1ff7-492f-821a-ce76de979dc8")
  //     .then((response) => {
  //         console.log("images: ", response.data);
  //         setimagesArray(response.data);
  //       }
  //     ).catch((error)=>{
  //       console.log("callSinisterImages error:",error)
  //     });
  //   }
  //   apiCalls();
  // }, []);

  return (
    <div className="App">
      <div className="Menu">
        <nav className="navbar">
          <button
            className="MenuButton"
            onClick={() => {
              setShowWeb((prev) => !prev);
              setShowPdf(false);
            }}
          >
            {showWeb ? "Ocultar Web" : "Ver Web"}
          </button>

          <button
            className="MenuButton"
            onClick={() => {
              setShowPdf((prev) => !prev);
              setShowWeb(false);
            }}
          >
            {showPdf ? "Ocultar PDF" : "Ver PDF"}
          </button>
          
          {data && (
            // <PDFDownloadLink  document={ <VerPdf sinistro={data} />} fileName='sinistro.pdf'>
              <button className="MenuButton">PDF Download</button>
            // </PDFDownloadLink>
          )}
          
          
        </nav>
      </div>

      {data && (
        <div className="Content" style={{minWidth: '100vh'}}>
          {showWeb && <VerWeb sinistro={data} />}
          {/* {showPdf && ( */}
             {/* <PDFViewer> */}
              {/* <PDF/> */}
              {/* <VerPdf sinistro={data} /> */}
             {/* </PDFViewer> */}
          {/* )
          } */}
        </div>
      )}
    </div>
  );
}

export default App;
