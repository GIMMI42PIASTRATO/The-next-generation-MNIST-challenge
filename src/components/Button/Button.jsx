import PropsTypes from "prop-types";
import style from "./Button.module.css";

const Button = ({ children, type = "DEFAULT", callback }) => {
    const handleClick = async () => {
        await callback()
    }

    return (
        <div className={`${style.container} ${style[type.toLowerCase()]}`} onClick={handleClick}>
            <div>{children}</div>
        </div>
    )
}

Button.propTypes = {
    children: PropsTypes.string,
    type: PropsTypes.string,
    callback: PropsTypes.func
}

export default Button