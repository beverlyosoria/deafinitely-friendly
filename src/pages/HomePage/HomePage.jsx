import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
        <br />
        <br />
        <Link to='/newPost'>   
        <button className='new-post'>New Post</button>
		</Link> 
        </div>
    );
};

export default HomePage;