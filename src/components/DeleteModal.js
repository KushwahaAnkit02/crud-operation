import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteSingleUser, showUser } from '../slices/Slices'

const DeleteModal = ({ showModal, id, setShowModal, mode }) => {
    const dispatch = useDispatch()

    const onDelete = () => {
        dispatch(deleteSingleUser(id)).then(() => {
            setShowModal(false)
            dispatch(showUser())
        })
    }

    return (
        showModal && <div style={{ position: 'fixed', left: window.innerWidth / 2.35, top: 250, }} >
            <div >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Warning!!</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowModal(false)}></button>
                        </div>
                        <div className="modal-body">
                            <p>Are you sure?
                                You want to delete this user.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setShowModal(false)}>Cancel</button>
                            <button type="button" className="btn btn-danger" onClick={onDelete}>Delete Anyway</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal
