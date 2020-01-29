import React from 'react';
import UpdateTodo from  './UpdateTodo.js';

class ToDoElements extends React.Component {
    render() {
        return(
            <li className={this.props.item.checked ? 'completed' : ''}>
                <div className='form-check'>
                    {
                        this.props.updateInProgress ?
                            <div>
                                <input
                                    className='edit-todo-element'
                                    autoFocus={true}
                                    onBlur={this.props.handleOnBlur(this.props.item)}
                                    name={this.props.index}
                                    type='text'
                                    ref={(input) => {this.taskInput = input}}
                                    onChange={this.props.handleChangeTodo(this.props.item, this.taskInput)}
                                    value={this.props.item.content}
                                />
                            </div>
                                :
                            <div>
                            <label className='form-check-label'>
                                <input className='checkbox'
                                       type='checkbox'
                                       name={this.props.index}
                                       onChange={this.props.handleCheckboxChange(this.props.item)}
                                       checked={this.props.item.checked}
                                />
                                <i className='input-helper'></i>
                            </label>
                                <span  onDoubleClick={this.props.handleDoubleClick(this.props.item)}>{this.props.item.content}</span>
                            </div>
                    }
                </div>
                <i className='remove mdi mdi-close-circle-outline' onClick={this.props.removeTodo(this.props.item)}></i>
            </li>
        );
    }
}

export default ToDoElements;
