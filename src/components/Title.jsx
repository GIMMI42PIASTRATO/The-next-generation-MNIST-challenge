import { useContext } from "react";
import { ThemeContext } from "../App";
import style from "../style/Title.module.css";
import InputApi from "./InputApi";

export default function Title() {
    const themeStateContext = useContext(ThemeContext);

    return (
        <div className={style.titleContainer}>
            {themeStateContext.isClickedN1 ? (
                <div className={style.title}>
                    The <span className={style.highlight}>next-generation</span>{" "}
                    *NIST tester.
                </div>
            ) : (
                <div className={style.title}>
                    The{" "}
                    <span
                        className={style.highlight}
                        style={{
                            background:
                                "-webkit-linear-gradient(#ffe14c, #ff6d2e)",
                            backgroundClip: "text",
                            color: "transparent",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}
                    >
                        next-generation
                    </span>{" "}
                    *NIST tester.
                </div>
            )}
            <InputApi />
        </div>
    );
}
