import './App.scss';
import Header from './components/Home/Header/Header';
import Body from './components/Home/Body/Body';
import Footer from './components/Home/Footer/Footer';

// Pages
import WebDesign from './components/WebDesign/WebDesign';
import MobileApp from './components/MobileApp/MobileApp';
import UnityProject from './components/UnityProject/UnityProject';
import AboutMe from './components/AboutMe/AboutMe';

// Libraries
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App-body">
        <Header />
        <Switch>
          <Route path="/" exact component={Body} />
          <Route path="/WebDesign" component={WebDesign} />
          <Route path="/MobileApp" component={MobileApp} />
          <Route path="/UnityProject" component={UnityProject} />
          <Route path="/AboutMe" component={AboutMe} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
