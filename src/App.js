import React from 'react';
import './App.css';

class Ul extends React.Component{
    render() {
        return (
            <ul>
                {this.props.liElements}
            </ul>
        );
    }
}

class Li extends React.Component{
    render() {
        return (
            <li>
                <span>li element</span>
            </li>
        );
    }
}

function App() {
  return (
    <div className="App">
      <Ul liElements={<Li />} />
    </div>
  );
}

export default App;
