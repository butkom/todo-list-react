import React from 'react';

class Content extends React.Component {
    render() {
        return(
            <div
                onDoubleClick={() => this.props.handleDoubleClick(this.props.index)}
                style={{textDecoration: this.props.checked ? 'line-through' : 'none'}}
            >
                {this.props.content}
            </div>
        );
    }
}

export default Content;
