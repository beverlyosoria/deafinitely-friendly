import React, {Component} from 'react';
import './NewPost.css';

class NewPost extends Component {
constructor(props) {
super(props);
this.state = {
    title: ''
    };
}
handleOnChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    })
}

handleSubmit = event => {
    event.preventDefault()
    
}

render() {
    return (
    <div>
    <h1>Post</h1>
    <form className="post" onSubmit={this.handleSubmit}>
            {' '}
            <label>Title</label>
            <input
                type="text"
                name="title"
                onChange={this.handleOnChange}
                value={this.state.title}
                />
            <button>Submit</button>
    </form>
    </div>
    )}
}

export default NewPost;