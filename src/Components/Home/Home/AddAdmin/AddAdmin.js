import React, { useState } from 'react';
import Sidebar from '../../../Shared/Sidebar/Sidebar';
import './AddAdmin.css';
const AddAdmin = () => {
    const [info, setInfo] = useState({})
      const handleBlur = e => {
      const newInfo = {...info};
      newInfo[e.target.name] = e.target.value
      setInfo(newInfo)

      }


      const handleSubmit = (e) =>{

        const formData = new FormData()
        formData.append('email', info.email)
        formData.append('name', info.name)
        fetch('https://calm-reaches-86971.herokuapp.com/addAAdmin', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          alert('done')
        })
        .catch(error => {
          console.error(error)
        })
      
      e.preventDefault()
      }
    return (
        <section>
            <div className="container-fluid row containerStyle">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 mt-5 p-4">
                    <h3 className="text-brand head3">Add a Doctor</h3>

                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            
                            <label for="exampleInputEmail1">Email address</label>
                            <input onBlur={handleBlur} type="email" class="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Name</label>
                            <input onBlur={handleBlur} type="text" class="form-control" id="exampleInputPassword1" placeholder="Your name" name="name" />
                        </div>
                        <button type="submit" className="sPrimary">Submit</button>
                    </form>


                </div>
            </div>
        </section>
    );
};

export default AddAdmin;