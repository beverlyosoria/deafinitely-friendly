import React, {Component} from 'react';
import './NewPost.css';
import Map from './../../components/Map/Map';

class NewPost extends Component {
    state = {
    title: ''
    }

handleOnChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    })
}

handleSubmit = event => {
    event.preventDefault()
    // this.props.handleAddPost({...this.state})
}

render() {
    return (
    <div>
    <h1>Post</h1>
    <form className="post" onSubmit={this.handleSubmit}>
            {' '}
            <label>Title</label>
            <Map
            handleAddPost={this.props.handleAddPost}
     google={this.props.google}
     center={{lat: 30.2672, lng: -97.7431}}
     height='300px'
     zoom={15}
    />
    <br />
    <br />
    <br />
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