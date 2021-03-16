import React, {useEffect, useState} from "react";
import InteractiveUsersTable from "../components/UsersPage/InteractiveUsersTable/InteractiveUsersTable"
import AccessApiWrapper from "../adapters/restcalls/AccessApiWrapper";

let accessApiWrapper = new AccessApiWrapper("UsersApi");

function UsersPage() {
    const [userModels, setUserModels] = useState([]);
    let usersTableHeaders = ["", "ID", "Username", "Email", "First Name", "Last Name", "Roles", "Actions"];

    function viewUser(id) {
        window.location.assign('/user?userId=' + id);
    }

    function deleteUserModel(id) {
        accessApiWrapper.deleteData(`/api/User/${id}`, id).then(() => {
            // TODO show deletion message to user
            getUsersModels(setUserModels);
        });
    }

    function getUsersModels(setUserModels) {
        // TODO determine solution for handling when data is not returned in a reasonable amount of time
        accessApiWrapper.getData('/api/User').then(userModels => {
            setUserModels(userModels);
        });
    }

    useEffect(() => {
        // TODO determine better to get initial users array, lazy loading option to assist with records are deleted
        getUsersModels(setUserModels);
    }, [])

    // TODO determine a better way to get deleteUserModel() functionality to dependent component
    return (
        <div className="container-fluid">
            <InteractiveUsersTable tableHeaders={usersTableHeaders} tableRows={userModels} viewUser={viewUser}
                                   deleteUserModel={deleteUserModel}/>
        </div>
    )
}

export default UsersPage;