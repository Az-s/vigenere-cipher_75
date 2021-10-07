import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import InputFields from '../components/InputFields/InputFields';
import NavBar from '../components/NavBar/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <NavBar />
      <InputFields />
    </div>
  );
}

export default App;
