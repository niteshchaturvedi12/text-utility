import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


// let name = " Nitesh!"
function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const removeOlderClasses = () => {
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-info')
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
  }

  const toggleMode = (cls) => {
    removeOlderClasses()
    setMode(cls)
    document.body.classList.add('bg-'+cls)
    // if (mode === 'light') {
    //   setMode('dark')
    //   document.body.style.backgroundColor = '#436cba';
    //   showAlert('Dark Mode Enabled!', 'success')
    //   // document.title = 'Dark Mode Enabled'
    // } else {
    //   setMode('light')
    //   document.body.style.backgroundColor = 'white';
    //   showAlert('Light Mode Enabled!', 'success')
    //   // document.title = 'Light Mode Enabled'
    // }
    // setInterval(() => {
    //   document.title = "Text utility is a great app"
    // }, 2000);
    // setInterval(() => {
    //   document.title = "Install - Text utility"
    // }, 1500);
  }

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <>
      <Router>
        <Navbar title='Text Utility' aboutText='About Text utility' mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <Routes>
          <Route exact path="/" element = {<TextForm heading="Enter your text to utilise!" mode={mode} showAlert={showAlert}/>}/>
          <Route exact path="/home" element={<TextForm heading="Enter your text to utilise!" mode={mode} showAlert={showAlert}/>}/>
          <Route path="/about" element={<About mode={mode}/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;