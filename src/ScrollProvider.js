import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import skrollr from 'skrollr'

function ScrollProvider({ children, initProps = {} }) {
  useEffect(function () {
    if (typeof window !== undefined || typeof window !== 'undefined') {
      skrollr.init(initProps)
    }
  }, [])

  return <div id='skrollr-body'>{children}</div>
}

ScrollProvider.propTypes = {
  initProps: PropTypes.object
}

export default ScrollProvider
