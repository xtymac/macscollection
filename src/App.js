import './App.scss';
import Header from './components/Layout/Header/Header';
import Body from './components/Layout/Body/Body';
import Footer from './components/Layout/Footer/Footer';

import About from './components/About/About';
import AdobeXD from './components/AdobeXD/AdobeXD';
import Design from './components/Design/Design';
import JavaScript from './components/JavaScript/JavaScript';
import ReactJS from './components/ReactJS/ReactJS';
import Wordpress from './components/Wordpress/Wordpress';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App-body">
        <Header />
        <Switch>
          <Route path="/" exact component={Body} />
          <Route path="/design" component={Design} />
          <Route path="/JavaScript" component={JavaScript} />
          <Route path="/ReactJS" component={ReactJS} />
          <Route path="/Wordpress" component={Wordpress} />
          <Route path="/AdobeXD" component={AdobeXD} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
