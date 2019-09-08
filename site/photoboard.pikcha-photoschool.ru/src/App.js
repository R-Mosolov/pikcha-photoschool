import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header';
import Banner from './components/banner';
import Title from './components/title';
import Photographers from './components/photographers';
import Sorting from './components/sorting';

function App() {
  return (
    <div className="App">
        <Header/>
        <main className="container">
            <Banner/>
            <Title/>
            <Sorting/>
            <Photographers/>
        </main>
    </div>
  );
}

export default App;
