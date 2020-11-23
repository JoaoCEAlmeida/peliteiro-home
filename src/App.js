import Navbar from "./Navbar";
import Banner from "./Banner";
import Description from "./Description";
import Calendar from "./Calendar";
import Experiences from "./Experiences";
import StayWithUs from "./StayWithUs";

import Footer from "./Footer";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Description />
      <Calendar />
      <Experiences />
      <StayWithUs />
      <Footer />
    </div>
  );
};

export default App;
