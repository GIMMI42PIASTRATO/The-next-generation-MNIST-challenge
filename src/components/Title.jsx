import { useContext } from "react";
import { ThemeContext } from "../App";
import style from "../style/Title.module.css";
import { TbLink } from "react-icons/tb";

export default function Title() {
    const themeStateContext = useContext(ThemeContext);

    return (
        <div className={style.titleContainer}>
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
            <div className={style.labelContainer}>
                <div className={style.label}>API link</div>
                <div className={style.flexContainer}>
                    <div className={style.inputContainer}>
                        <TbLink className={style.icon} />
                        <span style={{ color: "black" }}>|</span>
                        <input type="text" placeholder="http://apilink" />
                    </div>
                    <div className={style.buttonContainer}>
                        <div>Connect</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
