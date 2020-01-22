import React from 'react';
import './App.css';

const initialTodo = {
    content: 'to implement todo list',
    status: 1
};

class Tr extends React.Component
{
    render() {
       return (
           <tr>
               <td>#</td>
               <td>{this.props.content}</td>
               <td>{this.props.status}</td>
           </tr>
       )
    };
}

function App() {
  return (
    <table className="App">
        <thead>
            <tr>
                <th>Action</th>
                <th>Content</th>
                <th>Status</th>
            </tr>
            <tr>
                <td><input type="checkbox" name="action" /></td>
                <td><input type="text" name="content" /></td>
                <td>Status</td>
            </tr>
        </thead>
        <tbody>
            {
                <Tr content={initialTodo.content} status={initialTodo.status}/>
            }
        </tbody>
    </table>
  );
}

export default App;
