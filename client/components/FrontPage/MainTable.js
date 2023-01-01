import React, { useRef } from 'react'
import PlayerRow from './PlayerRow'
import TableHead from './TableHead'

const MainTable = ({ players, rounds, roles, changeRole, changeName, makeDead, makeDuel }) => {
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
			console.warn('You can only drop in the same round')
			e.preventDefault()
			return
		}
		e.preventDefault()
		e.dataTransfer.effectAllowed = 'move'
		e.dataTransfer.dropEffect = 'move'
		e.target.style.border = '2px solid #353a40'
		roundDrop.current = round
		dropOnPlayer.current = playerId
	}

	const handleDragLeave = (e) => {
		e.preventDefault()
		console.log('DRag leave')
		e.target.style.border = '2px solid transparent'
	}

	const handleDrop = (e) => {
		console.log('drop')
		if (currentRound.current !== roundDrop.current) {
			console.warn('You can only drop in the same round')
			e.preventDefault()
			return
		} else {
			console.log(e)
			e.target.style.border = '2px solid transparent'
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
						<TableHead rounds={rounds} />
					</thead>
					<tbody>{playerRows}</tbody>
				</table>
			</div>
		</div>
	)
}

export default MainTable
