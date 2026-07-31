import {Routes , Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Projets from "./pages/projets";
import Home from "./pages/Home";
import Equipe from "./pages/Equipe";
import Contact from "./Pages/contact.jsx";
import NotFound from "./pages/NotFound.jsx";

function App () {
  return (
    <>
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