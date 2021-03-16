import PropTypes from "prop-types";
import UserInformationDisplay from "./UserInformationDisplay";

function DeleteUserModal({modalId, userId, userModel, deleteUserModel}) {
    return (
        <div className="modal fade" id={modalId} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title secondary-text-color" id="exampleModalLabel">Delete
                            User {userModel.username}</h5>
                        <button type="button" className="close" data-dismiss="modal"><span>&times;</span></button>
                    </div>
                    <div className="modal-body secondary-text-color">
                        <p>You are about to delete this user:</p>
                        <UserInformationDisplay userModel={userModel}/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal"
                                onClick={() => deleteUserModel(userId)}>
                            Delete User
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

DeleteUserModal.propTypes = {
    modalId: PropTypes.string,
    userId: PropTypes.string,
    userModel: PropTypes.object,
    deleteUserModel: PropTypes.func
}

export default DeleteUserModal;