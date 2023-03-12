import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import FIRESOTRE from "./FIRESTORE";

// import Home from "./Home";
// import Aboutus from "./About";
// import Services from "./Service";
// import Contact from "./Contact";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import REDUCER from "./REDUCER";
// import COMPONENT from "./COMPONENT";
// import ComponentA from "./ComponentA";
// import ComponentB from "./ComponentB";
// import HOME1 from "./HOME1";
// import TAILWIND from "./TAILWIND";
// import NAVIBAR from "./NAVIBAR";

// import Signup from "./Signup";
// import Signin from "./Signin";
// import SignOut from "./Signout";

// import AXIOSDATA from "./AXIOSGET";
// import STORE from "./FIREBASESTORAGE";

import Navbar from './Navigation';
import HOMEINDEX from "./HOMEINDEX";
import ContactUs from "./ContactUs";
import Aboutus from "./AboutUs";
import Distribution from "./Distribution";
import Marketing from "./Marketing";
import Licensing from "./Licensing";
import Footer from './FOOTERR';


function App() {
  return (
    <div className="App">
      
      {/* <FIRESOTRE /> */}

      {/* <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contactus" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>  */}

      {/* <REDUCER /> */}

      {/* <COMPONENT />
      <ComponentA />
      <ComponentB /> */}

      {/* <HOME1 /> */}
      {/* <TAILWIND /> */}
      {/* <NAVIBAR /> */}

      {/* <Signup />
      <Signin /> */}

      {/* <SignOut /> */}

      {/* <AXIOSDATA /> */}

      {/* <STORE /> */}

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HOMEINDEX />} />
          <Route path="/AboutUs" element={<Aboutus />} />
          <Route path="/Distribution" element={<Distribution />} />
          <Route path="/Marketing" element={<Marketing />} />
          <Route path="/Licensing" element={<Licensing />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
        <Footer />
    </Router>
      {/* <HOMEINDEX /> */}
    </div>
  );
}

export default App;
