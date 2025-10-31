import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="home">
            <h1>Welcome to My Personal Website</h1>
            <p>
                Hi, I'm a developer passionate about creating web applications. 
                Explore my work and learn more about me!
            </p>
            <nav>
                <ul>
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/projects">My Projects</Link></li>
                    <li><Link to="/contact">Contact Me</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;