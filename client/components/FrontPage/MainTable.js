import React, { useRef } from 'react'
import PlayerRow from './PlayerRow'
import TableHead from './TableHead'

const MainTable = ({ players, rounds, roles, changeRole, changeName, makeDead, makeDuel }) => {
	const dragItem = useRef()
	const dragOverItem = useRef()
	const currentRound = useRef()
	const roundDrop = useRef()

	const switchRoles = (id1, id2, round) => {
		console.log(players)
		// changeRole()
	}

	const handleDragStart = (e, playerId, round) => {
		e.dataTransfer.effectAllowed = 'move'
		currentRound.current = round
		dragItem.current = playerId
		console.log('START', playerId, round)
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
		roundDrop.current = round
		dragOverItem.current = playerId
		console.log('enter', playerId, round)
	}

	const handleDrop = (e) => {
		if (currentRound.current !== roundDrop.current) {
			console.warn('You can only drop in the same round')
			e.preventDefault()
			return
		} else {
			console.log('DROP', dragItem.current, dragOverItem.current, currentRound.current)
			console.log(e.target)
			switchRoles(dragItem.current, dragOverItem.current, currentRound.current)
		}
	}

	const playerRows = players.map((player) => (
		<PlayerRow
			dragItem={dragItem}
			dragOverItem={dragOverItem}
			handleDragStart={handleDragStart}
			handleDragEnter={handleDragEnter}
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
