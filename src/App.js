import React, { Component } from 'react';
// import logo from './logo.svg';
// import Box from './Box'
import BoxList from './BoxList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Box width={70} height ={80} color = 'orange'/> */}
        <BoxList />
      </div>
    )
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }