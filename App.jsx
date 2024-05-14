import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import About from './Pages/About'
import Service from './Pages/Service'
import LandingPage from './Pages/LandingPage'
import Content from './Components/Content'
import Genre from './Pages/Genre'
import WebSeries from './Pages/WebSeries'
import TopIDMB from './Pages/TopIDMB'
import Video from './Pages/Video'
import Country from './Country'
function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/genre" element={<Genre />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/content" element={<Content />} />
          <Route path="/Movies" element={<Video />} />
          <Route path="/webseries" element={<WebSeries />} />
          <Route path="/TopIDMB" element={<TopIDMB />} />
          <Route path="/country" element={<Country />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
