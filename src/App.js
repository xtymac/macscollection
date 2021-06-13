import logo from './logo.svg';

import './App.scss';
import Header from './components/Layout/Header/Header';
import Body from './components/Layout/Body/Body';

function App() {
  return (
    <>
      <div className="App-body">
        <Header />

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <Body />
      </div>
    </>
  );
}

export default App;
