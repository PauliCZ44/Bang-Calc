import React, { useState } from 'react'

const Togglable = (props) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }


  const toggleVisibility = () => {
    setVisible(!visible)
  }

  return (
    <div>
      <div style={hideWhenVisible}>
        <button
          type="button"
          style={{
            boxShadow: '2px 2px 5px grey',
          }}
          onClick={toggleVisibility}
          className="btn btn-md btn-light btn-block border border-dark wooden-bg-light western-font western-font-small"
        >
          <span className="font-weight-bold">
            {props.buttonLabel}
          </span>
        </button>
      </div>
      <div style={showWhenVisible}>
        <button
          type="button"
          onClick={toggleVisibility}
          className="btn btn-md btn-light btn-block border border-dark wooden-bg-light western-font western-font-small shadow-grey"
        >
          <span className="font-weight-bold">Hide this help</span>
        </button>
        {props.children}
      </div>
    </div>
  )
}

export default Togglable
