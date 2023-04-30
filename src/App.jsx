import { useState , useContext, useEffect } from 'react'
import './App.css'
import { Route , Routes, useLocation } from 'react-router-dom'
import Header from './components/Header/Header'
import Services from './components/services/Services'
import MainV from './components/mainV/MainV'
import About from './components/about/About'
import Travel from './components/travel/Travel'
import Contact from './components/contact/Contact'
import { BarsContext } from './components/context/barsContext'
import  Footer  from './components/footer/Footer'
import ContactPage from './pages/contactPage/ContactPage'
import TravelForeign from './pages/travelForeign/TravelForeign'
import TravelUzb from './pages/travelUzb/TravelUzb'
import Market from './pages/market/Market'

function App() {

  let {bars , setBars} = useContext(BarsContext)

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);


  if (windowSize >= 921) {
    setBars(true)
  }


  const {pathname} = useLocation()



  return (
    <div className="App">
        <Header/>
      <Routes>
        <Route path='/'  element={<MainV/>} />
        <Route path='/services' element={<Services/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/travel' element={<Travel windowSize={windowSize} />} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/travel/foreign' element={<TravelForeign/>} />
        <Route path='/travel/uzbekistan' element={<TravelUzb/>} />
        <Route path='/market' element={<Market/>} />
      </Routes>

      {
        (pathname == "/travel" || pathname == "/contact" || pathname == "/market" || pathname == "/travel-foreign" || pathname == "/travel-uzbekistan") ? "" : <Contact/>
      }
      

      <Footer/>

    </div>
  )
}

export default App
