import React from 'react'
import PropTypes from 'prop-types'

function Scene({ data = {}, children, className = '', style = {} }) {
  return (
    <div {...data} className={className} style={style}>
      {children}
    </div>
  )
}

Scene.propTypes = {
  data: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object
}

export default Scene
