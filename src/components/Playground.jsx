import Description from "./Description";
import Input from "./Input";
import descriptionsInfo from "../data/descriptionsInfo";
import { useContext } from "react";
import { ThemeContext } from "../App";
import style from "../style/Playground.module.css";
import { HiPencilAlt, HiUpload } from "react-icons/hi";
import { useState } from "react";

export default function Playground() {
    const themeStateContext = useContext(ThemeContext);
    const [result, setResult] = useState("b")
    console.log("Result ⚪", result);
    
    return (
        <div className={style.playgroundContainer}>
            {themeStateContext.isClickedN1 ? (
                <Description
                    result={result}
                    description={descriptionsInfo.EMNIST.description}
                    activeStyle={descriptionsInfo.EMNIST}
                    icon={<HiPencilAlt style={{ fontSize: "2.5rem" }} />}
                >
                    {descriptionsInfo.EMNIST.hightLightWord}
                </Description>
            ) : (
                <Description
                    result={result}
                    description={descriptionsInfo.FashionMNIST.description}
                    activeStyle={descriptionsInfo.FashionMNIST}
                    icon={<HiUpload style={{ fontSize: "2.5rem" }} />}
                >
                    {descriptionsInfo.FashionMNIST.hightLightWord}
                </Description>
            )}
            <Input setResults={setResult}/>
        </div>
    );
}
