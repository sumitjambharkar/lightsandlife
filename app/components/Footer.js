    import React from 'react';
    import "./Footer.css";
    import FacebookIcon from '@mui/icons-material/Facebook';
    import TwitterIcon from '@mui/icons-material/Twitter';
    import GoogleIcon from '@mui/icons-material/Google';
    import LinkedInIcon from '@mui/icons-material/LinkedIn';
    import InstagramIcon from '@mui/icons-material/Instagram';
    import CallIcon from '@mui/icons-material/Call';
    import EmailIcon from '@mui/icons-material/Email';

    const Footer = () => {
        return (
            <>
                <div className='footer'>


                    <div className='our_details'>
                        <span>Our Address</span>
                            <div><p>
                            Office No.37, 2nd Floor, Plot No 186,<br /> Prakash Mansion, Dr. Babasaheb <br /> Ambedkar Road, Dadar (E)</p></div>
                            <div className='center'><CallIcon/><div>+919137979183</div></div>
                            <div className='center'><EmailIcon/><div>support@lightsandlife.in</div></div>
                    </div>



                    <div className='logo'>
                    <h4>LIGHTS & LIFE</h4>
                    </div>



                    <div className='social_icon'>
                    <div><FacebookIcon/></div>
                    <div><TwitterIcon/></div>
                    <div><GoogleIcon/></div>
                    <div><LinkedInIcon/></div>
                    <div><InstagramIcon/></div>
                    </div>
                </div>
                <div className='footer_bottom'>
                     <p>© 2017 All rights reserved | Design by Sumit Jambharkar</p>
                </div>
            </>
        )
    }

    export default Footer