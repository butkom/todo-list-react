import React from 'react';

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

export default NewTodoElement;
