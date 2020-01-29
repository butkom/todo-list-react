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
                            <UpdateTodoElement item={this.props.item} handleChangeTodo={this.props.handleChangeTodo} handleUpdateItem={this.props.handleUpdateItem}/> :
                            <TodoElement item={this.props.item} handleCheckboxChange={this.props.handleCheckboxChange} handleUpdateItem={this.props.handleUpdateItem} />
                    }
                </div>
                <i className='remove mdi mdi-close-circle-outline' onClick={this.props.removeTodo(this.props.item)}></i>
            </li>
        );
    }
}

export default ToDoElements;
