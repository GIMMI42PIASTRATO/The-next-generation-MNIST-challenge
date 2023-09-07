import toast from "react-hot-toast";

const test = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("resolved");
        }, 1000);
    });
};

export const notify = async () =>
    await toast.promise(test(), {
        loading: "Loading",
        success: "Image sent",
        error: "Error while sending",
    });

export const notify1 = async () =>
    await toast.promise(test(), {
        loading: "Loading",
        success: "Connected",
        error: "Connection failed",
    });
