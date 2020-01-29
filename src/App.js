import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ToDoElements from './ToDoElements.js'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.removeTodo = this.removeTodo.bind(this);
        this.handleDoubleClick = this.handleDoubleClick.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleOnBlur = this.handleOnBlur.bind(this);
    }

    handleSubmit() {
        if (!this.taskInput.value) {
            alert('empty value');
            return;
        }

        this.props.onAddTask(this.taskInput.value);

        this.taskInput.value = '';
    }
    removeTodo = (item) => {
        return () => this.props.onDeleteTask(item);
    };

    handleCheckboxChange = (item) => {
        return () => this.props.onCompleteTask(item);
    };

    handleChangeTodo = (item, input) => {
        if (input) {
            item.content = input.value;
        }
        return () => this.props.onChangeItemUpdate(item);
    };

    handleDoubleClick = (item) => {
        return () => this.props.onUpdateInProgress(item);
    };

    handleOnBlur = (item) => {
        return () => this.props.onBlurUpdate(item);
    };

    render() {
        return(
            <div className='page-content page-container' id='page-content'>
                <div className='padding'>
                    <div className='row container d-flex justify-content-center'>
                        <div className='col-lg-12'>
                            <div className='card px-3'>
                                <div className='card-body'>
                                    <h4 className='card-title'>Awesome Todo list</h4>
                                    <div className="add-items d-flex">
                                        <input
                                               type="text"
                                               className="form-control todo-list-input"
                                               placeholder="What do you need to do today?"
                                               ref={(input) => {this.taskInput = input}}
                                        />
                                        <button

                                            onClick={this.handleSubmit.bind(this)}
                                            className="add btn btn-primary font-weight-bold todo-list-add-btn">Add
                                        </button>
                                    </div>

                                    <div className='list-wrapper'>
                                        <ul className='d-flex flex-column-reverse todo-list'>
                                            {
                                                this.props.tasks.map((item) =>
                                                    <ToDoElements
                                                        key={item.id}
                                                        item={item}
                                                        onUpdateTask={this.props.onUpdateTask}
                                                        updateInProgress={item.updateInProgress}
                                                        removeTodo={this.removeTodo}
                                                        handleDoubleClick={this.handleDoubleClick}
                                                        handleOnBlur={this.handleOnBlur}
                                                        handleChangeTodo={this.handleChangeTodo}
                                                        handleCheckboxChange={this.handleCheckboxChange}
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

export default connect(
    state => ({
        tasks: state
    }),
    dispatch => ({
        onAddTask: (content) => {
            const payload = {
                id: Date.now().toString(),
                checked: 0,
                updateInProgress: 0,
                content
            };
            dispatch({
                type: 'ADD_TASK',
                payload: payload
            })
        },
        onUpdateTask: (task) => {
            dispatch({
                type: 'UPDATE_TASK',
                payload: task
            })
        },
        onCompleteTask: (task) => {
            task.checked = !task.checked;
            dispatch({
                type: 'UPDATE_TASK',
                payload: task
            })
        },
        onDeleteTask: (task) => {
            dispatch({
                type: 'DELETE_TASK',
                payload: task
            })
        },
        onUpdateInProgress: (task) => {
            task.updateInProgress = true;
            dispatch({
                type: 'UPDATE_TASK',
                payload: task
            })
        },
        onBlurUpdate: (task) => {
            task.updateInProgress = false;
            dispatch({
                type: 'UPDATE_TASK',
                payload: task
            })
        },
        onChangeItemUpdate: (task) => {
            dispatch({
                type: 'UPDATE_TASK',
                payload: task
            })
        }
    })
)(App);
