import PropsTypes from "prop-types";
import { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import style from "../style/DrawingComponent.module.css";
import { useEffect } from "react";
import { handleSendImage } from "./handleSendImage";
import { useContext } from "react";
import { ThemeContext } from "../App";
import Button from "./Button/Button"

const DrawingComponent = ({ setEMNISTResult, setMNISTResult }) => {
    const canvas = useRef(null);
    const themeStateContext = useContext(ThemeContext);
    const  { isClickedN1, isClickedN2 } = themeStateContext
    
    useEffect(() => {
        if (canvas.current) {
            canvas.current._canvas.style.borderRadius = "0.5rem";
        }
    }, []);
    
    useEffect(() => {
        canvas.current.clear();
    }, [isClickedN1, isClickedN2])

    const handleClick = async () => {
        const predictedData = await handleSendImage(canvas, themeStateContext)
        console.log("↩️", predictedData);

        if (isClickedN1) {
            setEMNISTResult(predictedData)
        } else if (isClickedN2) {
            setMNISTResult(predictedData)
        }
    }

    const deleteCanvas = () => {
        canvas.current.clear();
    }   
    
    return (
        <>
            <div className={style.canvasContainer}>
                <SignatureCanvas
                    ref={(ref) => (canvas.current = ref)}
                    penColor="white"
                    minWidth={10}
                    maxWidth={15}
                    canvasProps={{
                        width: "300",
                        height: "300",
                        className: style.signatureCanvas
                    }}
                />
            </div>
            <div className={style.buttonContainer}>
                <Button type="submit" callback={handleClick}>Submit</Button>
                <Button type="remove" callback={deleteCanvas}>Delete</Button>
            </div>
        </>
    );
};

DrawingComponent.propTypes = {
    setMNISTResult: PropsTypes.func,
    setEMNISTResult: PropsTypes.func
}

export default DrawingComponent;
