import NavBar from "./Components/NavBar";
import Container from "./Components/Container";
import "@material-tailwind/react/tailwind.css";
import AboutMe from "./Components/AboutMe"
import Footer from './Components/Footer'
function App() {
  return (
    <>
      <NavBar />
      <Container />
      <AboutMe/>
      <Footer />
    </>
  );
}

export default App;
