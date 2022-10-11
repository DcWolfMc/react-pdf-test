import React, { useState, useEffect } from "react";
import { callSinisterById } from "./services/callSinisterById";
import { FormData } from "./@types/types";
import { VerWeb } from "./VerWeb";

function App() {
  const [data, setData] = useState<FormData>();
  const [showWeb, setShowWeb] = useState<boolean>(true);
  const [showPdf, setShowPdf] = useState<boolean>(false);

  useEffect(() => {
    async function apiCall() {
      callSinisterById()
        .then((response) => {
          console.log(response.data);
          setData(response.data);
        })
        .catch((error) => console.log(error));
    }
    apiCall();
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
