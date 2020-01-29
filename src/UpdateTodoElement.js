import React from 'react';

class UpdateTodoElement extends React.Component {
    render() {
        return(
            <div>
                <input
                    className='edit-todo-element'
                    autoFocus={true}
                    onBlur={this.props.handleUpdateItem(this.props.item)}
                    type='text'
                    ref={(input) => {this.taskInput = input}}
                    onChange={this.props.handleChangeTodo(this.props.item, this.taskInput)}
                    value={this.props.item.content}
                />
            </div>
        );
    }
}

export default UpdateTodoElement;
