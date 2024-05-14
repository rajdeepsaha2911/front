import { Link } from "react-router-dom"
import Navbar from "../Components/Navbar"
import { FaArrowRight } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
<FaSearch />
const LandingPage = () => {
  return (
    <div className="main" id="bgimg">
      <Navbar />
      <div className="content">
        <h5>Find Movies, TV shows and more</h5>
        <div>
          <div className="search-icon">
            <button><FaSearch /></button>
            <div className="imp-text"><input placeholder="Enter keywords..." className='imp' /></div>
            <button className="btn"><FaArrowRight /></button>
          </div>
        </div>
        <p className="para">Want to know where you can watch Tv series or web series for free in 2020? This website is one of the best websites to stream your favourite series online. We bring to you world class series watching experience in HDR quality. Free series streaming and download. Experience like never before. Watch brand new series or old classic ones 720p and 180p with HD quality online. Watch recently released web series and TV series only here. Don’t miss any season or episode, stream today!
        </p>
        <button className="cn"><Link to="/content">Join for Free</Link></button>
        <button className="cnd">Get Subscription</button>
      </div>
      <div className="trending">
        <p>Trending</p>
        <div><button className="movies">
          <i className="fa fa-play-circle mr-2">
          </i> Movies</button>
        </div>
        <div><button className="tvshows">
          <i className="fa fa-list mr-2">
          </i>Web Series</button>
        </div>
      </div><br />
      <div className="movie-card">
        <div className="w-1/5 p-4 py-5">
          <Link><img src="https://img.cataz.to/xxrz/250x400/185/f1/ee/f1eea88ae29890d1883a58fe688fcbc3/f1eea88ae29890d1883a58fe688fcbc3.jpg" alt="" /></Link>
          <Link><img src="https://img.cataz.to/xxrz/250x400/185/a6/a5/a6a514fac80fcaf22c0a2ed180e86c82/a6a514fac80fcaf22c0a2ed180e86c82.jpg" alt="" /></Link>
          <Link><img src="https://img.cataz.to/xxrz/250x400/185/b6/38/b63858452742b2a65071e3803362e274/b63858452742b2a65071e3803362e274.jpg" alt="" /></Link>
          <Link><img src="https://img.cataz.to/xxrz/250x400/185/1b/2e/1b2e7f907e0eabd02ddca00c9a3ca2a4/1b2e7f907e0eabd02ddca00c9a3ca2a4.jpg" alt="" /></Link>
          <Link><img src="https://img.cataz.to/xxrz/250x400/185/da/8b/da8bd47bd5ebd4d4460303d30af5e738/da8bd47bd5ebd4d4460303d30af5e738.jpg" alt="" /></Link>
        </div>
        <Link><img src="https://img.cataz.to/xxrz/250x400/185/f9/89/f989d38367bee867d4463005a61dfd19/f989d38367bee867d4463005a61dfd19.jpg" alt="" /></Link>
        <Link><img src="https://img.cataz.to/xxrz/250x400/185/dc/95/dc957e91e7af8c54f189ca8c21c5cab1/dc957e91e7af8c54f189ca8c21c5cab1.jpg" alt="" /></Link>
        <Link><img src="https://img.cataz.to/xxrz/250x400/185/57/68/576899c7db56f47fa48dbdab100d9edb/576899c7db56f47fa48dbdab100d9edb.jpg" alt="" /></Link>
        <Link><img src="https://img.cataz.to/xxrz/250x400/185/c2/d2/c2d2cac1a4658fb0aef6cf7707373791/c2d2cac1a4658fb0aef6cf7707373791.jpg" alt="" /></Link>
        <Link><img src="https://img.cataz.to/xxrz/250x400/185/b4/ed/b4ed2bf6911aacc0dc0604cc1828af1f/b4ed2bf6911aacc0dc0604cc1828af1f.jpg" alt="" /></Link>
        <Link><img src="https://img.cataz.to/xxrz/250x400/185/28/ec/28ec70b4206234908fbc3e572160150e/28ec70b4206234908fbc3e572160150e.jpg" alt="" /></Link>
        <Link><img src="https://img.cataz.to/xxrz/250x400/185/80/e0/80e03926b55e1eff5f3b765e03202fa4/80e03926b55e1eff5f3b765e03202fa4.jpg" alt="" /></Link>
        <Link><img src="https://img.cataz.to/xxrz/250x400/185/ee/68/ee684b0d95199c3339042481307386c9/ee684b0d95199c3339042481307386c9.jpg" alt="" /></Link>
        <Link><img src="https://img.cataz.to/xxrz/250x400/185/a8/47/a84719e9e07643a0f48ec0864adfe6ad/a84719e9e07643a0f48ec0864adfe6ad.jpg" alt="" /></Link>
        <Link><img src="https://img.cataz.to/xxrz/250x400/185/9b/24/9b242d31d97c7b51b3617f53904353fd/9b242d31d97c7b51b3617f53904353fd.jpg" alt="" /></Link>
        <Link><img src="https://img.cataz.to/xxrz/250x400/185/e8/ad/e8ad60dd67c5bc3f2f133058d0b16dc9/e8ad60dd67c5bc3f2f133058d0b16dc9.jpg" alt="" /></Link>
        <Link><img src="https://img.cataz.to/xxrz/250x400/185/dd/d6/ddd665a9993a97ede2b18ce08275e312/ddd665a9993a97ede2b18ce08275e312.jpg" alt="" /></Link>
        <Link><img src="https://img.cataz.to/xxrz/250x400/185/97/0d/970d1971e17da102526d5080f89001b6/970d1971e17da102526d5080f89001b6.jpg" alt="" /></Link>
        <Link><img src="https://img.cataz.to/xxrz/250x400/185/5c/ab/5cab366853ac750d09c8823e3b67c989/5cab366853ac750d09c8823e3b67c989.jpg" alt="" /></Link>
        <Link><img src="https://img.cataz.to/xxrz/250x400/185/4c/56/4c56c718a76dac095ddc133c4ba144ba/4c56c718a76dac095ddc133c4ba144ba.jpg" alt="" /></Link>
        <Link><img src="https://img.cataz.to/xxrz/250x400/185/7a/ce/7ace35400fa8a1a12896cbc99aaff2ba/7ace35400fa8a1a12896cbc99aaff2ba.jpg" alt="" /></Link>
        <Link><img src="https://img.cataz.to/xxrz/250x400/185/d9/b0/d9b0e911dc55cec58128036d4a5c5414/d9b0e911dc55cec58128036d4a5c5414.jpg" alt="" /></Link>
        <Link><img src="https://img.cataz.to/xxrz/250x400/185/02/96/02968d9cfa75a279d98ae3ad796b043d/02968d9cfa75a279d98ae3ad796b043d.jpg" alt="" /></Link>
        <Link><img src="https://img.cataz.to/xxrz/250x400/185/17/48/174861588d88bdff39ce52ed13c1dc4c/174861588d88bdff39ce52ed13c1dc4c.jpg" alt="" /></Link>
        <Link><img src="https://img.cataz.to/xxrz/250x400/185/36/f1/36f112d2a1b8620a61c165cd5cee83f5/36f112d2a1b8620a61c165cd5cee83f5.jpg" alt="" /></Link>
      </div>
    </div >
  )
}
const Card = ({ title, description, imgUrl }) => {
  return (
    <div className="bg-black bg-opacity-40 w-1/5 p-4 rounded-lg hover:bg-gray-400 hover:bg-opacity-20">
      <div className="pb-4 pt-2"><img className="w-full rounded-md" src={imgUrl} alt="label" /></div>
      <div className="text-white font-semibold py-3">{title}</div>
      <div className="text-gray-500 text-sm">{description}</div>
    </div>
  );
};

export default LandingPage
