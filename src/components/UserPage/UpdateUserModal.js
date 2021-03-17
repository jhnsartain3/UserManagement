import PropTypes from "prop-types";

function UpdateUserModal({modalId, modalTitle, inputFieldId, inputFieldPlaceHolder, inputFieldValue, inputFieldName, handleInputChangeEvent}) {
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
                                   onChange={handleInputChangeEvent}/>
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

UpdateUserModal.propTypes = {
    modalId: PropTypes.string,
    modalTitle: PropTypes.string,
    inputFieldId: PropTypes.string,
    inputFieldPlaceHolder: PropTypes.string,
    inputFieldValue: PropTypes.string,
    inputFieldName: PropTypes.string,
    handleInputChangeEvent: PropTypes.func
}

export default UpdateUserModal;