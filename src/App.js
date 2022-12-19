import React from 'react'

import Header from './Componens/Header/Header';
import Content from './Componens/Content/Content';


import './App.css';
import './Componens/Header/Styles/Styles.css'
import './Componens/Content/StyleContent/StyleContent.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
    </div>
  );
}

export default App;
