import { useState, useEffect } from 'react';
import "../../styles/global.css";

export default function Button({ blok }) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    useEffect(() => {
        if (isClicked) {
            document.body.classList.add('body-clicked');
        } else {
            document.body.classList.remove('body-clicked');
        }
    }, [isClicked]);


    console.log(blok.label);
    console.log(blok.label)
    return (
        <button
            className={`button ${isClicked ? 'button-clicked' : ''}`}
            onClick={handleClick}
        >
            {blok.label && blok.label || "click here"}
        </button>
    );
}
