import React from 'react'

const Notification = ({ message, error, screen }) => {
  const succesStyle = {
    color: 'green',
    borderLeft: 'solid 3px #008000bb',
  }
  const errorStyle = {
    color: 'red',
    borderLeft: 'solid 3px rgb(255, 0, 0)',
  }


  let classStyle
  if (screen === 'login') {
    classStyle = 'login-notif'
  } else {
    classStyle = 'add-notif'
  }


  if (message === null || message === '') {
    return (
      <div className="no-anim" style={error ? errorStyle : succesStyle} id="messageComp" />
    )
  }
  return (
    <div className={classStyle} style={error ? errorStyle : succesStyle} id="messageComp">
      {message}
    </div>
  )
}

export default Notification
