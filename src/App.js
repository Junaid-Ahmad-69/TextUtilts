import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (type, message) =>{
    setAlert({
      type:type,
      msg: message
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const removeClassBg = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-secondary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')

  }
  const toggleMode = (cls) =>{
    removeClassBg();
    document.body.classList.add('bg-'+ cls)
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert("success","Dark Mode Enable");
      document.title="TextUtils-Dark Mode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert( "success","Light Mode Enable");
      document.title="TextUtils-Light Mode"
    }
  }
  return (
    <>
    <Router>
      <Navbar title='TextUtils' lin1="Home"  lin2='About' toggle={toggleMode} mode={mode} />
      <Alert alert={alert}/>
        <Switch>
          <Route path='/About'>
            <About mode={mode} />
          </Route>
          <Route path="/">
            <TextForm heading="Enter Your Text To Analyze Below" head2="Your Text Summary" mode={mode} toggle={toggleMode} showAlert={showAlert}  />
          </Route>
        </Switch>
    </Router>
            {/* <Navbar/> */}
            {/* <About mode={mode}/> */}
    </>
  )
}
export default App;
