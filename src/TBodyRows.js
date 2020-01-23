import React from 'react';
import UpdateTodo from  './UpdateTodo.js';
import Content from  './Content.js';

class TBodyRows extends React.Component {
    render() {
        return(
            <tr>
                <td>
                    <input type="checkbox"
                           name={this.props.index}
                           onChange={this.props.handleCheckboxChange}
                           checked={this.props.checked}
                    />
                </td>
                <td>
                    {
                        this.props.updateInProgress ?
                            <UpdateTodo handleChangeTodo={this.props.handleChangeTodo} index={this.props.index} content={this.props.content} /> :
                            <Content handleDoubleClick={this.props.handleDoubleClick} index={this.props.index} checked={this.props.checked} content={this.props.content} />
                    }
                </td>
                <td>
                    <button onClick={() => {this.props.removeTodo(this.props.index)}}>
                        <span>x</span>
                    </button>
                </td>
            </tr>
        );
    }
}

export default TBodyRows;
