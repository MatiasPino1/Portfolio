import Footer from "./components/Footer";
import { Header } from "./components/Header";
import Navi from "./components/Navi";
import { Projects } from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navi></Navi>
      <Header />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
