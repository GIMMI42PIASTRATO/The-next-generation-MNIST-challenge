import { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import style from "../style/DrawingComponent.module.css";
import { TbSend } from "react-icons/tb";
import notify from "../data/toastNotify";
import { useEffect } from "react";

const DrawingComponent = () => {
    const canvas = useRef(null);

    useEffect(() => {
        if (canvas.current) {
            canvas.current._canvas.style.borderRadius = "15px";
        }
    }, []);

    const handleSendImage = async () => {
        const imageURL = canvas.current.toDataURL("PNG");
        //Inviare l'url all'api
        console.log(imageURL);
        await notify();
    };

    return (
        <>
            <div className={style.canvasContainer}>
                <SignatureCanvas
                    ref={(ref) => (canvas.current = ref)}
                    penColor="white"
                    backgroundColor="#161a1d"
                    minWidth={7}
                    maxWidth={7}
                    canvasProps={{
                        width: "300",
                        height: "300",
                    }}
                />
            </div>
            <div className={style.buttonContainer}>
                <div className={style.button} onClick={handleSendImage}>
                    <TbSend />
                    <div>Send</div>
                </div>
            </div>
        </>
    );
};

export default DrawingComponent;
