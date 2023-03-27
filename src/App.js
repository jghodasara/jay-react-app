import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/home/Home";
import ContactUs from "./screens/contactUs/ContactUs";
import Gallery from "./screens/Gallery/Gallery";
import Tools from "./screens/tools/Tools";
import Weather from "./screens/weather/Weather";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contacts" element={<ContactUs />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/tools" element={<Tools />}></Route>
        <Route path="/weather" element={<Weather />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
