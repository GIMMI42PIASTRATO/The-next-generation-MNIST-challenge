import SelectModel from "./SelectModel";
import Playground from "./Playground";
import style from "../style/Box.module.css";
import { useContext } from "react";
import { ThemeContext } from "../App";

export default function Box() {
    const themeStateContext = useContext(ThemeContext);

    return (
        <div className={style.container}>
            <div className={style.relativeContainer}>
                {themeStateContext.isClickedN1 ? (
                    <div className={style.shadowBox}></div>
                ) : (
                    <div
                        className={style.shadowBox}
                        style={{
                            background:
                                "linear-gradient(to bottom, #ffe14c, #ff6d2e)",
                        }}
                    ></div>
                )}
                <div className={style.fromBox}>
                    <SelectModel />
                    <Playground />
                </div>
            </div>
        </div>
    );
}
