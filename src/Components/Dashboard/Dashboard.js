import React from 'react';
import Sidebar from '../Shared/Sidebar/Sidebar';
import Booked from '../Booked/Booked';
const Dashboard = () => {
    return (
        
             <section>
            <div className="container-fluid row containerStyle">
               
                <div className="col-md-10">
                    <Booked></Booked>
                </div>
            </div>
        </section>
    );
       

};

export default Dashboard;