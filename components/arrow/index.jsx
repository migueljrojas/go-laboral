import PropTypes from "prop-types";
import "./styles.scss";

export default function ArrowIcon({color}) {
  return (
    <span className={`arrow-icon ${color && 'arrow-icon--' + color}`}>
      <span className="arrow-icon__body" />
      <span className="arrow-icon__tip" />
    </span>
  )
}

ArrowIcon.propTypes = {
  color: PropTypes.string
}