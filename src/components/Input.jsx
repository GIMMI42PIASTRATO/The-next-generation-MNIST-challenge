import PropsTypes from "prop-types";
import DrawingComponent from "./DrawingComponent";
import style from "../style/Input.module.css";
import { useContext } from "react";
import { ThemeContext } from "../App";

export default function Input({ setResults }) {
    const themeStateContext = useContext(ThemeContext);

    return (
        <>
            {themeStateContext.isClickedN1 ? (
                <div className={style.container}>
                    <DrawingComponent setResults={setResults}/>
                </div>
            ) : (
                <div>
                    {/*Per ora è vuoto perché non abbiamo ancora il modello per la fashion-MNIST*/}
                </div>
            )}
        </>
    );
}

Input.propTypes = {
    setResults: PropsTypes.func
}