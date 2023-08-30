import Model from "./Model";
import style from "../style/SelectModel.module.css";
import modelsInfo from "../data/modelsInfo";
import { useState } from "react";

export default function SelectModel() {
    const [isClickedN1, setIsClickedN1] = useState(true);
    const [isClickedN2, setIsClickedN2] = useState(false);

    return (
        <div className={style.modelsContainer}>
            <Model
                data={modelsInfo.EMNISTInfo}
                isClicked={isClickedN1}
                setIsClicked={setIsClickedN1}
                removeClick={setIsClickedN2}
            />
            <Model
                data={modelsInfo.fashionMNIST}
                isClicked={isClickedN2}
                setIsClicked={setIsClickedN2}
                removeClick={setIsClickedN1}
            />
        </div>
    );
}
