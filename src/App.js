import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import ToDoElements from './ToDoElements.js'
import NewTodoElement from './NewTodoElement.js'

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
        this.handleOnBlur = this.handleOnBlur.bind(this);
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

    handleOnBlur(event) {
        const target = event.target;
        const index = target.name;
        const todos = this.state.todos;

        todos[index].updateInProgress = 0;

        this.setState({todos});
    }

    render() {
        return(
            <div className='page-content page-container' id='page-content'>
                <div className='padding'>
                    <div className='row container d-flex justify-content-center'>
                        <div className='col-lg-12'>
                            <div className='card px-3'>
                                <div className='card-body'>
                                    <h4 className='card-title'>Awesome Todo list</h4>
                                    <NewTodoElement addTodoValue={this.state.value} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />

                                    <div className='list-wrapper'>
                                        <ul className='d-flex flex-column-reverse todo-list'>
                                            {
                                                this.state.todos.map((item, index) =>
                                                    <ToDoElements
                                                        key={index}
                                                        index={index}
                                                        handleCheckboxChange={this.handleCheckboxChange}
                                                        checked={item.checked}
                                                        updateInProgress={item.updateInProgress}
                                                        content={item.content}
                                                        removeTodo={this.removeTodo}
                                                        handleChangeTodo={this.handleChangeTodo}
                                                        handleDoubleClick={this.handleDoubleClick}
                                                        handleOnBlur={this.handleOnBlur}
                                                    />
                                                )
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
