import React from 'react';

import UpdateTodoElement from  './UpdateTodoElement';
import TodoElement from './TodoElement'

class ToDoElements extends React.Component {
    render() {
        return(
            <li className={this.props.item.checked ? 'completed' : ''}>
                <div className='form-check'>
                    {
                        this.props.updateInProgress ?
                            <UpdateTodoElement item={this.props.item} handleChangeTodo={this.props.handleChangeTodo} handleOnBlur={this.props.handleOnBlur}/> :
                            <TodoElement item={this.props.item} handleCheckboxChange={this.props.handleCheckboxChange} handleDoubleClick={this.props.handleDoubleClick} />
                    }
                </div>
                <i className='remove mdi mdi-close-circle-outline' onClick={this.props.removeTodo(this.props.item)}></i>
            </li>
        );
    }
}

export default ToDoElements;
