import React from 'react'

const AddMoreModal = ({ showModal, setShowModal, addMore, setAddUser }) => {
    const onHandleCancel = () => {
        setShowModal(false);
        setAddUser(false);
    }

    return (
        showModal && <div style={{ position: 'fixed', left: window.innerWidth / 2.35, top: 250, }}>
            <div >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Success</h5>
                        </div>
                        <div className="modal-body">
                            <p>User Added!!</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => onHandleCancel()}>Cancel</button>
                            <button type="button" className="btn btn-danger" onClick={addMore}> Add More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddMoreModal
