import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postDetail } from '../slices/Slices';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [user, setUser] = useState({})
    const { countries } = useSelector((state) => state.app)


    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (user?.name?.length === 0 || user?.contact?.length === 0 || user?.country?.length === 0) {
            alert('All fields are required')
        } else {
            dispatch(postDetail(user))
            navigate('/users')
        }
    }
    return (
        <div className='mt-5'>
            <h4 className='d-flex justify-content-center'> Add New User</h4>
            <form onSubmit={handleSubmit}>
                <div className=" d-flex justify-content-center">

                    <div div className="mx-3" >
                        <label className="form-label">Name:</label>
                        <input type="text" name='name' className="form-control" onChange={handleChange} />
                    </div>
                    <div className="mx-3">
                        <label className="form-label">Contact:</label>
                        <input type="text" className="form-control" name='contact' onChange={handleChange} />
                    </div>
                    <div className="mx-3">
                        <label className="form-label">Select Country:</label>

                        <select className="form-control" name="country" onChange={handleChange}>
                            {countries.map((country) => {

                                return (

                                    <option value={country.name.common}>{country.name.common}</option>
                                )

                            })
                            }
                        </select>
                    </div>
                </div>

                <div className="my-4 d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form >
        </div >

    )
}

export default CreateUser
