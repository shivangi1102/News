
import './App.css';
import Newslist from './coponents/Newslist';
import Header from './coponents/Header';
import Searchnews from './coponents/Searchnews';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
function App() {
  return (
    <Router><Header/>
    
    <Switch>
        <Route exact path='/'>
          <Newslist/>
        </Route>
        <Route path="/search/:search">
          <Searchnews/>
        </Route>
        
    </Switch>
    </Router>
      

  );
}

export default App;
