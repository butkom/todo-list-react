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

class UpdateTodo extends React.Component {
    render() {
        return(
            <div>
                <input
                    name={this.props.index}
                    type="text"
                    onChange={this.props.handleChangeTodo}
                    value={this.props.content}
                />
            </div>
        );
    }
}

class Content extends React.Component {
    render() {
        return(
            <div
                onDoubleClick={() => this.props.handleDoubleClick(this.props.index)}
                style={{textDecoration: this.props.checked ? 'line-through' : 'none'}}
            >
                {this.props.content}
            </div>
        );
    }
}

class NewTodoElement extends React.Component {
    render() {
        return(
            <form
                onSubmit={this.props.handleSubmit}
            >
                <input
                    type="text"
                    onChange={this.props.handleChange}
                    value={this.props.value}
                />
                <button>add</button>
            </form>
        );
    }
}

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
                        <NewTodoElement handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                    </td>
                    <td>#</td>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.todos.map((item, index) =>
                        <TBodyRows
                            key={index}
                            index={index}
                            handleCheckboxChange={this.handleCheckboxChange}
                            checked={item.checked}
                            updateInProgress={item.updateInProgress}
                            content={item.content}
                            removeTodo={this.removeTodo}
                            handleChangeTodo={this.handleChangeTodo}
                            handleDoubleClick={this.handleDoubleClick}
                        />
                    )
                }
                </tbody>
            </table>
        );
    }
}

class TBodyRows extends React.Component {
    render() {
        return(
            <tr>
                <td>
                    <input type="checkbox"
                           name={this.props.index}
                           onChange={this.props.handleCheckboxChange}
                           checked={this.props.checked}
                    />
                </td>
                <td>
                    {
                        this.props.updateInProgress ?
                            <UpdateTodo handleChangeTodo={this.props.handleChangeTodo} index={this.props.index} content={this.props.content} /> :
                            <Content handleDoubleClick={this.props.handleDoubleClick} index={this.props.index} checked={this.props.checked} content={this.props.content} />
                    }
                </td>
                <td>
                    <button onClick={() => {this.props.removeTodo(this.props.index)}}>
                        <span>x</span>
                    </button>
                </td>
            </tr>
        );
    }
}
export default App;
