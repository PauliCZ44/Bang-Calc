/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import Form from 'react-bootstrap/Form'
import numeral from 'numeral'
import RIP from '../../assets/img/RIP.png'
import Duel from '../../assets/img/Duel.png'

const PlayerRow = ({
  player, rounds, roles, changeRole, changeName, makeDead, makeDuel,
}) => {
  const handleChangeOption = (e, id, round) => {
    // console.log('Option changed to:', e.target.value, 'in player ID ==', id, ' in round', round)
    changeRole(e.target.value, id, round)
  }

  const MakeDuelIcon = (i) => (
    <>
      <input type="checkbox" id={`IsDuel-P:${player.id}-R:${i}`} className="checkbox-for-dead" checked={player.duels[i]} onChange={(e) => makeDuel(e, player.id, i)} />
      <label htmlFor={`IsDuel-P:${player.id}-R:${i}`} style={{ marginBottom: '0' }}>
        <img src={Duel} alt="Is Duel?" className="Duel-img p-1" />
      </label>
    </>
  )

  const emojis = {
    Renegade: '🤠',
    Sheriff: '👮',
    Deputy: '⭐',
    Outlaw: '🧔',
  }
  // tds = cells for each player and each row
  const tds = []
  const makeRounds = (num) => {
    let duel
    for (let i = 0; i < num; i++) {
      if (player.roles[i] === 'Renegade') {
        duel = MakeDuelIcon(i)
      }

      tds.push(
        <React.Fragment key={`Round ${i}`}>
          <td className="select-role left-border-bold ">
            <Form.Control value={player.roles[i]} as="select" custom id={`P${player.id}-R${i}`} className="select-role-option" onChange={(e) => handleChangeOption(e, player.id, i)}>
              {/* Set options to select for each cell */}
              {roles.map((r, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <option key={`P:${player.id}-R:${i}-Rl:${r}${index}`} value={r}>
                  {emojis[roles[index]] + r}
                </option>
              ))}
            </Form.Control>
          </td>
          <td className="zero-padding-y min-width-120 text-center">

            <input type="checkbox" id={`IsDead-P:${player.id}-R:${i}`} className="checkbox-for-dead" checked={player.deaths[i]} onChange={(e) => makeDead(e, player.id, i)} />
            <label htmlFor={`IsDead-P:${player.id}-R:${i}`} style={{ marginBottom: '0' }}>
              <img src={RIP} alt="Is Duel?" className="RIP-img" />
            </label>
            {/* If the player is role, render a duel (that is an JSX containing the checkbox and img of duel card) */}
            {player.roles[i] === 'Renegade' ? duel : null}
          </td>
          <td className="right-border-bold text-align-r">
            {numeral(player.scores[i]).format('$0,0')}
          </td>
        </React.Fragment>,
      )
    }
  }
  makeRounds(rounds)

  return (
    <tr>
      <th className="table-dark th-input-dark" key={player.id}>
        <input type="text" value={player.name} className="form-control input-dark" onChange={(e) => changeName(e, player.id)} />
      </th>
      {tds}
      <th key={`${player.id}result`} className="text-align-r">{numeral(player.totalScore).format('$0,0')}</th>
    </tr>
  )
}
export default PlayerRow
