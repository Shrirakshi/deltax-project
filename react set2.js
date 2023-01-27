import NotFound from './components/NotFound'
import './App.css';
import (Browserrouter as Router,Route,Switch} from 'react-router-dom'
 
function App(){
returmn {
<Router>
 <div>
  <Nav/>
   <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/user" component={User}/>
      <Route exact path="/contact" component={Contact}/>
      <Route default component={NotFound}/>
    </Switch>
   </div>
  </Router>
 };
}  
     