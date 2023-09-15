import { notify } from "../data/toastNotify";
import axios from "axios";

export const handleSendImage = async (canvas, themeStateContext) => {
    const { apiLink1, apiLink2, isClikedN1 } = themeStateContext
    const imageUrl = canvas.current.toDataURL("PNG");
    console.log("⚪", imageUrl);

    try {
        const buffer = {
            buffer: imageUrl
        }

        console.log("↩️", themeStateContext)

        console.log("⚾", apiLink1);
        const baseUrl = isClikedN1 ? apiLink1 : apiLink2
        console.log(baseUrl)

        let reponse
        if (isClikedN1) {
            reponse = await axios.post(`${apiLink1}api/predict`, buffer);
        } else {
            reponse = await axios.post(`${apiLink1}api/predict`, buffer);
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