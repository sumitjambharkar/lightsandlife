import React from 'react';
import "./Gallery.css";
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss';

let array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,]

const Gallery = () => {

    

    
    return (


        <div className='gallery_section'>
            <h1>OUR GALLERY</h1>
            <div className='gallery'>
                {array.map((doc) => (
                    <div className='gallery_box'>
                        <img src="https://lightsandlife.in/images/test6.jpeg" alt="" />
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Gallery