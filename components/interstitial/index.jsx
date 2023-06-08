import PropTypes from "prop-types";
import { childrenPropType } from "../../renderer/PropTypeValues";
import "./styles.scss";

export default function Interstitial({
  background,
  children
}) {
  return (
    <div className={`interstitial ${background && 'interstitial--' + background}`}>
      <div className="interstitial__content">
        {children}
      </div>
    </div>
  )
}

Interstitial.propTypes = {
  background: PropTypes.string,
  children: childrenPropType
}