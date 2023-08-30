import { useContext } from "react";
import { ThemeContext } from "../App";
import style from "../style/Title.module.css";

export default function Title() {
    const themeStateContext = useContext(ThemeContext);

    return (
        <>
            {themeStateContext.isClickedN1 ? (
                <div className={style.title}>
                    The <span className={style.highlight}>next-generation</span>{" "}
                    command line.
                </div>
            ) : (
                <div className={style.title}>
                    The{" "}
                    <span
                        className={style.highlight}
                        style={{
                            background:
                                "linear-gradient(to right, #ffe14c, #ff6d2e)",
                            backgroundClip: "text",
                            color: "transparent",
                        }}
                    >
                        next-generation
                    </span>{" "}
                    command line.
                </div>
            )}
        </>
    );
}
