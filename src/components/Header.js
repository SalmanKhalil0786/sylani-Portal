import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {


    return (
        <div><nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <h1 style={{ color: "white" }}>Smit Portal</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" ><Link to='/' style={{ color: "white" }}>Home</Link></a>

                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" ><Link to='/courses' style={{ color: "white" }}>Courses</Link></a>
                        </li>


                    </ul>
                    <form className="d-flex">
                        <Link to='/login'>
                            <button type="button" class="btn btn-light" style={{ marginRight: 10 }}>Login</button>
                        </Link>


                        {/* <Link to='/signup'>
                            <button type="button" class="btn btn-light" style={{ marginRight: 10 }}>Sign Up</button>
                        </Link> */}
                    </form>
                </div>
            </div>
        </nav></div>
    )
}
export default Header
