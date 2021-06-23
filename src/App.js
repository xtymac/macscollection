import './App.scss';
import Header from './components/Layout/Header/Header';
import Body from './components/Layout/Body/Body';
import Footer from './components/Layout/Footer/Footer';

// Pages
import More from './components/More/More';
import AdobeXD from './components/AdobeXD/AdobeXD';
import Design from './components/Design/Design';
import ReactJS from './components/ReactJS/ReactJS';
import AimilyApp from './components/AimilyApp/AimilyApp';
import MLB101 from './components/MLB101/MLB101';

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
          <Route path="/AimilyApp" component={AimilyApp} />
          <Route path="/MLB101" component={MLB101} />
          <Route path="/AdobeXD" component={AdobeXD} />
          <Route path="/More" component={More} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
