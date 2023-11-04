import React from 'react';
import Emp from './Emp';
class User extends React.Component{
    users={
        name:"Mounika",email:"Mounika@gmail.com",location:"Bangalore"
    }
    array=[101,102,103]
    render(){
        return <React.Fragment>
            <h3>User component</h3>
            <Emp id={this.array} emp={this.users} />
            
        </React.Fragment>

    }
}
export default User