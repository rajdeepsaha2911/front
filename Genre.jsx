import React from 'react'
import App from '../App'
import Navbar from '../Components/Navbar'
const Genre = () => {
  return (
    <div className="main">
      <Navbar />
      <ul id="submenu">
        <li><Link to="/action">Action</Link></li>
        <li><Link to="/biography">Biography</Link></li>
        <li><Link to="/drama">Drama</Link></li>
        <li><Link to="/horror">Horror</Link></li>
        <li><Link to="/science fiction">Science Fiction</Link></li>
        <li><Link to="/tv movie">TV Movie</Link></li>
        <li><Link to="/action & adventure">Action & Adventure</Link></li>
        <li><Link to="/comedy">Comedy</Link></li>
        <li><Link to="/family">Family</Link></li>
        <li><Link to="/kids"></Link>Kids</li>
        <li><Link to="/reality">Reality</Link></li>
        <li><Link to="/soap">Soap</Link></li>
        <li><Link to="/war">War</Link></li>
        <li><Link to="/adventure">Adventure</Link></li>
        <li><Link to="/crime">Crime</Link></li>
        <li><Link to="/music">Music</Link></li>
        <li><Link to="/fantasy">Fantasy</Link></li>
        <li><Link to="/romance">Romance</Link></li>
        <li><Link to="/talk">Talk</Link></li>
        <li><Link to="/war & politics">War & Politics</Link></li>
        <li><Link to="/animation">Animation</Link></li>
        <li><Link to="/documentary">Documentory</Link></li>
        <li><Link to="/history">History</Link></li>
        <li><Link to="/mystery">Mystery</Link></li>
      </ul>
    </div>
  )
}
export default Genre
