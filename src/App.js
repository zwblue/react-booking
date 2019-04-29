import React from 'react';
import HeaderCase from './containers/HeaderCase.js'
import Section from './components/Section.jsx'
import './styles/App.scss';
import './styles/common.css';

function App() {
  return (
    <div className="App">
        <HeaderCase></HeaderCase>
        <Section>
        </Section>
    </div>
  );
}

export default App;
