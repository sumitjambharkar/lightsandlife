import React from 'react';
import "./OurService.css";
import HomeIcon from '@mui/icons-material/Home';

const OurService = () => {
    return (
        <div className='our_service'>
            <h1>Our Service</h1>
            <div className='our_main'>
                <div className='our_box'>
                    <div className='our_logo'>
                        <HomeIcon style={{fontSize:62,color:"white"}} />
                    </div>
                    <div className='our_tilte'>
                        <span>DESIGNS TRENDS</span>
                    </div>
                    <div className='our_para'>
                        <span>Donec non nibh in dui sagittis finibus. Duis suscipit, arcu vel rhoncus molestie, ipsum velit mattis nibh, id congue lacus lorem a elit.</span>
                    </div>

                </div>
                <div className='our_box'>
                    <div className='our_logo'>
                    <HomeIcon style={{fontSize:62,color:"white"}} />
                    </div>
                    <div className='our_tilte'>
                        <span>DESIGNS TRENDS</span>
                    </div>
                    <div className='our_para'>
                        <span>Donec non nibh in dui sagittis finibus. Duis suscipit, arcu vel rhoncus molestie, ipsum velit mattis nibh, id congue lacus lorem a elit.</span>
                    </div>

                </div>
                <div className='our_box'>
                    <div className='our_logo'>
                    <HomeIcon style={{fontSize:62,color:"white"}} />
                    </div>
                    <div className='our_tilte'>
                        <span>DESIGNS TRENDS</span>
                    </div>
                    <div className='our_para'>
                        <span>Donec non nibh in dui sagittis finibus. Duis suscipit, arcu vel rhoncus molestie, ipsum velit mattis nibh, id congue lacus lorem a elit.</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OurService