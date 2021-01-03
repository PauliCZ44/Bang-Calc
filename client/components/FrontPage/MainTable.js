import React from 'react'
import PlayerRow from './PlayerRow'
import TableHead from './TableHead'


const MainTable = ({
  players, rounds, roles, changeRole, changeName, makeDead, makeDuel,
}) => {
  const playerRows = players.map((player) => (
    <PlayerRow player={player} rounds={rounds} key={player.id} roles={roles} changeRole={changeRole} changeName={changeName} makeDead={makeDead} makeDuel={makeDuel} />
  ))

  return (
    <div className="container-xl mt-md-5 max-width-94p">
      <h5 className="text-center western-font-only">Result table</h5>
      <div className="table-responsive">
        <table className="table table-bordered align-middle">
          <thead className="thead-light">
            <TableHead rounds={rounds} />
          </thead>
          <tbody>
            {playerRows}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MainTable
