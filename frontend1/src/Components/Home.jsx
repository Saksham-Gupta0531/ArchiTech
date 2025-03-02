import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Home.css'
import { Started } from './UI Verse/Started'
import { Card } from './UI Verse/Card'
import Luxury_House from '../image/Luxary_house.jpg';
import studioApartment from '../image/studioApartment.jpg';
import Standard1 from '../image/Standard1.jpg';
import Free_to_use from '../image/Free_to_use.svg';
import BeginnerFriendly from '../image/BeginnerFriendly.svg';
import All_private from '../image/All_private.svg';
import Footer from './Footer';
import CopyRightFooter from './CopyRightFooter';
import logo from '../image/logo.png';

const Home = () => {
    const navigate = useNavigate(); 
    return (
        <div className='home'>
            <div className="navbar">
                <div className="left">
                    <img src={logo} alt="" width={"350px"} height={"90px"}/>
                </div>
                <div className="right">
                    <button className="btn-contact" onClick={() => window.open('https://www.instagram.com/gupta_saksham_55/','_blank')}>Get in touch</button>
                    <button className="btn-start" onClick={() => navigate('/create')}>Start Creating Now</button> 
                </div>
            </div>
            <div className="main">
                <div className="grid">
                    <div className="front-1">
                        <div className='front-1-1'>
                            <div>AI Floor Plan</div>
                            <div>Generator</div>
                            <div>Design functional and aesthetic floor plans with our AI Floor Plan Generator! Ideal for</div>
                            <div> architects and real estate developers.</div>
                            <div>
                                <Started />
                            </div>
                        </div>


                        <div className="front-2">
                            <div className="Cardsdiv">
                                <Card title="Luxury House" image={Luxury_House} />
                                <Card title="Standard House" image={Standard1} />
                                <Card title="Villa" image={Standard1} />
                                <Card title="Studio House" image={studioApartment} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="main2">
                <div>
                    <div className="cards">
                        <div className="logo">
                            <img src={Free_to_use} alt="SVG Example" width={60} height={60} />
                        </div>
                        <div className="title">
                            <h3>Free to use</h3>
                        </div>
                        <div className="description">
                            Access cutting-edge art tools at no cost, making creativity and innovation easily accessible to everyone.
                        </div>
                    </div>

                    <div className="cards">
                        <div className="logo">
                            <img src={BeginnerFriendly} alt="SVG Example" width={60} height={60} />
                        </div>
                        <div className="title">
                            <h3>All private</h3>
                        </div>
                        <div className="description">
                            Your projects and data remain confidential, ensuring your creative work is protected and secure.
                        </div>
                    </div>
                    <div className="cards">
                        <div className="logo">
                            <img src={BeginnerFriendly} alt="SVG Example" width={60} height={60} />
                        </div>
                        <div className="title">
                            <h3>Beginner-friendly</h3>
                        </div>
                        <div className="description">
                            Designed with simplicity in mind, it's easy to start and excel, regardless of your experience level.
                        </div>
                    </div>
                </div>

            </div>
            <div className="main3">
                <div>
                    <div className="faq1">
                        <div>Why Use a Floor Plan Generator?</div>
                        <p>Effortlessly create functional and visually sppealing floor plans with AI Floor Plan Generator</p>

                        <ul> 
                            <li><span >Time-saving: </span> Quickly generate multiple floor options, streamlining and design process.</li>
                            <li><span>Customization: </span>Easily modify generated plans to suit specific needs and preferences.</li>
                            <li><span>Cost-effective: </span>Reduce the need fo rprofessional design services, saving money.</li>
                            <li><span>Visualization: </span>Bring ideas to life, helping clients and stakeholders better understand the proposed layout.</li>
                            <li><span>Efficiency: </span>Omtimize space usage and improve overall functionality of the design.</li>
                        </ul>
                    </div>
                    <div className="faq1">
                        <div>How to Write a Good Floor Plan AI Prompt?</div>
                        <p>Crafting the perfect prompt for a floor plan generator requires a clear understanding of your space and design goals.</p>

                        <ul> 
                            <li><span > Define your space:  </span> Clearly outline the dimensions and specifications of the area you're working with.</li>
                            <li><span>Identify your needs: </span>Determine the essential rooms and features you want to include in your floor plan.</li>
                            <li><span>Consider functionality </span>Think about the flow and usability of the space, ensuring it meets your practical needs.</li>
                            <li><span>Prioritize aesthetics: </span>BEnvision the overall style and appearance you want to achieve with your floor plan.</li>
                            <li><span>Be open to experimentation: </span>Allow the AI generator to provide you with unique and innovative layout options.</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
            <div className="main4">
                <Footer />
               
            </div>
            <div className="main5">
            <CopyRightFooter/>
            </div>

        </div>
    )
}

export default Home