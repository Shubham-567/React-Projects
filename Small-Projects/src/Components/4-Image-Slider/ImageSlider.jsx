import { useState, useEffect } from "react";
import style from "./ImageSlider.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleChevronLeft,
    faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function ImageSlider({ url, page = 1, limit = 1 }) {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if (data) {
                setImages(data);
                console.log(data);
                setLoading(false);
            }
        } catch (e) {
            setErrorMsg(e.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        url !== "" && fetchImages(url);
    }, [url]);

    function handlePrevious() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    }

    function handleNext() {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
    }

    return (
        <div className='container'>
            <div className='project-title'>
                <p>Project 4</p>
                <h2>Image Slider</h2>
            </div>

            {errorMsg !== null ? ( //if errorMsg has value
                <p>Error Occurred: {errorMsg}</p>
            ) : //else
                loading ? (
                    <p>Loading Please Wait..</p>
                ) : (
                    <div className={style.imageSlider}>
                        <FontAwesomeIcon
                            onClick={handlePrevious}
                            className={style.arrowLeft}
                            icon={faCircleChevronLeft}
                        />
                        {images && images.length
                            ? images.map((imageItem, index) => (
                                <img
                                    key={imageItem.id}
                                    alt={imageItem.download_url}
                                    src={imageItem.download_url}
                                    className={currentSlide === index ? style.currentImage : style.hideImage}
                                />
                            ))
                            : null}
                        <FontAwesomeIcon
                            onClick={handleNext}
                            className={style.arrowRight}
                            icon={faCircleChevronRight}
                        />

                        <span className={style.circleIndicators}>
                            {images && images.length
                                ? images.map((_, index) => (
                                    <button
                                        key={index}
                                        className={currentSlide === index ? style.activeIndicator : style.inactiveIndicator}
                                        onClick={() => setCurrentSlide(index)}
                                    ></button>
                                ))
                                : null}
                        </span>
                    </div>
                )}
        </div>
    );
}

export default ImageSlider;
