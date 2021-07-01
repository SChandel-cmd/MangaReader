// import logo from './logo.svg';
import './App.css';
import React from "react";
import Nav from './NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Search from './Search';
import Home from './Home';
import MangaPage from './MangaPage';
function App() 
{
  return (
    <div>
      <Nav />
      <Router>
        <Route path="/search" component={Search} />
        <Route path="/home" component={Home} />
        <Route path="/manga/:id/:cover" component={MangaPage}/>
      </Router>
    </div>
  );
}



export default App;
