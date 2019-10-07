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
    this.props.handleAddPost({...this.state})
}

render() {
    return (
    <div>
    <h1>Post</h1>
    <form className="post" onSubmit={this.handleSubmit}>
            {' '}
            <label>Title</label>
            <Map
     google={this.props.google}
     center={{lat: 18.5204, lng: 73.8567}}
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