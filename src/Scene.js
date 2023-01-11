import React from 'react'
import PropTypes from 'prop-types'

function Scene({ data = {}, children }) {
  return <div {...data}>{children}</div>
}

Scene.propTypes = {
  data: PropTypes.object
}

export default Scene
