import PropsTypes from "prop-types";
import DrawingComponent from "./DrawingComponent";
import style from "../style/Input.module.css";
import { useContext } from "react";
import { ThemeContext } from "../App";

export default function Input({ setEMNISTResult, setMNISTResult }) {
    const themeStateContext = useContext(ThemeContext);

    return (
        <>
            {themeStateContext.isClickedN1 ? (
                <div className={style.container}>
                    <DrawingComponent setEMNISTResult={setEMNISTResult} setMNISTResult={setMNISTResult}/>
                </div>
            ) : (
                <div className={style.container}>
                    <DrawingComponent setEMNISTResult={setEMNISTResult} setMNISTResult={setMNISTResult}/>
                </div>
            )}
        </>
    );
}

Input.propTypes = {
    setMNISTResult: PropsTypes.func,
    setEMNISTResult: PropsTypes.func
}