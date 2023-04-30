import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { DataProvider } from './components/context/DataContext'
import { CarouselShowProvider } from './components/context/carouselShowContext'
import { BarsProvider } from './components/context/barsContext'
import { MouseMoveProvider } from './components/context/MouseMoveContext'

ReactDOM.createRoot(document.getElementById('root')).render(

<React.StrictMode>
  <BrowserRouter>
    <DataProvider>
      <CarouselShowProvider>
        <BarsProvider>
          <MouseMoveProvider>
            <App />
          </MouseMoveProvider>
        </BarsProvider>
      </CarouselShowProvider>
    </DataProvider>
  </BrowserRouter>
</React.StrictMode>,
)