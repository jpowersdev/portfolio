// Adapted from https://github.com/bebraw/remark-react-lowlight
// Changed to autodetect language from list of languages I import

import React from 'react';
import Lowlight from 'react-lowlight';
import PropTypes from 'prop-types';

import js from 'highlight.js/lib/languages/javascript'
import python from 'highlight.js/lib/languages/python'

export default () => {
  const Code = ({ className = '', children }) => {
    const value = children[0] || '';
    const props = { value, inline: true };

    Lowlight.registerLanguage('js', js)
    Lowlight.registerLanguage('python', python)

    return <Lowlight {...props} />;
  };
  Code.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
  };

  return Code;
};
