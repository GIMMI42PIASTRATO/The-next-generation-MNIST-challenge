import toast from "react-hot-toast";
import axios from "axios";

// const test = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("resolved");
//         }, 1000);
//     });
// };

const connectToApi = (apiUrl) => {
    return new Promise((resolve, regect) => {
        axios.get(`${apiUrl}`)
            .then((response) => resolve(response))
            .catch((err) => regect(err))
    })
}

const submitImage = (isSucess) => {
    return new Promise((resolve, regect) => {
        isSucess ? resolve("sucess") : regect("error");
    })
}

export const notify = async (isSucess) =>
    await toast.promise(submitImage(isSucess), {
        loading: "Loading",
        success: "Image sent",
        error: "Error while sending",
    });

export const notify1 = async (apiUrl) =>
    await toast.promise(connectToApi(apiUrl), {
        loading: "Loading",
        success: "Connected",
        error: "Connection failed",
    });
