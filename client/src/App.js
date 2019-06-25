import React, { Component } from "react";
import logo from "./d20-folio-logo-1.png";
import "./App.css";
import {Jumbotron} from 'reactstrap';
import {BrowserRouter, Route} from 'react-router-dom';
import NavigationBar from './components/Navbar/index';
import ViewAllCharacters from './pages/ViewAllCharacters/index';

class App extends Component {
  render() {
    return (
      <div className="App">
     <BrowserRouter>
      <NavigationBar />
          <Route path="/login" render= { () => <div>Login</div> } />
          <Route path="/home" render= { () => <div>Home</div> } />
          <Route path="/mychars" render= { () => <div>My Characters</div> } />
          <Route path="/new" render= { () => <div>Add Characters</div> } />
          <Route path="/edit/:id" render= { ({res}) => <div>Edit Character: { res.params } </div> } />
     </BrowserRouter>
     <ViewAllCharacters />
      </div>
    );
  }
}

export default App;
