import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { db, } from '../../Firebase';
import { setDoc, doc } from 'firebase/firestore';
import { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword,signOut } from "firebase/auth";
import AdminPost from './AdminPost';



const Admindashboard = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [course, setCourse] = useState("")
  let navigate = useNavigate()

  const signup = () => {
  
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setDoc(doc(db, "users", user.uid), {
          name: name,
          email: email,
          userUid: user.uid,
          course: course
        })
        alert('sucess')
        console.log(user.email)
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

  }
  const logout=()=>{
    const auth = getAuth();
signOut(auth).then(() => {
  navigate("/")
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
})
  }

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
          {/* < className="d-flex"> */}
            <Link to='/login'>
              <button type="button" class="btn btn-light" style={{ marginRight: 10 }} onClick={logout}>Logout</button>
            </Link>

            {/* 
                         Button trigger modal  */}
            <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Add User
            </button>
            {/* 
Modal */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add User</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => { setEmail(e.target.value) }}/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" value={name} onChange={(e)=>{setName(e.target.value)}}/>

                      </div>
                      <select class="form-select" aria-label="Default select example" value={course} onChange={(e) => { setCourse(e.target.value) }}>
                        <option selected>select Course</option>
                        <option value="Graphic Designing">Graphic Designing</option>
                        <option value="Web Mobile Hybrid App development">Web Mobile Hybrid App development</option>
                        <option value="CCO">CCO</option>
                        <option value="CCNA">CCNA</option>
                        <option value="AI">AI</option>
                        
                      </select>
                      <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label" >Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" value={password}onChange={(e) => { setPassword(e.target.value) }} />
                      </div>

                      <button type="submit" class="btn btn-primary" onClick={signup}>Add User</button>
                    
                  </div>

                </div>
              </div>
            </div>
          
        </div>
      </div>
    </nav>
    <br />
    <div class="container">
  <div class="row">
    <div class="col">
    <AdminPost/>
    </div>
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
  </div>
</div>
    
    </div>
  )
}

export default Admindashboard