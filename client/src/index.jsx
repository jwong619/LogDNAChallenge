import React from 'react';
import ReactDOM from 'react-dom';
import TopBar from './components/TopBar.jsx';
import SideBar from './components/SideBar.jsx';

class App extends React.Component {


  render() {
    // topBar
    // sideBar
    // list - listComponents
    // selected
    return(
      <div>
        <TopBar />
        <SideBar />
        <h1>LogDNA</h1>

      </div>
      );
  }

}

ReactDOM.render(<App />,
  document.getElementById('app'));