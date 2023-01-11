import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import _skrollr from './skrollr/skrollr'

function ScrollProvider({ children, initProps = {} }) {
  useEffect(function () {
    if (typeof window !== undefined || typeof window !== 'undefined') {
      _skrollr(window, document)

      window.skrollr.init(initProps)
    }
  }, [])

  return <div id='skrollr-body'>{children}</div>
}

ScrollProvider.propTypes = {
  initProps: PropTypes.object
}

export default ScrollProvider
