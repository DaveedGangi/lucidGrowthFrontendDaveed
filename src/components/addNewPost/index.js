import {Component} from "react"

import {Link} from "react-router-dom"

import {v4 as uuidV4} from "uuid"

import "./index.css"

class AddingPost extends Component{

    state={id:"",title:"",image:"",author:"",description:"",date:"",comments:""}

    fetchApiAddingPost=async(event)=>{

        event.preventDefault()

        const api="https://lucidgrowthbackenddaveed.onrender.com/blogAdd"

        const {title,image,author,description,date,comments}=this.state

        const newBlog={
            id:uuidV4(),
            title:title,
            image:image,
            author:author,
            description:description,
            date:date,
            comments:comments

        }

        
        const options={
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json"
            },
            body:JSON.stringify(newBlog)
        }

        const response=await fetch(api,options)

        console.log(response)



    }

    changeTitle=(event)=>{
        this.setState({title:event.target.value})
    }

    changeImage=(event)=>{
        this.setState({image:event.target.value})
    }

    changeAuthor=(event)=>{
        this.setState({author:event.target.value})
    }

    changeDescription=(event)=>{
        this.setState({description:event.target.value})
    }

    changeDate=(event)=>{
        this.setState({date:event.target.value})
    }

    changeComments=(event)=>{
        this.setState({comments:event.target.value})
    }

    render(){

        const {title,image,author,description,date,comments}=this.state
        console.log(comments)

        return(
            <div className="adding-post-container">

                <Link to="/">Home</Link>
                <h1>Adding Post</h1>

                <form className="adding-post-form" onSubmit={this.fetchApiAddingPost}>

                    <label htmlFor="title">Title: </label>
                    <input id="title" value={title} type="text" placeholder="Enter Title" onChange={this.changeTitle}/>
                    <br/>

                    <label htmlFor="image">Image: </label>
                    <input id="image" value={image} type="text" placeholder="Enter Image URL" onChange={this.changeImage}/>
                    <br/>

                    <label htmlFor="author">Author: </label>
                    <input id="author" value={author} type="text" placeholder="Enter Author Name" onChange={this.changeAuthor}/>

                    <br/>
                    <label htmlFor="description">Description: </label>
                    <input id="description" value={description} type="text" placeholder="Enter Description" onChange={this.changeDescription}/>

                    <br/>
                    <label htmlFor="date">Date: </label>
                    <input id="date" value={date} type="date" placeholder="Enter Date" onChange={this.changeDate}/>
                    <br/>

                    <button className="submit-button" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddingPost