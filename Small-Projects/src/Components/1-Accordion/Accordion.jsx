import "./styles.css";
import data from "./data.js";
import React, { useState } from "react";


function Accordion() {

    const [selected, setSelected] = useState(null);

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    console.log(selected)

    return (
        <div className="wrapper">

            <h2>Project 1 Accordion</h2>

            <div className="accordion" >
                {data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div key={dataItem.id} className="item">
                            <div onClick={() => handleSingleSelection(dataItem.id)}
                                className="question">
                                <h3>{dataItem.question}</h3>
                                <span> + </span>
                            </div>

                            {selected === dataItem.id ? <p className="answer">
                                {dataItem.answer}
                            </p> : null}

                        </div>
                    ))
                ) : (<div>No data found!</div>)}
            </div>

        </div>)
}

export default Accordion;
