import React from 'react';
import UpdateTodo from  './UpdateTodo.js';

class ToDoElements extends React.Component {
    render() {
        return(
            <li className={this.props.checked ? 'completed' : ''}>
                <div className='form-check'>
                    {
                        this.props.updateInProgress ?
                            <UpdateTodo handleOnBlur={this.props.handleOnBlur} handleChangeTodo={this.props.handleChangeTodo} index={this.props.index} content={this.props.content} /> :
                            <div>
                            <label className='form-check-label'>
                                <input className='checkbox'
                                       type='checkbox'
                                       name={this.props.index}
                                       onChange={this.props.handleCheckboxChange}
                                       checked={this.props.checked}
                                />
                                <i className='input-helper'></i>
                            </label>
                                <span  onDoubleClick={() => this.props.handleDoubleClick(this.props.index)}>{this.props.content}</span>
                            </div>
                    }
                </div>
                <i className='remove mdi mdi-close-circle-outline' onClick={() => {this.props.removeTodo(this.props.index)}}></i>
            </li>
        );
    }
}

export default ToDoElements;
