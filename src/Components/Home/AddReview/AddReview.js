import React, { useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
const AddReview = () => {
    const [review, setReview] = useState({})
    const [file, setFile] = useState(null)
    const handleBlur = e =>{

        const newReview = {...review};
        newReview[e.target.name] = e.target.value;
        setReview(newReview)
        
    }
    const handleFileChange = (e) =>{

        const newFile = e.target.files[0]
        setFile(newFile)
    }
    const handleSubmit = (e) =>{
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', review.name)
        formData.append('cName', review.cName)
        formData.append('description', review.description)
        fetch('https://calm-reaches-86971.herokuapp.com/addReview', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          alert('Review Added Successfully')
        })
        .catch(error => {
          console.error(error)
        })
        e.preventDefault()
        e.target.reset()
    }







    return (
        <div>
           <section className="App">
        
        <div className="row container-fluid">
         <div className="col-md-3">
            <Sidebar></Sidebar>
         </div>
         <div className="col-md-9">
         <h3 className="head3">Add Services</h3>
        <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        
                        <label for="exampleInputEmail1">Your Name</label>
                        <input onBlur={handleBlur} type="text" class="form-control" name="name" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Company Name</label>
                        <input onBlur={handleBlur} type="text" class="form-control" id="exampleInputPassword1" placeholder="Company Name" name="cName" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Description</label>
                        <input onBlur={handleBlur} type="text" class="form-control" id="exampleInputPassword1" placeholder="Description" name="description" />
                    </div>
                    <div class="form-group">
                    <label for="exampleCheck1">Upload A Photo</label>
                    <input type="file" onChange={handleFileChange} class="form-control" />
                        
                    </div>
                    <button type="submit" className="sPrimary">Submit</button>
                </form>


         </div>
        </div>


        </section> 
        </div>
    );
};

export default AddReview;