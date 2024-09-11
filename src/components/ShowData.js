import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchCountries, getUserById, showUser, } from '../slices/Slices'
import DeleteModal from './DeleteModal'


const ShowData = ({ mode, className }) => {
    const dispatch = useDispatch()
    const allData = useSelector((state) => state.app)
    const details = allData.users
    const [showModal, setShowModal] = useState(false)
    const [deleteId, setDeleteId] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(showUser()).then(() => {
            dispatch(fetchCountries()).then((res) => {
            })
        })

    }, [])

    const navigateToUpdate = (id) => {
        dispatch(getUserById(id)).then(() => {
            navigate(`/update-data/${id}`)
        })
    }

    const onDelete = (id) => {
        setShowModal(true)
        setDeleteId(id)


    }

    return (
        <div className='' style={{ marginTop: "10vh" }}>
            <DeleteModal showModal={showModal} id={deleteId} setShowModal={setShowModal}
                mode={mode}
            />
            <h3 className="d-flex justify-content-center ">Users</h3>
            <div className="d-flex justify-content-center " >
                <table className={`table w-50 ${className}`} style={{ border: "2px solid gray" }}>
                    <thead>
                        <tr >
                            <th className="col">Sr.No.</th>
                            <th className="col">USER</th>
                            <th className="col">NAME</th>
                            <th className="col">CONTACT</th>
                            <th className="col">COUNTRY</th>
                            <th className='col'> UPDATE</th>
                            <th className='col'> DELETE</th>
                        </tr>
                    </thead>
                    {
                        details && details?.map((user, i) => {
                            return (

                                <tbody key={i}>
                                    <tr >
                                        <td>{i + 1}</td>
                                        <td><img src="https://cdn-icons-png.freepik.com/256/552/552721.png" width={50} /></td>
                                        <td>{user?.name}</td>
                                        <td>{user?.contact}</td>
                                        <td>{user?.country}</td>
                                        <td><button className='btn btn-primary' onClick={() => navigateToUpdate(user.id)}>Update</button></td>
                                        <td><button className='btn btn-danger' onClick={() => onDelete(user?.id)}>Delete</button></td>
                                    </tr>
                                </tbody>

                            )
                        })
                    }

                </table>
            </div>
        </div>
    )
}

export default ShowData
