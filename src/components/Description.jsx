import PropsTypes from "prop-types";
import style from "../style/Description.module.css";
import Results from "./Results";
export default function Description({
    result,
    description,
    children,
    activeStyle,
    icon,
}) {
    Description.propTypes = {
        result: PropsTypes.string,
        description: PropsTypes.string,
        children: PropsTypes.string,
        activeStyle: PropsTypes.object,
        icon: PropsTypes.object,
    };

    return (
        <div className={style.container}>
            <div>
                <div
                    className={style.iconContainer}
                    style={activeStyle.iconStyle}
                >
                    {icon}
                </div>
                <div className={style.highlight} style={activeStyle.style}>
                    {children}
                </div>
                <div className={style.description}>{description}</div>
            </div>

            <Results result={result}/>
        </div>
    );
}
