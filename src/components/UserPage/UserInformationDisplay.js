import PropTypes from "prop-types";
import React from "react";

function UserInformationDisplay({userModel}) {
    return (
        <>
            <div className="col-2">
                <DisplayUserPhoto profilePhoto={userModel.profilePhoto}/>
            </div>
            <div className="col-5">
                <div className="row">
                    <DisplayUserNameInformation firstName={userModel.firstName} lastName={userModel.lastname}
                                                userName={userModel.username}/>
                </div>
                <DisplayUserEmail email={userModel.email}/>
                <DisplayUserPermissions roles={userModel.roles}/>
                <DisplayUserAccountCreationInformation accountCreatedDateTime={userModel.accountCreatedDateTime}/>
                <DisplayUserAccountLastAccessInformation lastSignIn={userModel.lastsignin}
                                                         sitesUsed={userModel.sitesused}/>
                <div className="row">
                    <DisplayChangeUserPassword/>
                </div>
            </div>
        </>
    )
}

function DisplayUserPhoto({profilePhoto}) {
    return <img src={profilePhoto} alt="..." className="img-thumbnail" data-toggle="modal"
                data-target="#profilePhotoInputModal"/>
}

function DisplayUserNameInformation({firstName, lastName, userName}) {
    return <>
        <h5 data-toggle="modal" data-target="#firstNameInputModal"
            style={{paddingRight: "5px"}}>{firstName}</h5>
        <h5 data-toggle="modal"
            data-target="#lastNameInputModal"
            style={{paddingRight: "5px"}}>{lastName}</h5>
        <h5 data-toggle="modal" data-target="#usernameInputModal" style={{paddingRight: "5px"}}>({userName})</h5>
    </>
}

function DisplayUserEmail({email}) {
    return (
        <div className="row" data-toggle="modal" data-target="#emailInputModal">
            {email ? "Email: " + email : ""}
        </div>
    )
}

function DisplayUserPermissions({roles}) {
    return <div className="row">Permissions: {roles !== undefined && roles.length > 0 ? roles.join(', ') : ""}</div>
}

function DisplayUserAccountCreationInformation({accountCreatedDateTime}) {
    return <div className="row">{accountCreatedDateTime ? "Account Created: " + accountCreatedDateTime : ""}</div>
}

function DisplayUserAccountLastAccessInformation({lastSignIn, sitesUsed}) {
    return <>
        <div className="row">{lastSignIn ? "Last Sign In: " + lastSignIn : ""}</div>
        <div className="row">{sitesUsed ? "Sites Used: " + sitesUsed : ""}</div>
    </>
}

function DisplayChangeUserPassword() {
    return (
        <a href="" data-toggle="modal" data-target="#passwordInputModal" className="text-warning">
            <u>Change Password</u>
        </a>
    )
}

UserInformationDisplay.propTypes = {
    userModel: PropTypes.object,
}

export default UserInformationDisplay;