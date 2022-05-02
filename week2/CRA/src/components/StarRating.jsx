import React, {useState} from 'react';
import {FaStar} from 'react-icons/fa'
// Star Rating video: https://www.youtube.com/watch?v=eDw46GYAIDQ

const StarRating = ({stars}) => {
    const [rating, setRating] = useState(stars);
    const [hover, setHover] = useState(null);

    return (
        <div className="star">
            {
                [...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    return (
                        <label key={i} >
                            <input 
                               type="radio" 
                               name="rating" 
                               value={ratingValue} 
                               onClick={() => setRating(ratingValue)}
                            
                               />
                            <FaStar 
                               size = {25} 
                               color={ratingValue <= (hover || rating) ? 'FFA500' : '#e4e5e9'} 
                               className="star-icon" 
                               onMouseEnter={() => setHover(ratingValue)}
                               onMouseLeave={() => setHover(null)}
                            />
                        </label>
                    )
                })
            }
       </div>
    )
}

export default StarRating;