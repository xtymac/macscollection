import './App.scss';
import Header from './components/Layout/Header/Header';
import Body from './components/Layout/Body/Body';
import Footer from './components/Layout/Footer/Footer';

// Pages
import About from './components/About/About';
import AdobeXD from './components/AdobeXD/AdobeXD';
import Design from './components/Design/Design';
import ReactJS from './components/ReactJS/ReactJS';
import ReactNative from './components/ReactNative/ReactNative';
import Unity3D from './components/Unity3D/Unity3D';

// Libraries
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App-body">
        <Header />
        <Switch>
          <Route path="/" exact component={Body} />
          <Route path="/Design" component={Design} />
          <Route path="/ReactJS" component={ReactJS} />
          <Route path="/ReactNative" component={ReactNative} />
          <Route path="/Unity3D" component={Unity3D} />
          <Route path="/AdobeXD" component={AdobeXD} />
          <Route path="/About" component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
