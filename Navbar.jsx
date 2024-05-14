import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="navbar">
          <div className="icon">
            <h2 className="logo"><Link to="/">Hunk TV</Link></h2>
          </div>
          <div className="menu">
            <ul>
              <li className="genre"><Link to="/genre">Genre</Link></li>
              <li className="country"><Link to="/country">Country</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/service">Service</Link></li>
            </ul>
          </div>
        </div>
      </div >
    </>
  )
}

export default Navbar
