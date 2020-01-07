import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import MainNav from "./components/MainNav/MainNav";
import AboutMe from "./pages/AboutMe/AboutMe";
import './App.scss';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <header className="main-header">
                <MainNav />
            </header>
            <main className="main">
                <Route exact path="/" component={ AboutMe } />
            </main>
        </BrowserRouter>
    </div>
  );
}

export default App;
