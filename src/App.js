import './App.css';
import{Route,Switch } from 'react-router-dom'
import AllMeetups from './components/pages/AllMeetups';
import Favorites from './components/pages/Favorites';
import NewMeetup from './components/pages/NewMeetup';
import Layout from './components/layout/Layout';


function App() {
  return (
    <Layout>
    <Switch>

    <Route exact path="/">
      <AllMeetups />
    </Route> 
    <Route path="/favorites">
      <Favorites />
    </Route> 
    <Route path="/newMeetup">
      <NewMeetup />
    </Route> 

    </Switch>
    
    </Layout>
  );
}

export default App;
