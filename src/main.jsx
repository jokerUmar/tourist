import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./components/context/DataContext";
import { CarouselShowProvider } from "./components/context/carouselShowContext";
import { BarsProvider } from "./components/context/barsContext";
import { MouseMoveProvider } from "./components/context/MouseMoveContext";
import { ArrayDataProvider } from "./components/context/ArrayDataContext";
import { SummaProvider } from "./components/context/SummaContext";
import { LangProvider } from "./components/context/LangContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LangProvider>
        <DataProvider>
          <CarouselShowProvider>
            <BarsProvider>
              <MouseMoveProvider>
                <ArrayDataProvider>
                  <SummaProvider>
                    <App />
                  </SummaProvider>
                </ArrayDataProvider>
              </MouseMoveProvider>
            </BarsProvider>
          </CarouselShowProvider>
        </DataProvider>
      </LangProvider>
    </BrowserRouter>
  </React.StrictMode>
);
