import React from 'react';

class Tr extends React.Component
{
    render() {
       return (
           <tr>
               <td>#</td>
               <td>{this.props.content}</td>
               <td><button>x</button></td>
               <td>#</td>
           </tr>
       )
    };
}

export default Tr;
