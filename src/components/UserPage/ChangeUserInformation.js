import UserInformationDisplay from "./UserInformationDisplay";
import UpdateUserModals from "./UpdateUserModals";
import React from "react";
import PropTypes from "prop-types";

function ChangeUserInformation({userModel, handleSaveButtonClick, userHasChangedValues, handleUserModalOnChange}) {
    return (
        <div className="row">
            <UserInformationDisplay userModel={userModel}/>
            <div className="col-5">
                <div className="row" style={{fontSize: "12px"}}>*Click anything to edit</div>
                <div className="row" style={{fontSize: "12px"}}>
                    <button className="btn btn-success" disabled={!userHasChangedValues}
                            onClick={handleSaveButtonClick}>Save Changes
                    </button>
                </div>
            </div>
            <UpdateUserModals userModel={userModel} handleUserModalOnChange={handleUserModalOnChange}/>
        </div>
    )
}

ChangeUserInformation.propTypes = {
    userModel: PropTypes.object,
    handleSaveButtonClick: PropTypes.func,
    userHasChangedValues: PropTypes.bool,
    handleUserModalOnChange: PropTypes.func
}


export default ChangeUserInformation