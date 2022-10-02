import PropTypes from "prop-types";
import shortid from "shortid";
export const Buttons = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((option) => (
        <button
          key={shortid.generate()}
          name={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </>
  );
};
Buttons.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
