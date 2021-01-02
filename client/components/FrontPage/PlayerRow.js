/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import Form from 'react-bootstrap/Form'
import RIP from '../../assets/img/RIP.png'
import Duel from '../../assets/img/Duel.png'

const PlayerRow = ({
  player, rounds, roles, changeRole, changeName, makeDead, makeDuel,
}) => {
  // const [availableRoles, setAvailableRoles] = useState([...roles])
  // Params e - event, id = player.id, round = in which round is change made (rounds zero indexed)
  const handleChangeOption = (e, id, round) => {
    // console.log('Option changed to:', e.target.value, 'in player ID ==', id, ' in round', round)
    changeRole(e.target.value, id, round)
    // TODO change aray of roles in player after change in input
  }
  // tds = cells for each player and each row
  const MakeDuelIcon = (i) => (
    <>
      <input type="checkbox" id={`IsDuel-P:${player.id}-R:${i}`} className="checkbox-for-dead" onChange={(e) => makeDuel(e, player.id, i)} />
      <label htmlFor={`IsDuel-P:${player.id}-R:${i}`} style={{ marginBottom: '0' }}>
        <img src={Duel} alt="Is Dead?" className="Duel-img p-1" />
      </label>
    </>
  )
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
                <option key={`P:${player.id}-R:${i}-Rl:${r}${index}`} value={roles[index]}>{r}</option>
              ))}
            </Form.Control>
          </td>
          <td className="zero-padding-y min-width-120 text-center">

            <input type="checkbox" id={`IsDead-P:${player.id}-R:${i}`} className="checkbox-for-dead" onChange={(e) => makeDead(e, player.id, i)} />
            <label htmlFor={`IsDead-P:${player.id}-R:${i}`} style={{ marginBottom: '0' }}>
              <img src={RIP} alt="Is Duel?" className="RIP-img" />
            </label>
            {duel}
          </td>
          <td className="right-border-bold">
            {player.scores[i]}
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
      <th key={`${player.id}result`}>{player.totalScore}</th>
    </tr>
  )
}
export default PlayerRow
