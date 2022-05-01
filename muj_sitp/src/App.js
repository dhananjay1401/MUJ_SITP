import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Login from "./Components/Login";
import Contact from "./Components/Contact";
import Signup from "./Components/Signup";
function App() {
  return (
   <>
   <Navbar />
  
   <Routes>
   <Route exact path="/" element={<Home />} />
   <Route exact path="/about" element={<About />} />
   <Route exact path="/login" element={<Login />} />
   <Route exact path="/contact" element={<Contact />} />
   <Route exact path="/signup" element={<Signup />} />
   </Routes>
   <Footer /> 
   
   </>
  );
}

export default App;
