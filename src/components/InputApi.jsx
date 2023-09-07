import { TbLink } from "react-icons/tb";
import style from "../style/InputApi.module.css";

export default function InputApi() {
    return (
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
    );
}
