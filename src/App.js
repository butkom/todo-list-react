import React from 'react';
import './App.css';
import Tr from './Tr.js';

const initialTodo = [
    'to implement todo list'
];

class App extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {initialTodo}
    }

    render() {
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
                    {
                        this.state.initialTodo.map((item) =>
                            <Tr key={item} content={item} />
                        )
                    }
                </tbody>
            </table>
        );
    }
}

export default App;
