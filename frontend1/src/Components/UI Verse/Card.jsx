import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

export const Card = ({ title, image }) => {
    
    return (
        <div>
            <div className="card">
                <div className="card-head">
                    <h4>{title}</h4>
                </div>
                <img src={image} alt={title} />
                <div className="card-subhead">
                    <h5>Explore &rarr;</h5>
                </div>
            </div>
        </div>
    );
};
