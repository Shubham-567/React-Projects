import "@fortawesome/fontawesome-free/css/all.min.css";
import style from "./StarRating.module.css";
import React, { useState } from "react";

function StarRating({ noOfStars = 10 }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex);
    }

    function handleMouseHover(getCurrentIndex) {
        setHover(getCurrentIndex);
    }

    function handleMouseLeave() {
        setHover(rating);
    }

    return (
        <div className="container">
            <div className="project-title">
                <p>Project 3</p>
                <h2>Star Ratings</h2>
            </div>


            <div>
                {[...Array(noOfStars)].map((_, index) => {
                    index += 1; // index starts from 1

                    return (
                        <i
                            className={`fa-star fa-xl
                                ${index <= (hover || rating)
                                    ? style.active + " fa-solid"
                                    : style.inactive + " fa-regular"
                                }`}
                            key={index}
                            onClick={() => handleClick(index)}
                            onMouseMove={() => handleMouseHover(index)}
                            onMouseLeave={handleMouseLeave}></i>
                    );
                })}
            </div>
        </div>
    );
}

export default StarRating;
