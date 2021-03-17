import React from "react";
import PropTypes from 'prop-types'
import DeleteUserModal from "./DeleteUserModal";

function InteractiveUsersTable({tableHeaders, tableRows, viewUser, deleteUserModel}) {
    return (
        <table className="table table-sm table-hover table-dark table-bordered table-striped">
            <thead>
            <tr>
                {tableHeaders.map((header, index) => (<th key={index}>{header}</th>))}
            </tr>
            </thead>
            <tbody>
            {
                // TODO determine if there is a better way to check/handle data not being loaded
                tableRows === null || tableRows.length === 0 ?
                    "Loading..." :
                    tableRows.map((userModel, index) => (
                        <tr key={index} id={userModel.id}>
                            <td onClick={() => viewUser(userModel.id)}>
                                <img src={userModel.profilePhoto} style={{width: '50px', height: '50px'}} alt=""/>
                            </td>
                            <td onClick={() => viewUser(userModel.id)}>{userModel.id}</td>
                            <td onClick={() => viewUser(userModel.id)}>{userModel.username}</td>
                            <td onClick={() => viewUser(userModel.id)}>{userModel.email}</td>
                            <td onClick={() => viewUser(userModel.id)}>{userModel.firstName}</td>
                            <td onClick={() => viewUser(userModel.id)}>{userModel.lastname}</td>
                            <td onClick={() => viewUser(userModel.id)}>{userModel.roles}</td>
                            <td>
                                <button data-toggle="modal" data-target={"#userDeleteModal" + userModel.id}>❌️</button>
                            </td>
                            <DeleteUserModal modalId={"userDeleteModal" + userModel.id} userId={userModel.id}
                                             userModel={userModel} deleteUserModel={deleteUserModel}/>
                        </tr>
                    ))
            }
            </tbody>
        </table>
    )
}

InteractiveUsersTable.propTypes = {
    tableHeaders: PropTypes.array,
    tableRows: PropTypes.array,
    isDataReady: PropTypes.bool,
    viewUser: PropTypes.func,
}

export default InteractiveUsersTable;