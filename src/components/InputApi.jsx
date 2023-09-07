import { TbLink } from "react-icons/tb";
import style from "../style/InputApi.module.css";
import { useContext } from "react";
import { ThemeContext } from "../App";
import { notify1 } from "../data/toastNotify";
import { useState } from "react";

export default function InputApi() {
    const themeStateContext = useContext(ThemeContext);
    const [inputValueN1, setInputValueN1] = useState("");
    const [inputValueN2, setInputValueN2] = useState("");

    const handleConnectApiN1 = () => {
        console.log(inputValueN1);
        notify1();
    };

    const handleConnectApiN2 = () => {
        console.log(inputValueN2);
        notify1();
    };

    return (
        <div className={style.labelContainer}>
            <div className={style.label}>API link</div>
            <div className={style.flexContainer}>
                <div className={style.inputContainer}>
                    <TbLink className={style.icon} />
                    <span style={{ color: "black" }}>|</span>
                    {themeStateContext.isClickedN1 ? (
                        <input
                            type="text"
                            placeholder="http://apilink"
                            value={inputValueN1}
                            onChange={(e) => setInputValueN1(e.target.value)}
                        />
                    ) : (
                        <input
                            type="text"
                            placeholder="http://apilink"
                            value={inputValueN2}
                            onChange={(e) => setInputValueN2(e.target.value)}
                        />
                    )}
                </div>
                {themeStateContext.isClickedN1 ? (
                    <div
                        className={style.buttonContainer}
                        onClick={handleConnectApiN1}
                    >
                        <div>Connect</div>
                    </div>
                ) : (
                    <div
                        className={style.buttonContainer}
                        onClick={handleConnectApiN2}
                        style={{
                            backgroundColor: "#401d07",
                            color: "#ffffff",
                            border: "1px solid #ffa90c",
                        }}
                    >
                        <div>Connect</div>
                    </div>
                )}
            </div>
        </div>
    );
}
