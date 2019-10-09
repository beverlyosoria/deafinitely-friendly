import React, { Component } from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    render () {
    return (
        <div>
        {this.props.posts.map((p, id) => (
            <div key={id}>
            <p>{p.title}</p>
            <p>{p.address}</p>
            <p>{p.area}</p>
            <p>{p.state}</p>
            </div>
        ))}
        <br />
        <br />
        <Link to='/newPost'>   
        <button className='new-post'>New Post</button>
		</Link> 
        </div>
     );
    }
}

export default HomePage;