import PropTypes from "prop-types";

function UserInformationDisplay({userModel}) {
    // TODO show fields conditionally

    return (
        <div>
            <p hidden={userModel}>ID: {userModel.id}</p>
            <p>Username: {userModel.username}</p>
            <p>Email: {userModel.email}</p>
            <p>First Name: {userModel.firstName}</p>
            <p>Last Name: {userModel.lastname}</p>
            <p>Roles: {userModel.roles}</p>
        </div>
    )
}

UserInformationDisplay.propTypes = {
    userModel: PropTypes.object,
}

export default UserInformationDisplay;