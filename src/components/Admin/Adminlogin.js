import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const Adminlogin = () => {
    const [password, SetPassword] = useState("")
    const navigate = useNavigate()
    let email = "saylani123@gmail.com"
    const auth = getAuth();
    const login = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate("/Admindashboard")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });


    }

    return (
        <div style={{ justifyContent: "center" }}>
            <h1>Admin Login</h1>
            
                <div className="mb-3">
                    <h1>
                        Email:admin@gmail.com
                    </h1>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => { SetPassword(e.target.value) }} />
                </div>

                <button type="submit" className="btn btn-primary" onClick={login} >Submit</button>
            

        </div>
    )
}
