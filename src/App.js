import React from 'react'
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import About from './components/About'
import Landing from './components/Landing'
import Service from './components/Service'
import Benefit from './components/Benefit'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Header from './components/Header'
function App() {
  return (
   <Router>
      <Header/>
     <Switch>
     <Route exact path='/'>
       <Landing/>
       <Benefit/>
       <Service/>
     </Route>

     <Route path='/about'>
       <About/>
     </Route>

     <Route path='/service'>
       <Service/>
     </Route>

     <Route path='/contact'>
       <Contact/>
     </Route>

     </Switch>

    
    <Footer/>
   </Router>
  );
}

export default App;
