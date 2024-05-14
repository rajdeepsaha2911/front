import { Link } from "react-router-dom";
import { RxTwitterLogo } from "react-icons/rx";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TbBrandGoogleFilled } from "react-icons/tb";
import { FaSkype } from "react-icons/fa6";
const Content = () => {
  return (
    <>
      <div className="main">
        <div className="form">
          <h2>Login Here</h2>
          <input type="email" name="email" placeholder="Enter Email Here" />
          <input type="password" name="" placeholder="Enter Password Here" />
          <button className="btwn">
            <a href="#">Login</a>
          </button>
          <p className="link">
            Don&apos;t have an account
            <br />
            <a href="#">Create </a> here
          </p>
          <p className="liw">Log in with</p>
          <div className="icons">
            <Link className="icon" to="https://www.facebook.com/login/">
              <FaFacebookSquare />
            </Link>
            <Link
              className="icon"
              to="https://www.instagram.com/accounts/login/"
            >
              <FaInstagram />
            </Link>
            <Link className="icon" to="https://twitter.com/login">
              <RxTwitterLogo />
            </Link>
            <Link className="icon" to="https://accounts.google.com/signin">
              <TbBrandGoogleFilled />
            </Link>
            <Link
              className="icon"
              to="https://support.skype.com/en/skype/all/start/signing-in-out/"
            >
              <FaSkype />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
