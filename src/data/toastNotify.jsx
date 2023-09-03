import toast from "react-hot-toast";

const test = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("resolved");
        }, 1000);
    });
};

const notify = async () =>
    await toast.promise(test(), {
        loading: "Loading",
        success: "Image sent",
        error: "Error while sending",
    });

export default notify;
