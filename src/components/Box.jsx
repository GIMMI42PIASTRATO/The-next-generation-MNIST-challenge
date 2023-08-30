import SelectModel from "./SelectModel";
import style from "../style/PlayableArea.module.css";

export default function PlayableArea() {
    return (
        <div className={style.container}>
            <div className={style.relativeContainer}>
                <div className={style.shadowBox}></div>
                <div className={style.fromBox}>
                    <SelectModel modelName={"EMNIST"} />
                    <div>Model</div>
                </div>
            </div>
        </div>
    );
}
