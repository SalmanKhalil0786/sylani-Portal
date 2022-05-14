import React from 'react'
import { useState, useEffect } from 'react'
import { storage } from '../../Firebase';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '../../Firebase'


 const AdminPost = () => {
    const [progress, setProgress] = useState();
    const [description,setdescription]=useState("")
    const [file,setfile]=useState("")
    
  
  const formhandler = (e) => {
    e.preventDefault();
    // const file = e.target[0].files[0];
    uploadFiles(file);
  }
  const uploadFiles = (file) => {
    if (!file) return;
    const sotrageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          const Postdata = {

            imageUrl: downloadURL,

          }
          
          addDoc(collection(db, 'Course'), Postdata);
          


        });
      }
    );
  }
  return (
    <div style={{justifyContent:"center"}}>
            <h1>Create Courses</h1>
            
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Details</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={description} onChange={(e)=>setdescription(e.target.value)}  />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="file" className="form-control" id="exampleInputPassword1" value={file} onChange={(e)=>setfile(e.target.value)} />
                </div>
                
                <button type="submit" className="btn btn-primary" onClick={formhandler} >Submit</button>
            

        </div>
  )
}
export default AdminPost