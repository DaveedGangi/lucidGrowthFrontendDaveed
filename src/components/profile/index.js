import {Component} from'react'

import {Link} from "react-router-dom"
 
import Cookies from "js-cookie"

import "./index.css"


class Profile extends Component{

     removeJwtToken=(props)=>{
        Cookies.remove("jwt_token")
        const {history}=this.props 
        history.replace("/login")
       
    }

    render(){

    return(
        <div className="profile">
            
            <img className='blog-logo' src="https://i.ibb.co/pRjV2rX/Screenshot-2024-06-09-192749.png" alt="lucidBlogLogo"/>
            <div className="profile-container">
                <img className="user-profile-image" src="https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg" alt="userImage"/>
               
               <div className="profile-details">
                <div>
                <p>Name: david</p>
                <p>Email: daveeddaveedd@gmail.com</p>
                <p>Phone: 9876543210</p>
                <p>Address: India</p>
                <p>About: I am a developer</p>
                <p>Website: www.google.com</p>
              
                </div>
                <div>
                <p>Social Media:</p>

              
                    <a rel="noreferrer" href="https://www.facebook.com/profile.php?id=100007847173762" target="_blank">Facebook</a>
                    <a rel="noreferrer" href="https://www.instagram.com/lucid_coder_/" target="_blank">Instagram</a>
                    <a rel="noreferrer" href="https://twitter.com/lucid_coder_" target="_blank">Twitter</a>
                    <a rel="noreferrer" href="https://www.linkedin.com/in/lucid-coder-/" target="_blank">Linkedin</a>
                    <a rel="noreferrer" href="https://github.com/lucid-coder-007" target="_blank">Github</a>
                    <a rel="noreferrer" href="https://www.youtube.com/channel/UC-8QAzbLcR8K3Q0-zZ-41-g" target="_blank">Youtube</a>
                   </div>
                  
                
           
            </div>
            <br/>


            <button className="log-out-button" type="button" onClick={this.removeJwtToken}>Log Out</button>
            <br/>
            <Link to="/">
            <button className='home-button' type="button">Home</button></Link>
            </div>
       
        </div>
    )

    }
}

export default Profile;