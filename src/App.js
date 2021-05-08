import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components';

function App() {
  return (
    <Router>
      <Navbar />
      <h2>Styled Components</h2>
    </Router>
  );
}

export default App;
