import PropTypes from "prop-types";
import style from "../style/Model.module.css";

export default function Model({ data, isClicked, setIsClicked, removeClick }) {
    Model.propTypes = {
        data: PropTypes.object,
        isClicked: PropTypes.bool,
        setIsClicked: PropTypes.func,
        removeClick: PropTypes.func,
    };

    const handleClick = () => {
        setIsClicked(true);
        removeClick(false);
    };

    return (
        <div className={style.button} onClick={handleClick}>
            {isClicked ? (
                <data.icon
                    className={style.icon}
                    style={{ color: data.color }}
                />
            ) : (
                <data.icon className={style.icon} />
            )}

            <div className={style.text}>{data.text}</div>
        </div>
    );
}
