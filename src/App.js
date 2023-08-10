import "./App.css";
import Card from "./Components/Card";
import Carousel from "./Components/Carousel";
import Description from "./Components/Description";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Profile from "./Components/Profile";

function App() {
  return (
    <div className="App">
      <Header />
      <div className=" text-center justify-center  m-auto">
        <Carousel />
        <Description />
        <Card />
        <Profile />
      </div>
      <Footer />
    </div>
  );
}

export default App;
