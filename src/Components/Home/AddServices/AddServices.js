import React, { useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const AddServices = () => {
    const [service, setService] = useState({})
    const [file, setFile] = useState(null)
    const handleBlur = e =>{

        const newService = {...service};
        newService[e.target.name] = e.target.value;
        setService(newService)
        
    }
    const handleFileChange = (e) =>{

        const newFile = e.target.files[0]
        setFile(newFile)
    }
    const handleSubmit = (e) =>{
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', service.name)
        formData.append('info', service.info)
        formData.append('cost', service.cost)
        fetch('https://calm-reaches-86971.herokuapp.com/addService', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          alert('Service Added Successfully')
        })
        .catch(error => {
          console.error(error)
        })
        e.preventDefault()
        e.target.reset()
    }
      
    
    
    return (
        <section className="App">
        
            <div className="row container-fluid">
             <div className="col-md-3">
                <Sidebar></Sidebar>
             </div>
             <div className="col-md-9">
             <h3 className="head3">Add Services</h3>
            <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            
                            <label for="exampleInputEmail1">Service Name</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="name" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Service Name" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Info</label>
                            <input onBlur={handleBlur} type="text" class="form-control" id="exampleInputPassword1" placeholder="Your info" name="info" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Cost</label>
                            <input onBlur={handleBlur} type="number" class="form-control" id="exampleInputPassword1" placeholder="About Cost" name="cost" />
                        </div>
                        <div class="form-group">
                        <label for="exampleCheck1">Upload</label>
                        <input type="file" onChange={handleFileChange} class="form-control" />
                            
                        </div>
                        <button type="submit" className="sPrimary">Submit</button>
                    </form>


             </div>
            </div>


            </section>
    );
};

export default AddServices;