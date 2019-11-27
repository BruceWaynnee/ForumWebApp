import React from "react";
import ForumPost from '../Forum-post/ForumPost.js';
import './ForumBody.css';

class ForumBody extends React.Component{
    constructor(){
        super();
        this.state = {
            post: '',
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then( (res) => res.json() )
        .then( (data) => {
            this.setState({
                post: data.map( ( d ) => <ForumPost title={d.title} body={d.body}/> )
            })  
        });
    }
    render(){
        return(
            <div className='container post-container col-9'>
                { this.state.post }
            </div>
        );
    }
}
export default ForumBody