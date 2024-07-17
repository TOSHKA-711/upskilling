import Section1 from "./assets/componants/section1/Section1";
import Section2 from "./assets/componants/section2/Section2";
import Recipes from "./assets/componants/recipes/Recipes";
import "./App.css";
import Testy from "./assets/componants/Testy/Testy";
import ContactUs from "./assets/componants/ContactUs/ContactUs";
import Footer from "./assets/componants/Footer/Footer";
import How from "./assets/componants/How/How";

function App() {
  return (
    <>
      <Section1 />
      <How/>
      <Section2 />
      <Recipes />
      <Testy />
      <ContactUs />
      <Footer/>
    </>
  );
}

export default App;
