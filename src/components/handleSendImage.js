import { notify } from "../data/toastNotify";
import axios from "axios";

export const handleSendImage = async (canvas, themeStateContext) => {
    const { apiLink1, apiLink2, isClickedN1, isClickedN2 } = themeStateContext
    const imageUrl = canvas.current.toDataURL("PNG");
    console.log("⚪", imageUrl);

    try {
        const buffer = {
            buffer: imageUrl
        }

        console.log("↩️", themeStateContext)

        console.log("⚾", apiLink1);
        const baseUrl = isClickedN1 ? apiLink1 : apiLink2
        console.log(baseUrl)

        console.log("💚", isClickedN1);

        let reponse
        if (isClickedN1) {
            console.log("🟨")
            reponse = await axios.post(`${apiLink1}api/predict`, buffer);
        } else if (isClickedN2) {
            console.log("🟩")
            reponse = await axios.post(`${apiLink2}api/predict`, buffer);
            reponse.data.predicted.toString()
        }
        console.log("🐦", reponse)

        const { data } = reponse;
        const predictedData = data.predicted
        console.log("🔢", predictedData);

        await notify(true);

        return predictedData
    } catch (err) {
        console.log(err);
        await notify(false);
    }
}