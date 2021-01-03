import React from 'react'
import {
  IconRemovePerson, IconAddPerson, IconMinus, IconPlus,
} from '../Icons/MyIcons'
import Notification from '../Notification'


/* eslint-disable jsx-a11y/label-has-associated-control */
const UISection = ({
  removePlayer, addPlayer, removeRound, addRound, rounds, players, message, messageIsError,
}) => {
  const iconSize = 28
  return (
    <div className="container-sm max-width-800">
      <div className="form-group" />
      <div className="text-center pt-3 pt-md-4">
        <label htmlFor="playerNumber" className="text-center h5">
          Number of players:
        </label>
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend" id="button-addon3">
          <button className="btn btn-outline-danger p-1  px-4-5-x" type="button" onClick={removePlayer}>
            <IconRemovePerson color="red" width={iconSize} height={iconSize} />
          </button>
        </div>
        <input
          value={players.length}
          className="form-control form-control-lg p-1 text-center"
          type="text"
          name="playerNumber"
          id="playerNumber"
          min="1"
          disabled
        />
        <div className="input-group-append" id="button-addon3">
          <button className="btn btn-outline-success p-1  px-4-5-x" type="button" onClick={addPlayer}>
            <IconAddPerson color="green" width={iconSize} height={iconSize} />
          </button>
        </div>
      </div>


      <div className="form-group text-center" />
      <div className="text-center">
        <label htmlFor="rounds" className="text-center h5 mx-auto">
          Number of rounds:
        </label>
      </div>
      <div className="input-group mb-3 pb-3 pb-md-4">
        <div className="input-group-prepend" id="button-addon3">
          <button className="btn btn-outline-danger p-1  px-4-5-x" type="button" onClick={removeRound}>
            <IconMinus color="red" width={iconSize} height={iconSize} />
          </button>
        </div>
        <input
          value={rounds}
          className="form-control form-control-lg p-1 text-size  text-center"
          type="text"
          name="rounds"
          id="rounds"
          min="1"
          disabled
        />
        <div className="input-group-append" id="button-addon3">
          <button className="btn btn-outline-success p-1 px-4-5-x" type="button" onClick={addRound}>
            <IconPlus color="green" width={iconSize} height={iconSize} />
          </button>
        </div>
      </div>
      <div className="wrapNotif d-flex align-items-end ">
        <Notification message={message} error={messageIsError} />
      </div>
    </div>
  )
}

export default UISection
