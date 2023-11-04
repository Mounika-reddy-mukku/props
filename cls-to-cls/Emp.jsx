import React from 'react';
class Emp extends React.Component{
    render(){
        let {emp,id}=this.props
        return <>
            <h4>Emp Component</h4>
            <pre>Employees={JSON.stringify(this.props)}</pre>
            <p>Empname={emp.name}</p>
            <p>Empid={id[0]}</p>
            <p>Emp mail={emp.email}</p>
        </>
    }
}
export default Emp