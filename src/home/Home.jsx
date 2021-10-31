import "./home.scss";
import ProfilePicture from "../assets/profile_picture.jpg"
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <img width="100%" src={ProfilePicture} alt="User Profile Picture" />
    </div>
  );
};

export default Home;
