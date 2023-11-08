import './App.css'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Form from './Components/Form'
import { useState } from 'react';
import Alert from './Components/Alert';
import About from './Components/About'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [toggle, setToggle] = useState(false);

  const [motext, setMotext] = useState("Enable dark mode");
  const [alert, setAlert] = useState(null);

  const callalert = (type, message) => {
    const b = document.body.getElementsByClassName("conta")[0];
    // b.style.paddingTop = "0px";
    setAlert({
      type: type,
      mssg: message
    })
    setTimeout(() => {
      setAlert(null);
      const b = document.body.getElementsByClassName("conta")[0];
      // b.style.paddingTop = "100px";
    }, 1500);
  }


  const [mode, setmode] = useState(false);
  const togglefun = () => {
    if (mode === true) {
      setmode(false);
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      callalert("success", "Dark mode disabled");
      setMotext("Enable dark mode");
    }
    else {
      setmode(true);
      document.body.style.backgroundColor = " lab(29 2.44 1.67)";
      document.body.style.color = "white";
      callalert("success", "Dark mode Enabled");
      setMotext("Disable dark mode");
    }
  }
  return (
    // <div>
    //   <Form mode={mode} togglefun={togglefun} callalert={callalert} alert={alert}/>
    // </div>
    <BrowserRouter>
      <Navbar mode={mode} togglefun={togglefun} motext={motext} alert={alert} toggle={toggle} setToggle={setToggle} />
      <Alert alert={alert} toggle={toggle} />
      <Routes>
        <Route exact path="/" element={<Form mode={mode} togglefun={togglefun} callalert={callalert} alert={alert} />} />
        <Route exact path="/about" element={<About alert={alert} />} />
      </Routes>
      <Footer mode={mode} togglefun={togglefun} />
    </BrowserRouter>
  )
}

export default App;
