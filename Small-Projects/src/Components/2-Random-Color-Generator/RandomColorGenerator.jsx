import React, { useState } from "react";


function RandomColorGenerator() {

    const [randomColor, setRandomColor] = useState("Click On Generate Button");

    function handleGenerateRgbColor() {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        const rgbColor = `RGB(${red}, ${green}, ${blue})`;

        setRandomColor(rgbColor);
    }

    return (
        <div className="wrapper">
            <h2>Random Color Generator</h2>
            <button onClick={handleGenerateRgbColor}>Generator Rgb Color</button>
            <div className="color" style={{ backgroundColor: randomColor }}>
                <p>{randomColor}</p>
            </div>
        </div>
    )
}


export default RandomColorGenerator;