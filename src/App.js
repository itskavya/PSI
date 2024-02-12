import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import NoPage from './pages/NoPage';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Clubs from './pages/Clubs';
import ContactUs from './pages/ContactUs';
import Missions from './pages/Missions';
import Events from './pages/Events';




export default function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/missions" element={<Missions />} />
        <Route path="/events" element={<Events />}/>
        <Route path="/clubs" element={<Clubs />}/>
        <Route path="/about" element={<AboutUs />}/>
        <Route path="/contact" element={<ContactUs />}/>
        <Route path="/nopage" element={<NoPage />}/>

      </Routes>
      </BrowserRouter>

    </div>

  )

}
