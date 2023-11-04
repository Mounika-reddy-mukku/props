import React from 'react';
class Emp extends React.Component{
    render(){
        return <>
            <h4>Emp Component</h4>
            <pre>Employees={JSON.stringify(this.props)}</pre>
            <p>Empname={this.props.emp.name}</p>
            <p>Empid={this.props.id[0]}</p>
            <p>Emp mail={this .props.emp.email}</p>
        </>
    }
}
export default Emp