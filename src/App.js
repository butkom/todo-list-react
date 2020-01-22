import React from 'react';
import './App.css';

const initialTodo = [
    'to implement todo list'
];

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {list: initialTodo, value: ''};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        if (!this.state.value) {
            alert('empty value');
            return;
        }
        let list = this.state.list;
        list.push(this.state.value);

        this.setState({list});
        this.setState({value: ''})
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    removeTodo(index) {
        let list = [...this.state.list];
        list.splice(index, 1);
        this.setState({list: list})
    }

    render() {
        return (
            <table className="App">
                <thead>
                <tr>
                    <th>Action</th>
                    <th>Content</th>
                    <th>Remove</th>
                </tr>
                <tr>
                    <td>#</td>
                    <td>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" onChange={this.handleChange} value={this.state.value} />
                            <button>add</button>
                        </form>
                    </td>
                    <td>#</td>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.list.map((item, index) =>
                        <tr key={index}>
                            <td><input type="checkbox" /> </td>
                            <td>{item}</td>
                            <td>
                                <button onClick={()=>{this.removeTodo(index);}}>x</button>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        );
    }
}

export default App;
