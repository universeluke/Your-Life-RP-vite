import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Community from "./components/Community";
import JoinNow from "./components/JoinNow";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import ScrollingImageBelt from "./components/ScrollingImageBelt";
import ScrollingTextBelt from "./components/ScrollingTextBelt";
import Beam from "./components/Beam";

function App() {
  return (
    <div className="relative z-10">
      <Header />
      <Hero />
      <Beam />
      <Features />
      <Carousel />
      <ScrollingImageBelt />
      <ScrollingTextBelt />
      <Community />
      {/* <JoinNow /> */}
      <Footer />
    </div>
  );
}

export default App;
