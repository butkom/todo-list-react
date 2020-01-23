import React from 'react';


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

export default UpdateTodo;
