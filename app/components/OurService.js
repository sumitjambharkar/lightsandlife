import React from 'react';
import "./OurService.css";
import HomeIcon from '@mui/icons-material/Home';
import EditNoteIcon from '@mui/icons-material/EditNote';
import BuildIcon from '@mui/icons-material/Build';

const OurService = () => {
    return (
        <div className='our_service'>
            <h1>Our Services</h1>
            <div className='our_main'>
                <div className='our_box'>
                    <div className='our_logo'>
                        <HomeIcon style={{fontSize:62,color:"white"}} />
                    </div>
                    <div className='our_tilte'>
                        <span>DESIGNS TRENDS</span>
                    </div>
                    <div className='our_para'>
                        <span>
Lights brings warmth and comfort to any space, casting a gentle glow that creates a welcoming atmosphere. Whether it's the soft radiance of a bedside lamp easing us into relaxation .</span>
                    </div>

                </div>
                <div className='our_box'>
                    <div className='our_logo'>
                    <EditNoteIcon style={{fontSize:62,color:"white"}} />
                    </div>
                    <div className='our_tilte'>
                        <span>PLANNING</span>
                    </div>
                    <div className='our_para'>
                        <span>Analyze space requirements, budget, and regulations. Design, install, and maintain efficient, compliant lighting systems for optimal functionality and ambiance.</span>
                    </div>

                </div>
                <div className='our_box'>
                    <div className='our_logo'>
                    <BuildIcon style={{fontSize:62,color:"white"}} />
                    </div>
                    <div className='our_tilte'>
                        <span>DEVELOP</span>
                    </div>
                    <div className='our_para'>
                        <span>Expert lighting service: We diagnose, repair, and illuminate your space with precision and care. Trust us to keep your lights shining bright.</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OurService