import Description from "./Description";
import descriptionsInfo from "../data/descriptionsInfo";
import { useContext } from "react";
import { ThemeContext } from "../App";
import style from "../style/Playground.module.css";
import { HiPencilAlt, HiUpload } from "react-icons/hi";

export default function Playground() {
    const themeStateContext = useContext(ThemeContext);

    return (
        <div className={style.playgroundContainer}>
            {themeStateContext.isClickedN1 ? (
                <Description
                    description={descriptionsInfo.EMNIST.description}
                    activeStyle={descriptionsInfo.EMNIST}
                    icon={<HiPencilAlt style={{ fontSize: "2.5rem" }} />}
                >
                    {descriptionsInfo.EMNIST.hightLightWord}
                </Description>
            ) : (
                <Description
                    description={descriptionsInfo.FashionMNIST.description}
                    activeStyle={descriptionsInfo.FashionMNIST}
                    icon={<HiUpload style={{ fontSize: "2.5rem" }} />}
                >
                    {descriptionsInfo.FashionMNIST.hightLightWord}
                </Description>
            )}
        </div>
    );
}
