import React from 'react'

const TableHead = ({ rounds }) => {
  const ths = []
  const makeHeaders = (num) => {
    for (let i = 0; i < num; i++) {
      ths.push(
        <th colSpan="3" key={`round${i}`} className="text-center right-border-bold">
          {`Round ${parseInt(i, 10) + 1}`}
        </th>,
      )
    }
  }
  makeHeaders(rounds)
  return (
    <tr>
      <th className="right-border-bold">Name</th>
      {ths}
      <th>Score</th>
    </tr>
  )
}
export default TableHead

/*
cconst PlayerRow = ({ player, rounds }) => {
  const tds = []
  const makeRounds = (num) => {
    for (let i = 0; i < num; i++) {
      tds.push(
        <>
          <td>Role</td>
          <td>Death</td>
          <td>Points</td>
        </>,
      )
    }
  }
  makeRounds(rounds)
  return (
    <tr>
      <th className="table-dark" key={player.id}>{player.name}</th>
      {tds}
    </tr>
  )
}
export default PlayerRow


          {'Round'.concat(i)}

*/
