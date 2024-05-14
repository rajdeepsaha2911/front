import Navbar from "../Components/Navbar";
import img from "../Img/movie1.jpg";
import img1 from "../Img/Group.png";
const About = () => {
  return (
    <div className="main">
      <Navbar />
      <h1>For those who want to estublish a connection with us: </h1>
      <br />
      <h3>Introduction</h3>
      <p>
        Welcome to HunkTv, our ultimate destination for streaming entertainment! We are dedicated to provide you with the first class streaming experience, offering a vast library of movies, TV shows, documentaries, and more.
      </p><br />
      <div className="img"><img src={img} /></div>
      <h3>Why we created this website?</h3>
      <p>
        At HunkTV, our mission is to revolutionize the way you experience entertainment. We believe that everyone deserves access to high-quality, affordable entertainment, anytime, anywhere. Our platform is designed to cater to your needs, whether you're a casual viewer or a die-hard fan.
      </p><br />
      <h3>Our Team:</h3>
      <div className="images">
        <div className="img1"><img src={img1} /></div>
      </div>
      <p>Behind HunkTv is a team of passionate individuals dedicated to bringing you the best entertainment experience possible. From our developers to our content curators, every member of our team is committed to excellence.</p>
      <h3>What Sets Us Apart?</h3>
      <p>1.Diverse Content: We offer a diverse range of content, including movies, TV shows, documentaries, and original programming, catering to every taste and preference.</p>
      <p>2.High-Quality Streaming: Enjoy seamless streaming with high-definition video and crystal-clear audio, ensuring a cinematic experience in the comfort of your home.</p>
      <p>3.Affordable Pricing: We believe that entertainment should be accessible to all. That's why we offer affordable subscription plans, allowing you to enjoy unlimited streaming without breaking the bank.</p>
      <p>4.User-Friendly Interface: Our platform is designed with you in mind. With a simple, intuitive interface, you can easily navigate our library and discover new content to enjoy.</p><br />
      <h3>Contact Us</h3>
      <p>
      Have a question or feedback? We'd love to hear from you! Contact our support team at rajdeepsaha2911@gmail.com,deyshuvankita@gmail.com,royritam33@gmail.com or follow us on social media for the latest updates and news.
      </p>
    </div>
  );
};

export default About;
