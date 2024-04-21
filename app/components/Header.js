import "./Header.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const Header = () => {
  return (
    <div className="header">
     <div className="header_social_media">
       <FacebookIcon  fontSize="small"/>
       <TwitterIcon fontSize="small"/>
       <GoogleIcon fontSize="small"/>
       <LinkedInIcon fontSize="small"/>
       <InstagramIcon fontSize="small"/>
     </div>
     <div className="header_logo">
        <span>Lights & Life</span>
     </div>
     <div className="header_contact">
      <CallIcon fontSize="small"/><li> 9137979183</li>
      <EmailIcon fontSize="small"/><li>support@lightsandlife.in</li>
     </div>
    </div>
  )
}

export default Header