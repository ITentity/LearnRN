/**
 * Created by zhaozx on 2017/12/4.
 */

'use strict';

import PropTypes from 'prop-types';
// import { PropTypes } from 'react';
import { requireNativeComponent, View } from 'react-native';

var linearGardientButton = {
  name: 'MYImageView',
  propTypes: {
    ...View.propTypes,  // 包含默认的View的属性
    startColor: PropTypes.string,
    endColor: PropTypes.string,
    orentation: PropTypes.number,
  },
};

module.exports = requireNativeComponent('MYImageView', linearGardientButton);