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
        let list = this.state.list;
        list.push(this.state.value);

        this.setState({list});
        this.setState({value: ''});

        event.preventDefault();
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
                    <th>Status</th>
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
                    <td>Status</td>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.list.map((item, index) =>
                        <tr key={index}>
                            <td>#</td>
                            <td>{item}</td>
                            <td>
                                <button onClick={(e)=>{
                                    e.stopPropagation();
                                    e.preventDefault();
                                    this.removeTodo(index);
                                }}>x</button>
                            </td>
                            <td>#</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        );
    }
}

export default App;
