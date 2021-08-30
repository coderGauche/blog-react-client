import React from "react";
import PropTypes from 'prop-types';
// import styles from "./style.less";
import {SvgStyle} from './style';

const SvgIcon = props => {
  const { iconClass, fill } = props;
  return (
    <SvgStyle>
      <i aria-hidden="true" className="anticon">
      <svg className="svg-class">
        <use xlinkHref={"#icon-" + iconClass} fill={fill} />
      </svg>
    </i>
    </SvgStyle>
  );
};

SvgIcon.propTypes = {
  // svg名字
  iconClass: PropTypes.string.isRequired,
  // 填充颜色
  fill: PropTypes.string
};

SvgIcon.defaultProps = {
  fill: "currentColor"
};

export default SvgIcon;
