import {Component} from'react'

import Cookies from "js-cookie"

import "./index.css"

class Login extends Component {

    state={  username: "",  password: "", errorMsg:""}

   

    fetchApiLogin = async(event) => {

        event.preventDefault()

        const api="https://apis.ccbp.in/login"

        const {username, password} = this.state
        const userDetails = {username, password }

        const options={
            method: "POST",
            body:JSON.stringify(userDetails)
        }
        const response = await fetch(api,options)
        console.log(response)

        const responseToJson=await response.json()
        console.log(responseToJson)
    
        if(response.ok===true){
            const{history}=this.props
            Cookies.set("jwt_token",responseToJson.jwt_token,{expires:1})
            history.replace("/")
         
        }else{
           
            this.setState({errorMsg:responseToJson.error_msg,username: "", password: ""})
        }
        
        
    }

  changeUserName = (event) => {
        this.setState({username: event.target.value})
    }

    changePassword = (event) => {
        this.setState({password: event.target.value})
    }

    render() {

        const {username, password,errorMsg} = this.state
        console.log("username",username)
        console.log("password",password)
        return (
            <div className="login-container">

            <div>
            <img className='blog-logo-login' src="https://i.ibb.co/pRjV2rX/Screenshot-2024-06-09-192749.png" alt="lucidBlogLogo"/>
            </div>
              
              <div className="login">
              <h1>Login</h1>
                <form onSubmit={this.fetchApiLogin}>
                <label htmlFor="username">Username: </label>
                    <input id="username" value={username} type="text" placeholder="Enter Username" onChange={this.changeUserName}/>
                    <br/>
                    <br/>
                <label htmlFor="password">Password:&nbsp; </label>
                    <input id="password" value={password} type="password" placeholder="Enter Password" onChange={this.changePassword}/>
                    <br/>
                    <p>{errorMsg}</p>
                    <br/>
                    <button className='submit' type="submit">Submit</button>
                </form>
              </div>
            </div>
        )
    }
}

export default Login;