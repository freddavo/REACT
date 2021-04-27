import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Contactos';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Footer from './Footer';
import Contactos from './Contactos';


function App() {
  
  return (
    
    <Router>
      <div className="App" >
        <Nav />
        <Switch>
          <Route path= "/" exact component = {Home}/>
          <Route path="/about" component={About}/>
          <Route path ="/contactos" component={Contactos}/>
          <Footer/>
        </Switch>
        
      
      </div>
    </Router>
  );



}

const Home=() =>(
  <div>
    <h1> Home Page</h1>
    <p1> Service Status Services publica informações mais atualizadas sobre a disponibilidade dos serviço na tabela abaixo. Volte aqui a qualquer momento para obter informações sobre o estado atual ou subscreva o serviço desejado para ser notificado sobre interrupções em cada serviço individual. </p1>
    <h2>Estado Atual</h2>
  </div>

);

export default App;
