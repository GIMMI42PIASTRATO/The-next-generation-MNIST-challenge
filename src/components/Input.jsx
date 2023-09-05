import DrawingComponent from "./DrawingComponent";
import style from "../style/Input.module.css";
import { useContext } from "react";
import { ThemeContext } from "../App";

export default function Input() {
    const themeStateContext = useContext(ThemeContext);

    return (
        <>
            {themeStateContext.isClickedN1 ? (
                <div className={style.container}>
                    <DrawingComponent />
                </div>
            ) : (
                <div>
                    {/*Per ora è vuoto perché non abbiamo ancora il modello per la fashion-MNIST*/}
                </div>
            )}
        </>
    );
}
