import PropsTypes from "prop-types";
import style from "../style/Description.module.css";

export default function Description({
    description,
    children,
    activeStyle,
    icon,
}) {
    Description.propTypes = {
        description: PropsTypes.string,
        children: PropsTypes.string,
        activeStyle: PropsTypes.object,
        icon: PropsTypes.object,
    };

    return (
        <div className={style.container}>
            <div className={style.iconContainer} style={activeStyle.iconStyle}>
                {icon}
            </div>
            <div className={style.highlight} style={activeStyle.style}>
                {children}
            </div>
            <div className={style.description}>{description}</div>
        </div>
    );
}
