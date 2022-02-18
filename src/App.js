import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,

// } from "react-router-dom";

export const App = () => {
  const initValues = { msg: '', type: '' };
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(initValues)
  // const [bgcolor,setBgColor] = useState('white')
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type

    })
    setTimeout(() => {
      setAlert(null);
    }, 3000)
  }
  // const changeBgColor=(bgc)=>{
  //     // setBgColor({backcolor:'#042743'})
  //     if (mode==='light'){

  //     }

  //  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Darkmode is enabled", "Success");
      // document.getElementById("accordionExample").style.backgroundColor='gray'
      // ,"#EFE1CE"
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Darkmode is disabled", "Success");
      // document.getElementById("accordionExample").style.backgroundColor='White'
      // "#00539C"
    }
  }
  return (
    <>
      {/* <Router> */}

      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container" my-3>
        {/* <Routes>
             <Route path="/" element={ */}
        <TextForm heading="Enter The Text To Analyse" mode={mode} showAlert={showAlert}  />
            {/* <Route path="/about" element={<About mode={mode} />} />
           </Routes> */}
    </div>
      {/* </Router> */}

    </>
  )
}
export default App;