import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import './Name.css';

const Name = (props) => {
    // console.log(props);

    const {img,name,creator,price,time}=props.name;
    return (
        <div className='name'>

            <div>
               <img  className='course-logo' src={img} alt=""/>
            </div>


            <div className='info'>
            <h4 className='course-name'>{name}</h4>
            

            <p>Instructor: <b>{creator}</b></p>
            <p>Course Duration: {time}</p>
            <br/>
            <p>Course Price: <b>{price}$</b></p>

             <br/>
             <button className="enroll"
             onClick={()=>props.handleAddCourses(props.name)}
             ><FontAwesomeIcon icon={faPlus} /> ENROLL NOW</button>
            </div>

            
            
            
           
            
        </div>
    );
};

export default Name;