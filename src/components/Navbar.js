import React, { useState } from 'react'
import CreateUser from './CreateUser'
import { Link } from 'react-router-dom'

const Navbar = ({ changeMode, name }) => {
    const [addUser, setAddUser] = useState(false)

    const addUsers = () => {
        setAddUser(!addUser)
    }
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top " style={{ borderBottom: "1px solid gray", zIndex: 1, backgroundColor: "white" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/users'>Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <button type="button" className="btn btn-info mx-4" onClick={addUsers}>👤+</button>
                        </ul>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" onClick={changeMode} />
                            <label className="form-check-label" >{name}</label>
                        </div>
                    </div>
                </div>
            </nav>
            {
                addUser && <CreateUser
                    setAddUser={setAddUser}
                />
            }
        </div>
    )
}

export default Navbar
