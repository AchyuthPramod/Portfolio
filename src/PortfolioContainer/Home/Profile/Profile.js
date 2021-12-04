import React from 'react';
import Typical from 'react-typical';
import './Profile.css';

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href="https://www.facebook.com/achyuthpramod/">
                                <i className="fa fa-facebook-square"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/achyuth-pramod-133012167/">
                                <i className="fa fa-linkedin-square"></i>
                            </a>
                            <a href="https://www.instagram.com/achyuth_insta/">
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a href="https://www.youtube.com/channel/UCjXSJRkfa7xaRnSlLsHt6sw">
                                <i className="fa fa-youtube-square"></i>
                            </a>
                            <a href="https://twitter.com/Achyuth_Pramod">
                                <i className="fa fa-twitter"></i>
                            </a>
                        </div>   
                    </div>
                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello, I'm <span className="highlighted-text">Achyuth</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                loop={Infinity}
                                steps={[
                                    "Enthusiastic Dev🔴",
                                    1000,
                                    "Full Stack Developer💻",
                                    1000,
                                    "MERN Stack Dev😎",
                                    1000,
                                    "Cross Platform Dev🌐",
                                    1000,
                                    "React Dev📱",
                                    1000,
                                ]}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                Knack of building applications with front and back end operations.
                            </span>   
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className="btn primary-btn">
                            {""}
                            Hire me{" "}
                        </button>
                        <a href="Resume.pdf" download="AchyuthResume.pdf">
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">

                    </div>
                </div>
            </div>
        </div>
    );
}