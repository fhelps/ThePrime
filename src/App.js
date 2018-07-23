import React, { Component } from 'react';
import './App.css';

import Cabecalho from './components/navigation/Header/Header';
import Lista from './components/job/JobList/JobList';
import Form from './components/job/JobForm/JobForm';
import Collapse from './components/hoc/Collapse/Collapse';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cabecalho />
        <div className="container mt-3">
          <Collapse innerText="Criar vaga">
          <Form/>
          </Collapse>
          <Lista />
        </div>
      </div>
    );
  }
}

export default App;
