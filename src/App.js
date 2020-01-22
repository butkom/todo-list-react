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
                    this.state.list.map((item) =>
                        <tr key={item}>
                            <td>#</td>
                            <td>{item}</td>
                            <td>
                                <button>x</button>
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
