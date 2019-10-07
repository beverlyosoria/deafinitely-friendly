import React, { Component } from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    render () {
    return (
        <div>
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