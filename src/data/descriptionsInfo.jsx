const descriptionsInfo = {
    EMNIST: {
        hightLightWord: "Write",
        description:
            "Write letter (upper or lower case), send it to test the Neural Network.",
        color1: "#f88660",
        color2: "#ff4c88",
        style: {
            // backgroundImage: "linear-gradient(to right, #f88660, #ff4c88)",
            backgroundImage: "-webkit-linear-gradient(#f88660, #ff4c88)",
            backgroundSize: "18%",
            backgroundRepeat: "no-repeat",
            backgroundClip: "text",
            color: "transparent",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
        },
        iconStyle: {
            backgroundImage: "linear-gradient(to top right, #f88660, #ff4c88)",
            color: "#000000",
        },
    },

    FashionMNIST: {
        hightLightWord: "Write",
        description:
            "Write any number from 0 to 9 and send it to the Neural Network to tests it.",
        color1: "#ffe14c",
        color2: "#ff6d2e",
        style: {
            // backgroundImage: "linear-gradient(to right, #ffe14c, #ff6d2e)",
            backgroundImage: "-webkit-linear-gradient(#ffe14c, #ff6d2e)",
            backgroundSize: "23%",
            backgroundRepeat: "no-repeat",
            backgroundClip: "text",
            color: "transparent",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
        },
        iconStyle: {
            backgroundImage: "linear-gradient(to top right, #ffe14c, #ff6d2e)",
            color: "#000000",
        },
    },
};

export default descriptionsInfo;
