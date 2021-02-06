import AuthenticationService from "../adapters/AuthenticationService";
import React, {Component} from "react";
import AccessApiWrapper from "../adapters/restcalls/AccessApiWrapper";

let accessApiWrapper = new AccessApiWrapper("UsersApi");

class User extends Component {
    constructor(props) {
        super(props);

        let userId = new AuthenticationService().getUserId();

        if (this.props.history.location.search.split('userId=')[1] === undefined || this.props.history.location.search.split('userId=')[1].length < 5)
            this.props.history.push({search: '?userId=' + userId});

        userId = this.props.history.location.search.split('userId=')[1];

        let defaultUserModel = {
            profilePhoto: "data:image/png;base64,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",
            firstName: "First Name",
            lastname: "Last Name",
            username: "Username",
            email: "Email",
            accountCreatedDateTime: "Date Created",
            lastsignin: "Date Last Signed in",
            sitesused: "Sites Used",
            roles: ["User's Role"]
        };

        this.state = {
            userId: userId,
            userModel: defaultUserModel,
            isUserProfileLoaded: false,
            isUserAdministrator: false,
            userHasChangedValues: false
        };

        this.handleOnChange = this.handleOnChange.bind(this);

        this.getUserModel(userId);
    }

    getUserModel(userId) {
        accessApiWrapper.getData('/api/User/' + userId).then(userModel => {
            this.setState({isUserProfileLoaded: true, userModel: userModel});
            console.log(this.state.userModel)
        });
    }

    handleOnChange = async event => {
        this.setState({[event.target.name]: event.target.value})
    };

    handleUserModelOnChange = async event => {
        let userModel = this.state.userModel;
        userModel[event.target.name] = event.target.value;

        this.setState({userModel: userModel, userHasChangedValues: true})
    };

    showUserInformationInputModals() {
        return (
            <div>
                {this.showUserInformationInputModal('firstNameInputModal', 'First Name', 'firstNameInput', 'John', this.state.userModel.firstName, 'firstName')}
                {this.showUserInformationInputModal('profilePhotoInputModal', 'Profile Photo', 'profilePhotoInput', 'https://linktoyourphoto', this.state.userModel.profilePhoto, 'profilePhoto')}
                {this.showUserInformationInputModal('lastNameInputModal', 'Last Name', 'lastNameInput', 'Smith', this.state.userModel.lastname, 'lastname')}
                {this.showUserInformationInputModal('usernameInputModal', 'Username', 'usernameInput', 'johnsmith33', this.state.userModel.username, 'username')}
                {this.showUserInformationInputModal('emailInputModal', 'Email', 'emailInput', 'johnsmith33@gmail.com', this.state.userModel.email, 'email')}
                {this.showUserInformationInputModal('passwordInputModal', 'Password', 'passwordInput', 'F2@7*baku&54', this.state.userModel.password, 'password')}
            </div>
        )
    }

    showUserInformationInputModal(modalId, modalTitle, inputFieldId, inputFieldPlaceHolder, inputFieldValue, inputFieldName) {
        return (
            <div className="modal fade" id={modalId} tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title secondary-text-color"
                                id="exampleModalLongTitle">{modalTitle}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body secondary-text-color">
                            <div className="form-group">
                                <input type="text" className="form-control" id={inputFieldId} name={inputFieldName}
                                       value={inputFieldValue} placeholder={inputFieldPlaceHolder}
                                       onChange={this.handleUserModelOnChange}/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-success" data-dismiss="modal">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    handleUserSaveChanges() {
        accessApiWrapper.putData("/api/user/" + this.state.userModel.id, this.state.userModel);

        this.setState({userHasChangedValues: false})
    }

    showUserInformation() {
        const userModel = this.state.userModel

        return (
            <div className="row">
                <div className="col-2">
                    <img
                        src={userModel.profilePhoto}
                        alt="..." className="img-thumbnail" data-toggle="modal" data-target="#profilePhotoInputModal"/>
                </div>
                <div className="col-5">
                    <div className="row">
                        <h5 data-toggle="modal" data-target="#firstNameInputModal"
                            style={{paddingRight: "5px"}}>{userModel.firstName}</h5>
                        <h5 data-toggle="modal" data-target="#lastNameInputModal"
                            style={{paddingRight: "5px"}}>{userModel.lastname}</h5>
                        <h5 data-toggle="modal" data-target="#usernameInputModal"
                            style={{paddingRight: "5px"}}>({userModel.username})</h5></div>
                    <div className="row" data-toggle="modal"
                         data-target="#emailInputModal">{userModel.email ? "Email: " + userModel.email : ""}</div>
                    <div
                        className="row">Permissions: {userModel.roles !== undefined && userModel.roles.length > 0 ? userModel.roles.join(', ') : ""}</div>
                    <div
                        className="row">{userModel.accountCreatedDateTime ? "Account Created: " + userModel.accountCreatedDateTime : ""}</div>
                    <div className="row">{userModel.lastsignin ? "Last Sign In: " + userModel.lastsignin : ""}</div>
                    <div className="row">{userModel.sitesused ? "Sites Used: " + userModel.sitesused : ""}</div>
                    <div className="row"><a href=""  data-toggle="modal" data-target="#passwordInputModal" className="text-warning"><u>Change Password</u></a></div>
                    <div className="row" style={{fontSize: "12px"}}>*Click anything to edit</div>
                    <div className="row" style={{fontSize: "12px"}}>
                        <button className="btn btn-success" disabled={!this.state.userHasChangedValues}
                                onClick={() => this.handleUserSaveChanges()}>Save Changes
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="container">
                {this.showUserInformation()}

                {this.showUserInformationInputModals()}
            </div>
        )
    }
}

export default User;