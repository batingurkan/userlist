import React, { Component } from "react";

class User extends Component{
    onDeleteClick(id,e) {
        const { deleteUser } = this.props;

        deleteUser(id);
    }

    render(){
        const{id,name,tel,email} = this.props;
        return(
            <tr>
                <td>{id}</td>
                <td>{name.toUpperCase()} </td>
                <td>{tel} </td>
                <td>{email}</td>
                <td>
                    <button onClick={this.onDeleteClick.bind(this,id)} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}
export default User;