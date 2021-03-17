import UpdateUserModal from "./UpdateUserModal";
import React from "react";

function UpdateUserModals({userModel, handleUserModalOnChange}) {
    const updateUserModalDetailsList = [{
        modalId: 'firstNameInputModal',
        modalTitle: 'First Name',
        inputFieldId: 'firstNameInput',
        inputFieldPlaceHolder: 'John',
        inputFieldValue: userModel.firstName,
        inputFieldName: 'firstName',
    }, {
        modalId: 'profilePhotoInputModal',
        modalTitle: 'Profile Photo',
        inputFieldId: 'profilePhotoInput',
        inputFieldPlaceHolder: 'https://linktoyourphoto',
        inputFieldValue: userModel.profilePhoto,
        inputFieldName: 'profilePhoto',
    }, {
        modalId: 'lastNameInputModal',
        modalTitle: 'Last Name',
        inputFieldId: 'lastNameInput',
        inputFieldPlaceHolder: 'Smith',
        inputFieldValue: userModel.lastname,
        inputFieldName: 'lastname',
    }, {
        modalId: 'usernameInputModal',
        modalTitle: 'Username',
        inputFieldId: 'usernameInput',
        inputFieldPlaceHolder: 'johnsmith33',
        inputFieldValue: userModel.username,
        inputFieldName: 'username',
    }, {
        modalId: 'emailInputModal',
        modalTitle: 'Email',
        inputFieldId: 'emailInput',
        inputFieldPlaceHolder: 'johnsmith33@gmail.com',
        inputFieldValue: userModel.email,
        inputFieldName: 'email',
    }, {
        modalId: 'passwordInputModal',
        modalTitle: 'Password',
        inputFieldId: 'passwordInput',
        inputFieldPlaceHolder: 'F2@7*baku&54',
        inputFieldValue: userModel.password,
        inputFieldName: 'password',
    }];

    return (
        <div>
            {updateUserModalDetailsList.map((updateUserModalDetails) => {
                return (
                    <UpdateUserModal modalId={updateUserModalDetails.modalId}
                                     modalTitle={updateUserModalDetails.modalTitle}
                                     inputFieldId={updateUserModalDetails.inputFieldId}
                                     inputFieldPlaceHolder={updateUserModalDetails.inputFieldPlaceHolder}
                                     inputFieldValue={updateUserModalDetails.inputFieldValue}
                                     inputFieldName={updateUserModalDetails.inputFieldName}
                                     handleInputChangeEvent={handleUserModalOnChange}/>
                )
            })}
        </div>
    )
}

export default UpdateUserModals;