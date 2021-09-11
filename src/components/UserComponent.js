import React from "react";
import userService from "../services/userService";

class UserComponent extends React.Component{

    constructor(){
        this.state={
            users:[]
        }
    }
    componentDidMount(){
        userService.getUsers().then((response)=>{
            this.setState({users: response.data})

        });
    }

    render(){
        return(
            <div>
                <h1 className="text-center">Users List</h1>
                <table className="table table-striped">
                    <thead>
                     <tr>
                         <td>User ID</td>
                         <td>User First Name</td>
                         <td>User Last Name</td>
                         <td>User Email</td>
                         </tr>   
                    </thead>
                    

                </table>

            </div>
        )
    }

}
export default UserComponent;