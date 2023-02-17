import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './Signup';
// import Signup from "./Signup";
// import Signin from "./Signin";
// import FIRESOTRE from "./FIRESTORE";
// import SignOut from "./Signout";
import Home from "./Home";
import Aboutus from "./About";
import Services from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import REDUCER from "./REDUCER";
// import COMPONENT from "./COMPONENT";
// import ComponentA from "./ComponentA";
// import ComponentB from "./ComponentB";
function App() {
  return (
    <div className="App">
      {/* <Signup />
      <Signin /> */}
      {/* <FIRESOTRE /> */}
      {/* <SignOut /> */}
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contactus" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
      {/* <REDUCER /> */}
      {/* <COMPONENT /> */}
      {/* <ComponentA />
      <ComponentB /> */}
    </div>
  );
}

export default App;
