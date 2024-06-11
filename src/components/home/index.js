import {Component} from'react';

import {Link} from "react-router-dom"

import {DNA} from "react-loader-spinner"

import swal from 'sweetalert'

import './index.css';

const condition={

    isFail:"fail",
    isSuccess:"success",
    isPending:"pending"
}

class Home extends Component {

    state={storageBlogs:[],duplicateSearch:[],status:condition.isPending,searchValue:""}


    componentDidMount(){
        this.fetchingDataBaseData()
    }

    fetchingDataBaseData = async()=>{

        this.setState({status:condition.isPending})

        const api = "https://lucidgrowthbackenddaveed.onrender.com/blogsAll" 

        const response = await fetch(api)

        console.log(response);

        const responseToJson = await response.json()
        console.log(responseToJson);

        if(response.ok===true){

            this.setState({storageBlogs:responseToJson,duplicateSearch:responseToJson,status:condition.isSuccess})
        }
        else{
            this.setState({status:condition.isFail})
        }



        
    }

    loading=()=>(
        <div className='loader'>
            <div>
            <DNA
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  />
  <h1>Loading...</h1>
  </div>
        </div>
    )

    statusCondtion = ()=>{

        const {status}=this.state

        switch(status){
            case condition.isFail:
                return <h1>Something went wrong</h1>
            case condition.isSuccess:
                return this.blogList()
            case condition.isPending:
                return this.loading()
            default:
                return <h1>Something went wrong</h1>
        }

    }

    searchValueChange = (event)=>{
        this.setState({searchValue:event.target.value})
    }

    searchedList = ()=>{
        const {searchValue,storageBlogs}=this.state

        const searchedBlogs = storageBlogs.filter((each)=>{
            return each.title.toLowerCase().includes(searchValue.toLowerCase())
        })

        console.log(searchedBlogs)

        this.setState({duplicateSearch:searchedBlogs})
    }

    deletingBlogPost=async(id)=>{
        console.log("id is :",id)

        const apiDelete=`https://lucidgrowthbackenddaveed.onrender.com/blogDelete/${id}`


        const optionsDelete={
            method:"DELETE"
        }

        const responsedDelete=await fetch(apiDelete,optionsDelete)

        if(responsedDelete.ok===true){
            this.fetchingDataBaseData();
        }

    }


    deleteAction=(id)=>
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this blog post!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                console.log("id:",id)
                this.deletingBlogPost(id)
              swal("Poof! Your blog post has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your blog post  is safe!");
            }
          });
    

    blogList = ()=>{

        const {duplicateSearch}=this.state

        return(

            <div>

                <div className='blog-search'>
                    <div>
                    <input onChange={this.searchValueChange} className='search-input' type="search" placeholder="Search"/>
                    <button onClick={this.searchedList} className="search-button" type="button">Search</button>
                    </div>
                </div>

                <div>
                    <Link to="addNewPost">
                    <button className="post-add-button" type="button">POST ADD</button>
                    </Link>
                </div>

            <div className="blog-list">
                {
                    duplicateSearch.map((each)=>(
                        <div className="card" key={each.id}>
                            <div className="card-image">
                            <img className="blog-image" src={each.image} alt={each.title}/>
                            </div>
                            <h1>{each.title}</h1>
                            <h1>{each.date}</h1>
                            <p>{each.author}</p>
                            <p>{each.description}</p>

                            <button onClick={()=>{this.deleteAction(each.id)}} type="button" className="delete-button">DELETE</button>
                            <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
                        </div>
                    ))
                }
            </div>
            </div>
        )
    }

    render() {
        return (
            <div>
               

                <div className='nav-bar'>
                    <div>
                    <img className='blog-logo' src="https://i.ibb.co/pRjV2rX/Screenshot-2024-06-09-192749.png" alt="lucidBlogLogo"/>
                    </div>

                    <p className='para'>Exploring Ideas, Sharing Insights: A Journey Through the World of Blogging" – Dive into a space where curiosity meets knowledge, and every post is a step towards understanding the diverse tapestry of thoughts and experiences that shape our world</p>

                    <div className='nav-links'>
                        <Link to="/profile">Profile</Link>
                    </div>
             
             
             
                </div>

                
                <p className='para-smaller'>Exploring Ideas, Sharing Insights: A Journey Through the World of Blogging" – Dive into a space where curiosity meets knowledge, and every post is a step towards understanding the diverse tapestry of thoughts and experiences that shape our world</p>

           

                <div>
                    {
                        this.statusCondtion()
                    }
                </div>


              
            </div>
        )
    }
}

export default Home;