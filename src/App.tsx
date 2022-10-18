import React, { useState, useEffect } from "react";
import { callSinisterById } from "./services/callSinisterById";
import { FormData, IncidentImages } from "./@types/types";
import { VerWeb } from "./VerWeb";
import { callSinisterImages } from "./services/callSinisterImages";

function App() {
  const [data, setData] = useState<FormData>();
  const [showWeb, setShowWeb] = useState<boolean>(true);
  const [showPdf, setShowPdf] = useState<boolean>(false);
  const [imagesArray, setimagesArray] = useState<IncidentImages[]>([]);
  useEffect(() => {
    async function apiCalls() {
      callSinisterById("650dfc2c-3a3a-4419-ae91-a91a5adf0932")
        .then((response) => {
          console.log("sinistro: ", response.data);
          setData(response.data);
        })
        .catch((error) => console.log(error));

      callSinisterImages("af0b4082-1ff7-492f-821a-ce76de979dc8").then(
        (response) => {
          console.log("images: ", response.data);
          setimagesArray(response.data);
        }
      );
    }
    apiCalls();
  }, []);

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

          <button className="MenuButton">PDF Download</button>
        </nav>
      </div>
      {data && (
        <div className="Content">
          {showWeb && <VerWeb sinistro={data} />}
          {showPdf && <p>PDF page</p>}
        </div>
      )}
    </div>
  );
}

export default App;
