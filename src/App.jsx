import { useState } from "react";
import React from "react";
import Box from "./components/Box";
import Title from "./components/Title";
import style from "./style/App.module.css";
import { Toaster } from "react-hot-toast";

export const ThemeContext = React.createContext();

function App() {
    const [isClickedN1, setIsClickedN1] = useState(true);
    const [isClickedN2, setIsClickedN2] = useState(false);
    const [apiLink1, setApiLink1] = useState(null)
    const [apiLink2, setApiLink2] = useState(null)
    
    const themeStateContext = {
        isClickedN1,
        setIsClickedN1,
        isClickedN2,
        setIsClickedN2,
        apiLink1,
        setApiLink1,
        apiLink2,
        setApiLink2
    };

    return (
        <div className={style.appContainer}>
            <ThemeContext.Provider value={themeStateContext}>
                <Title />
                <Box />
            </ThemeContext.Provider>
            <Toaster position="bottom-center" reverseOrder={false} />
        </div>
    );
}

export default App;
