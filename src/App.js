import React from 'react';
import './App.css';

const todos = [
    {
        content: 'task 1',
        checked: 1
    },
    {
        content: 'task 2',
        checked: 0
    },
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.state = {todos};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        if (!this.state.value) {
            alert('empty value');
            return;
        }

        let todos = this.state.todos;
        todos.push({
            content: this.state.value,
            checked: 0
        });

        this.setState({todos});
        this.setState({value: ''})
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    removeTodo(index) {
        let todos = [...this.state.todos];
        todos.splice(index, 1);
        this.setState({todos})
    }

    handleCheckboxChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const index = target.name;

        let todos = this.state.todos;
        todos[index].checked = value;

        this.setState({todos});
        
        console.log(index);
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
                            <input type="text" onChange={this.handleChange} value={this.state.value}/>
                            <button>add</button>
                        </form>
                    </td>
                    <td>#</td>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.todos.map((item, index) =>
                        <tr key={index}>
                            <td>
                                <input type="checkbox"
                                       name={index}
                                       onClick={this.handleCheckboxChange}
                                       checked={item.checked}
                                />
                            </td>
                            <td><span style={{textDecoration: item.checked ? 'line-through' : 'none'}}>{item.content}</span></td>
                            <td>
                                <button onClick={() => {this.removeTodo(index);}}>
                                    <span>x</span>
                                </button>
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
