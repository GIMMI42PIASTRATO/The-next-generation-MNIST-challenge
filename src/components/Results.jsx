import { ThemeContext } from "../App";
import style from "../style/Results.module.css";
import { useContext } from "react";

export default function Results() {
    const themeStateContext = useContext(ThemeContext);

    return (
        <div>
            {themeStateContext.isClickedN1 ? (
                <div
                    className={style.highligth}
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, #f88660, #ff4c88)",
                        backgroundSize: "43%",
                        backgroundRepeat: "no-repeat",
                        backgroundClip: "text",
                        color: "transparent",
                    }}
                >
                    Interpretation
                </div>
            ) : (
                <div
                    className={style.highligth}
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, #ffe14c, #ff6d2e)",
                        backgroundSize: "43%",
                        backgroundRepeat: "no-repeat",
                        backgroundClip: "text",
                        color: "transparent",
                    }}
                >
                    Interpretation
                </div>
            )}
            <div className={style.result}>1</div>
            <div className={style.probability}>with 90% probability</div>
        </div>
    );
}
