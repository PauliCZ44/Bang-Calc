import React, { useRef } from 'react'
import numeral from 'numeral'
import RIP from '../../assets/img/RIP.png'
import Duel from '../../assets/img/Duel.png'
import { useAutoAnimate } from '@formkit/auto-animate/react'

export const emojis = {
	Renegade: '🤠',
	Sheriff: '👮',
	Deputy: '⭐',
	Outlaw: '🧔',
}

const PlayerRow = ({
	player,
	rounds,
	changeRole,
	changeName,
	makeDead,
	makeDuel,
	handleDragStart,
	handleDragEnter,
	handleDragLeave,
	handleDrop,
}) => {
	const [draggingRoundIndex, setDraggingRoundIndex] = React.useState(-1)
	const [parent] = useAutoAnimate(/* optional config */)

	const MakeDuelIcon = (i) => (
		<>
			<input
				type="checkbox"
				id={`IsDuel-P:${player.id}-R:${i}`}
				className="checkbox-for-dead"
				checked={player.duels[i]}
				onChange={(e) => makeDuel(e, player.id, i)}
			/>
			<label htmlFor={`IsDuel-P:${player.id}-R:${i}`} style={{ marginBottom: '0' }}>
				<img src={Duel} alt="Is Duel?" className="Duel-img p-1" />
			</label>
		</>
	)

	// tds = cells for each player and each row
	const tds = []
	const makeRounds = (num) => {
		let duel
		for (let i = 0; i < num; i++) {
			if (player.roles[i] === 'Renegade') {
				duel = MakeDuelIcon(i)
			}
			const currentRound = i + 1
			tds.push(
				<React.Fragment key={`Round ${i}`}>
					<td className="select-role left-border-bold ">
						<div
							className="draggable-role"
							style={{ opacity: draggingRoundIndex === currentRound ? 0.25 : 1 }}
							draggable
							onDragStart={(e) => {
								handleDragStart(e, player.id, currentRound)
								setDraggingRoundIndex(currentRound)
							}}
							onDragEnd={(e) => {
								e.target.style.border = '2px solid transparent'
								setDraggingRoundIndex(-1)
								handleDrop(e)
							}}
							onDragOver={(e) => {
								e.preventDefault()
								e.dataTransfer.dropEffect = 'move'
							}}
							onDragLeave={handleDragLeave}
							onDragEnter={(e) => handleDragEnter(e, player.id, currentRound)}
							onMouseLeave={(e) => (e.target.style.border = '2px solid transparent')}
						>
							{player.roles[i] + ' ' + emojis[player.roles[i]]}
						</div>
					</td>
					<td className="zero-padding-y min-width-120 text-center">
						<input
							type="checkbox"
							id={`IsDead-P:${player.id}-R:${i}`}
							className="checkbox-for-dead"
							checked={player.deaths[i]}
							onChange={(e) => makeDead(e, player.id, i)}
						/>
						<label htmlFor={`IsDead-P:${player.id}-R:${i}`} style={{ marginBottom: '0' }}>
							<img src={RIP} alt="Is Duel?" className="RIP-img" />
						</label>
						{/* If the player is role, render a duel (that is an JSX containing the checkbox and img of duel card) */}
						{player.roles[i] === 'Renegade' ? duel : null}
					</td>
					<td className="right-border-bold text-align-r">
						{numeral(player.scores[i]).format('$0,0')}
					</td>
				</React.Fragment>
			)
		}
	}
	makeRounds(rounds)

	return (
		<tr ref={parent}>
			<th className="table-dark th-input-dark" key={player.id}>
				<input
					type="text"
					value={player.name}
					className="form-control input-dark"
					onChange={(e) => changeName(e, player.id)}
				/>
			</th>
			{tds}
			<th key={`${player.id}result`} className="text-align-r">
				{numeral(player.totalScore).format('$0,0')}
			</th>
		</tr>
	)
}
export default PlayerRow
