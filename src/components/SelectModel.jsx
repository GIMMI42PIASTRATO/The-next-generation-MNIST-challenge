import Model from "./Model";
import style from "../style/SelectModel.module.css";
import modelsInfo from "../data/modelsInfo";
import { useContext } from "react";
import { ThemeContext } from "../App";

export default function SelectModel() {
    const themeStateContext = useContext(ThemeContext);

    return (
        <div className={style.modelsContainer}>
            <Model
                data={modelsInfo.EMNISTInfo}
                isClicked={themeStateContext.isClickedN1}
                setIsClicked={themeStateContext.setIsClickedN1}
                removeClick={themeStateContext.setIsClickedN2}
            />
            <Model
                data={modelsInfo.fashionMNIST}
                isClicked={themeStateContext.isClickedN2}
                setIsClicked={themeStateContext.setIsClickedN2}
                removeClick={themeStateContext.setIsClickedN1}
            />
        </div>
    );
}
