import SelectModel from "./SelectModel";
import style from "../style/Box.module.css";

export default function Box() {
    return (
        <div className={style.container}>
            <div className={style.relativeContainer}>
                <div className={style.shadowBox}></div>
                <div className={style.fromBox}>
                    <SelectModel />
                    <div>Model</div>
                </div>
            </div>
        </div>
    );
}
