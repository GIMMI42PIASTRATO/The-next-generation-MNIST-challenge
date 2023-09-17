import Description from "./Description";
import Input from "./Input";
import descriptionsInfo from "../data/descriptionsInfo";
import { useContext } from "react";
import { ThemeContext } from "../App";
import style from "../style/Playground.module.css";
import { HiPencilAlt } from "react-icons/hi";
import { TbBoxMultiple2 } from "react-icons/tb";
import { useState } from "react";

export default function Playground() {
    const themeStateContext = useContext(ThemeContext);
    const [EMNISTResult, setEMNISTResult] = useState("b")
    const [MNISTResult, setMNISTResult] = useState("1")
    console.log("Result ⚪", EMNISTResult);
    
    return (
        <div className={style.playgroundContainer}>
            {themeStateContext.isClickedN1 ? (
                <Description
                    result={EMNISTResult}
                    description={descriptionsInfo.EMNIST.description}
                    activeStyle={descriptionsInfo.EMNIST}
                    icon={<HiPencilAlt style={{ fontSize: "2.5rem" }} />}
                >
                    {descriptionsInfo.EMNIST.hightLightWord}
                </Description>
            ) : (
                <Description
                    result={MNISTResult}
                    description={descriptionsInfo.FashionMNIST.description}
                    activeStyle={descriptionsInfo.FashionMNIST}
                    icon={<TbBoxMultiple2 style={{ fontSize: "2.5rem" }} />}
                >
                    {descriptionsInfo.FashionMNIST.hightLightWord}
                </Description>
            )}
            <Input setEMNISTResult={setEMNISTResult} setMNISTResult={setMNISTResult}/>
        </div>
    );
}
