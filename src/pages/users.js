import AccessApiWrapper from "../adapters/restcalls/AccessApiWrapper";
import AuthenticationService from "../adapters/AuthenticationService";
import React, {Component} from "react";

let accessApiWrapper = new AccessApiWrapper("UsersApi");

class User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: new AuthenticationService().getUserId(),
            isUsersLoaded: false,
            isComponentMounted: false,
            userModels: []
        }

        this.getUsersModels();

        this.handleUserDeleteClick = this.handleUserDeleteClick.bind(this);
    }

    getUsersModels() {
        accessApiWrapper.getData('/api/User').then(userModels => {
            console.log(userModels)
            this.setState({isUsersLoaded: true, userModels: userModels});
        });
    }

    deleteUserModel(id) {
        accessApiWrapper.deleteData(`/api/User/${id}`, id).then(result => {
            console.log(result)
            this.getUsersModels();
        });
    }

    getListOfHeaders() {
        return ["", "ID", "Username", "Email", "First Name", "Last Name", "Roles", "Actions"]
    }

    getListOfDataToShow() {
        return this.state.userModels
    }

    handleUserDeleteClick(id) {
        this.deleteUserModel(id);
    }

    viewUser(id){
        window.location.assign('/user?userId='+id);
    }

    showTableOfUsers(headers, body) {
        return (
            <table className="table table-sm table-hover table-dark table-bordered table-striped">
                <thead>
                <tr>
                    {headers.map(header => (
                        <th>{header}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {
                    !this.state.isUsersLoaded ?
                        "Loading..." :
                        body.map(userModel => (
                            <tr id={userModel.id} >
                                <td onClick={() => this.viewUser(userModel.id)}><img src={userModel.profilePhoto} style={{width: '50px', height: '50px'}} alt=""/>
                                </td>
                                <td onClick={() => this.viewUser(userModel.id)}>{userModel.id}</td>
                                <td onClick={() => this.viewUser(userModel.id)}>{userModel.username}</td>
                                <td onClick={() => this.viewUser(userModel.id)}>{userModel.email}</td>
                                <td onClick={() => this.viewUser(userModel.id)}>{userModel.firstName}</td>
                                <td onClick={() => this.viewUser(userModel.id)}>{userModel.lastname}</td>
                                <td onClick={() => this.viewUser(userModel.id)}>{userModel.roles}</td>
                                <td>
                                    <button data-toggle="modal" data-target={"#userDeleteModal" + userModel.id}>❌️
                                    </button>
                                </td>
                                {this.showDeleteModal("userDeleteModal" + userModel.id, userModel.id, userModel)}
                            </tr>
                        ))
                }
                </tbody>
            </table>
        )
    }

    showDeleteModal(modalId, userId, userModel) {
        return (
            <div className="modal fade" id={modalId} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title secondary-text-color" id="exampleModalLabel">Delete
                                User {userModel.username}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body secondary-text-color">
                            <p>You are about to delete this user:</p>
                            <p>ID: {userModel.id}</p>
                            <p>Username: {userModel.username}</p>
                            <p>Email: {userModel.email}</p>
                            <p>First Name: {userModel.firstName}</p>
                            <p>Last Name: {userModel.lastname}</p>
                            <p>Roles: {userModel.roles}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal"
                                    onClick={() => this.handleUserDeleteClick(userId)}>Delete User
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="container-fluid">
                {this.showTableOfUsers(this.getListOfHeaders(), this.getListOfDataToShow())}
            </div>
        )
    }
}

export default User;