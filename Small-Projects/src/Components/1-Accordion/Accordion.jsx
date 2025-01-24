import style from "./Accordion.module.css";
import data from "./data.js";
import React, { useState } from "react";

function Accordion() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiSelected, setMultiSelected] = useState([]);

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultipleSelection(getCurrentId) {
        let copyMultiSelected = [...multiSelected];
        const findIndexOfCurrentId = copyMultiSelected.indexOf(getCurrentId);

        if (findIndexOfCurrentId === -1) {
            copyMultiSelected.push(getCurrentId);
        } else {
            copyMultiSelected.splice(findIndexOfCurrentId, 1);
        }

        setMultiSelected(copyMultiSelected);
    }

    function handleSelectionToggle() {
        setEnableMultiSelection(!enableMultiSelection)

        if (!enableMultiSelection) {
            setMultiSelected([])
        }
        else {
            setSelected(null)
        }
    }

    return (
        <div className={style.wrapper}>
            <p>Project 1</p>
            <h2>Accordion</h2>

            <button onClick={handleSelectionToggle}>
                {enableMultiSelection
                    ? "Enable Multiple Selection"
                    : "Disable Multiple Selection"}
            </button>
            <div className={style.accordion}>
                {data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div key={dataItem.id} className={style.item}>
                            <div
                                className={style.question}
                                onClick={
                                    enableMultiSelection
                                        ? () => handleSingleSelection(dataItem.id)
                                        : () => handleMultipleSelection(dataItem.id)
                                }>
                                <h3>{dataItem.question}</h3>
                                <span> + </span>
                            </div>

                            {selected === dataItem.id ||
                                multiSelected.indexOf(dataItem.id) !== -1 ? (
                                <p className={style.answer}>{dataItem.answer}</p>
                            ) : null}
                        </div>
                    ))
                ) : (
                    <div className={style.error}>No data found!</div>
                )}
            </div>
        </div>
    );
}

export default Accordion;
