import React from 'react';

class TodoElement extends React.Component {
    render() {
        return(
            <div>
                <label className='form-check-label'>
                    <input className='checkbox'
                           type='checkbox'
                           onChange={this.props.handleCheckboxChange(this.props.item)}
                           checked={this.props.item.checked}
                    />
                    <i className='input-helper'></i>
                </label>
                <span  onDoubleClick={this.props.handleDoubleClick(this.props.item)}>{this.props.item.content}</span>
            </div>
        );
    }
}

export default TodoElement;
