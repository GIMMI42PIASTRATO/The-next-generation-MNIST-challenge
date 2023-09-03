import DrawingComponent from "./DrawingComponent";
import style from "../style/Input.module.css";

export default function Input() {
    return (
        <div className={style.container}>
            <DrawingComponent />
        </div>
    );
}
