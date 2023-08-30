import PropTypes from "prop-types";

export default function SelectModel({ modelName }) {
    SelectModel.propTypes = {
        modelName: PropTypes.string,
    };

    return <div>{modelName}</div>;
}
