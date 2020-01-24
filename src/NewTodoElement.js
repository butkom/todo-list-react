import React from 'react';

class NewTodoElement extends React.Component {
    render() {
        return (
            <div className="add-items d-flex">
                <input onChange={this.props.handleChange}
                       value={this.props.addTodoValue}
                       type="text"
                       className="form-control todo-list-input"
                       placeholder="What do you need to do today?"/>
                <button onClick={this.props.handleSubmit}
                        className="add btn btn-primary font-weight-bold todo-list-add-btn">Add
                </button>
            </div>
        );
    }
}

export default NewTodoElement;
