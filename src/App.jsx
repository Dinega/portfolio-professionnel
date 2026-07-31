import {Routes , Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Projets from "./pages/projets.jsx";
import Home from "./pages/Home.jsx";
import Equipe from "./pages/Equipe.jsx";
import Contact from "./pages/contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import { useContext} from "react";
import {AppContext } from "./context/AppContext";

function App () {
  const { dark ,setDark }= useContext(AppContext);
  return (
    <>
    <button onClick={() => setDark(!dark)}>
      {dark ? "Mode clair" : "Mode sombre"}
    </button>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} /> ; 
      <Route path="/projets" element={<Projets/>} />
      <Route path="/equipe" element={<Equipe/>}/>;
      <Route path="/contact" element={<Contact/>}/>;
      <Route path="*" element={<NotFound/>} />
      
    </Routes>
    </>
  );
}
export default App;