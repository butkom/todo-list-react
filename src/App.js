import React from 'react';
import './App.css';

const initialTodo = [
    'to implement todo list'
];

class Tr extends React.Component
{
    render() {
       return (
           <tr>
               <td>#</td>
               <td>{this.props.content}</td>
               <td><button>x</button></td>
               <td>#</td>
           </tr>
       )
    };
}

function App() {
    const listRows = initialTodo.map((item) =>
        <Tr key={item} content={item} />
    );

  return (
    <table className="App">
        <thead>
            <tr>
                <th>Action</th>
                <th>Content</th>
                <th>Remove</th>
                <th>Status</th>
            </tr>
            <tr>
                <td>#</td>
                <td><input type="text" name="content" /></td>
                <td>#</td>
                <td>Status</td>
            </tr>
        </thead>
        <tbody>
            {listRows}
        </tbody>
    </table>
  );
}

export default App;
