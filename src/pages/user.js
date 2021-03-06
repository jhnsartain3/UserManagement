import AuthenticationService from "../adapters/AuthenticationService";
import React, {useEffect, useState} from "react";
import AccessApiWrapper from "../adapters/restcalls/AccessApiWrapper";
import ChangeUserInformation from "../components/UserPage/ChangeUserInformation";

let accessApiWrapper = new AccessApiWrapper("UsersApi");

function User(props) {
    // TODO find a better place this
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

    const [userModel, setUserModel] = useState(defaultUserModel);
    // TODO explore possibility of determining if userHasChangedValues is try by checking the user object itself for changes
    const [userHasChangedValues, setUserHasChangedValues] = useState(false);

    function doesUrlContainValidUserId(url) {
        const minimumLengthOfId = 20;
        return url.search.split('userId=')[1] === undefined || url.search.split('userId=')[1].length < minimumLengthOfId;
    }

    function determineUserToShow() {
        let userId = new AuthenticationService().getUserId();

        let url=props.history.location;
        if (doesUrlContainValidUserId(url))
            props.history.push({search: '?userId=' + userId});

        userId = url.search.split('userId=')[1];

        if(userId===undefined) userId =new AuthenticationService().getUserId();
        getUserModel(userId);
    }

    function getUserModel(userId) {
        accessApiWrapper.getData('/api/User/' + userId).then(userModel => {
            setUserModel(userModel)
        });
    }

    const handleUserModalOnChange = async event => {
        setUserModel({...userModel, [event.target.name]: event.target.value});
        setUserHasChangedValues(true);
    };

    function handleSaveButtonClick() {
        accessApiWrapper.putData("/api/user/" + userModel.id, userModel);
        setUserHasChangedValues(false);
    }

    useEffect(() => {
        determineUserToShow();
    }, [])

    return (
        <div className="container">
            <ChangeUserInformation userModel={userModel}
                                   handleSaveButtonClick={handleSaveButtonClick}
                                   userHasChangedValues={userHasChangedValues}
                                   handleUserModalOnChange={handleUserModalOnChange}
            />
        </div>
    )
}

export default User;