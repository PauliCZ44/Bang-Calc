import React, { useRef } from 'react'
import PlayerRow from './PlayerRow'
import TableHead from './TableHead'

const MainTable = ({
	players,
	rounds,
	roles,
	changeRole,
	changeName,
	makeDead,
	makeDuel,
	setPlayers,
	checkIfRoundsOver,
}) => {
	const dragElement = useRef()
	const draggedRole = useRef()
	const draggedPlayer = useRef()
	const dropOnPlayer = useRef()
	const currentRound = useRef()
	const roundDrop = useRef()

	const switchRoles = (id1, id2, round) => {
		const role1 = draggedRole.current
		const role2 = players.find((player) => player.id === id2).roles[round - 1]
		changeRole(role2, id1, round - 1)
		changeRole(role1, id2, round - 1)
	}

	const handleDragStart = (e, playerId, round) => {
		e.dataTransfer.effectAllowed = 'move'
		currentRound.current = round
		draggedPlayer.current = playerId
		draggedRole.current = players.find((player) => player.id === playerId).roles[round - 1]
	}

	const handleDragEnter = (e, playerId, round) => {
		if (currentRound.current !== round) {
			e.preventDefault()
			return
		}
		e.preventDefault()
		e.dataTransfer.effectAllowed = 'move'
		e.dataTransfer.dropEffect = 'move'
		e.target.style.border = '2px solid #353a40'
		dragElement.current = e.target
		roundDrop.current = round
		dropOnPlayer.current = playerId
	}

	const handleDragLeave = (e) => {
		e.preventDefault()
		e.target.style.border = '2px solid transparent'
	}

	const handleDrop = (e) => {
		if (currentRound.current !== roundDrop.current) {
			e.preventDefault()
			return
		} else {
			e.target.style.border = '2px solid transparent'
			e.target.classList.add('wobble-ver-right')
			dragElement.current.classList.add('wobble-ver-left')
			switchRoles(draggedPlayer.current, dropOnPlayer.current, currentRound.current)
		}
	}

	const playerRows = players.map((player) => (
		<PlayerRow
			dragItem={draggedPlayer}
			dragOverItem={dropOnPlayer}
			handleDragStart={handleDragStart}
			handleDragEnter={handleDragEnter}
			handleDragLeave={handleDragLeave}
			player={player}
			rounds={rounds}
			key={player.id}
			roles={roles}
			changeRole={changeRole}
			changeName={changeName}
			makeDead={makeDead}
			makeDuel={makeDuel}
			handleDrop={handleDrop}
		/>
	))

	return (
		<div className="container-xl mt-md-5 max-width-94p">
			<h3 className="text-center western-font-only">Result table</h3>
			<div className="table-responsive">
				<table className="table table-bordered align-middle">
					<thead className="thead-light">
						<TableHead {...{ players, rounds, setPlayers, checkIfRoundsOver }} />
					</thead>
					<tbody>{playerRows}</tbody>
				</table>
			</div>
		</div>
	)
}

export default MainTable
