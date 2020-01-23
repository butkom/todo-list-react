import React from 'react';
import './App.css';

const todos = [
    {
        content: 'task 1',
        checked: 1,
        updateInProgress: 0
    },
    {
        content: 'task 2',
        checked: 0,
        updateInProgress: 0
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
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleChangeTodo = this.handleChangeTodo.bind(this);
        this.handleDoubleClick = this.handleDoubleClick.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
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
    }

    handleChangeTodo(event) {
        const target = event.target;
        const index = target.name;
        const value = target.value;

        let todos = this.state.todos;
        todos[index].content = value;

        this.setState({todos});
    }

    handleDoubleClick(index) {
        let todos = this.state.todos;

        todos[index].updateInProgress = 1;

        this.setState({todos});
    }

    handleInputBlur(index) {
        console.log(index);
        // let todos = this.state.todos;
        // if (todos[index].updateInProgress) {
        //     todos[index].updateInProgress = 0;
        //
        //     this.setState({todos});
        // }
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
                                       onChange={this.handleCheckboxChange}
                                       checked={item.checked}
                                />
                            </td>
                            <td>
                                <div
                                    onDoubleClick={() => this.handleDoubleClick(index)}
                                    style={{textDecoration: item.checked ? 'line-through' : 'none', display: item.updateInProgress ? 'none' : 'block'}}
                                >
                                    {item.content}
                                </div>
                                <div style={{display: item.updateInProgress ? 'block' : 'none'}}>
                                    <input
                                        name={index}
                                        type="text"
                                        onChange={this.handleChangeTodo}
                                        value={this.state.todos[index].content}
                                    />
                                </div>
                            </td>
                            <td>
                                <button onClick={() => {
                                    this.removeTodo(index);
                                }}>
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
