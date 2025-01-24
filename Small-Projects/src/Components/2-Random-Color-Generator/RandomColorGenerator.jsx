import React, { useState } from "react";
import style from "./ColorGenerator.module.css";

function RandomColorGenerator() {
    const [randomColor, setRandomColor] = useState("Click On Generate Button");
    const [colorFormat, setColorFormat] = useState("rgb");

    function generateRgbColor() {
        return ({
            red: Math.floor(Math.random() * 256),
            green: Math.floor(Math.random() * 256),
            blue: Math.floor(Math.random() * 256),
        });
    }

    function generateHexColor() {
        const rgb = generateRgbColor();

        const hex = {
            red: rgb.red.toString(16).padStart(2, "0"),
            green: rgb.green.toString(16).padStart(2, "0"),
            blue: rgb.blue.toString(16).padStart(2, "0"),
        }

        return (`#${hex.red + hex.green + hex.blue}`);
    }

    function generateHslColor() {
        const hsl = {
            hue: Math.floor(Math.random() * 360),
            saturation: Math.floor(Math.random() * 101),
            lightness: Math.floor(Math.random() * 101),
        };

        return (`hsl(${hsl.hue}, ${hsl.saturation}%, ${hsl.lightness}%)`);
    }

    function handleGenerateColor() {
        let color;

        switch (colorFormat) {
            case "rgb":
                const rgb = generateRgbColor();
                color = `rgb(${rgb.red}, ${rgb.green}, ${rgb.blue})`;
                break;
            case "hex":
                color = generateHexColor();
                break;
            case "hsl":
                color = generateHslColor();
                break;
            default:
                console.log("Invalid Color Format.");
        }

        setRandomColor(color);
    }

    function handleColorFormatChange(event) {
        setColorFormat(event.target.value);
    }

    return (
        <div className={style.wrapper}>
            <p>Project 2</p>
            <h2>Random Color Generator</h2>
            <div className={style.controls}>
                <div>
                    <label htmlFor='color-format'>Chose a Color Format: </label>
                    <select
                        value={colorFormat}
                        onChange={handleColorFormatChange}
                        name='color-format'
                        id='color-format'>
                        <option value='rgb'>Rgb</option>
                        <option value='hex'>Hex</option>
                        <option value='hsl'>Hsl</option>
                    </select>
                </div>

                <button onClick={handleGenerateColor}>Generate Color</button>
            </div>

            <div className={style.color} style={{ backgroundColor: randomColor }}>
                <p>{randomColor}</p>
            </div>
        </div>
    );
}

export default RandomColorGenerator;
