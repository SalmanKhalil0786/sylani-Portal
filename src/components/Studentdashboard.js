import React,{useState} from 'react'
import Header from './Header'
import { db, } from '../../Firebase';
import { setDoc, doc } from 'firebase/firestore';

const Studentdashboard = () => {
  const [email, setEmail] = useState("")
  const [query, setquery] = useState("")
  const [name, setName] = useState("")
  const [course, setCourse] = useState("")
  const handler=()=>{
    setDoc(doc(db, "AdminCourses" ), {
      name: name,
      email: email,
      query:query,
      userUid: user.uid,
      course: course
    })
    alert('sucess')
  }
  return (
    <div>
      <Header />
      <div class="mb-3">
        <h1>Query Form</h1>
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => { setEmail(e.target.value) }} />
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Name</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" value={name} onChange={(e) => { setName(e.target.value) }} />

      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Query</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" value={query} onChange={(e) => { setquery(e.target.value) }} />

      </div>
      <select class="form-select" aria-label="Default select example" value={course} onChange={(e) => { setCourse(e.target.value) }}>
        <option selected>select Course</option>
        <option value="Graphic Designing">Graphic Designing</option>
        <option value="Web Mobile Hybrid App development">Web Mobile Hybrid App development</option>
        <option value="CCO">CCO</option>
        <option value="CCNA">CCNA</option>
        <option value="AI">AI</option>

      </select>
      

      <button type="submit" class="btn btn-primary" onClick={handler}>Add User</button>

    </div>

               
    
    
  )
}
export default Studentdashboard