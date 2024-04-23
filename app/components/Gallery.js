import React from 'react';
import "./Gallery.css";
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss';
import image1 from '../image/f1.jpg';
import image2 from '../image/bann.jpg';
import image3 from '../image/bg.jpg';
import image4 from '../image/g5.jpg';
import image5 from '../image/g9.jpg';
import image6 from '../image/g10.jpg';
import image7 from '../image/g12.jpg';
import image8 from '../image/test2.jpeg';
import image9 from '../image/test4.jpeg';
import image10 from '../image/test5.jpeg';
import image11 from '../image/test8.jpeg';
import Image from 'next/image';
import image12 from '../image/test19.jpeg';


let array = [image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12]

const Gallery = () => {

    

    
    return (


        <div className='gallery_section'>
            <h1>OUR GALLERY</h1>
            <div className='gallery'>
                {array.map((doc) => (
                    <div className='gallery_box'>
                        <Image src={doc} alt="" />
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Gallery