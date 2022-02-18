import React, {Component} from "react";
import User from "./User";

class Users extends Component {
  

render(){
  const { users,deleteUser } = this.props;
  
    return(
       <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">İd</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {users.map( user=> {
        const {id,name,tel,email} = user;
        

        return (
         
           <User
            key={id}
            id={id} 
            name={name} 
            tel={tel} 
            email={email} 
            deleteUser ={deleteUser} 
            />
            );
      })}
  </tbody>

</table>
        
    );
}
}
export default Users;