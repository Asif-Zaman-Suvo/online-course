import React from 'react';
import fakeData from '../../fakeData/fakeData';
import { useState } from 'react';
import './Courses.css';
import Name from '../Name/Name';
import Cart from '../Cart/Cart';



const Courses = () => {
    const courses=[...fakeData]

    const [course,setCourse]=useState(courses);
    const [cart,setCart]=useState([])

    const handleAddCourses=(name)=>{
    // console.log('course added',name);

    const newCart=[...cart,name];
    setCart(newCart);
    }
    return (
        <div className='total-container'>

            <div className="course-container">

            
            {
                course.map(co=><Name
                handleAddCourses={handleAddCourses}
                     name={co}>

                     </Name>)
            }
        


            </div>

            <div className="cart-container">
            <Cart cart={cart}></Cart>
            </div>

            
          

           
        </div>
    );
};

export default Courses;