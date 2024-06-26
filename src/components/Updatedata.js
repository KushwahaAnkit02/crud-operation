import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { postDataById } from '../ApiUtils/userApi'
import { useDispatch, useSelector } from 'react-redux'
import { getUserById, updateUser } from '../slices/Slices'

const Updatedata = () => {
    const parems = useParams()
    const id = parems.id
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // const data = useSelector((state) => state.app.user)
    const data = useSelector((state) => state.app.users)
    const { countries } = useSelector((state) => state.app)

    const [details, setDeetails] = useState()
    const handleChange = (e) => {
        if (e.target.name == 'name') {
            setDeetails({ ...details, name: e.target.value })
        } else if (e.target.name == 'contact') {
            setDeetails({ ...details, contact: e.target.value })
        } else {
            setDeetails({ ...details, country: e.target.value })
        }
    }
    useEffect(() => {
        // dispatch(getUserById(id))
        const dd = data.filter(user => user.id == id)

        setDeetails(...dd)
    }, [parems.id])

    function saveData(details) {
        dispatch(updateUser(details))
        navigate('/users')
    }

    return (
        <div className='d-flex justify-content-center m-5 ' style={{ height: "100vh" }}>
            <div >
                <h3 className='d-flex justify-content-center m-5'>Edit Details</h3>
                <label className="mx-3">Name:</label>
                <input type="name" name="name" value={details?.name} onChange={handleChange} />
                <label className="mx-3">Contact:</label>
                <input type="contact" name="contact" value={details?.contact} onChange={handleChange} />
                <label className="mx-3">Country:</label>
                <select name="country" onChange={handleChange} >
                    {countries.map((country) => {
                        return (
                            <option option value={country?.name?.common}>{country?.name?.common}</option>
                        )
                    })
                    }
                </select>
                <div className='d-flex justify-content-center m-5'>
                    <button className='btn btn-primary' onClick={() => saveData(details)}>Save Changes</button>
                </div>
            </div>
        </div >
    )
}

export default Updatedata
