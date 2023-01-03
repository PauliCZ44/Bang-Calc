import React from 'react'

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1))
		;[array[i], array[j]] = [array[j], array[i]]
	}
	return array
}
const TableHead = ({ rounds, players, setPlayers, checkIfRoundsOver }) => {
	function getShuffledRolesInRound(round) {
		const roles = []
		players.forEach((player) => {
			roles.push(player.roles[round])
		})
		return shuffle([...roles])
	}

	function addAnimationClassToAllRoles(round) {
		const trs = document.querySelectorAll('table tbody tr')
		console.log(trs)
		trs.forEach((tr) => {
			console.log(round)
			tr.querySelectorAll('td .draggable-role')[round].classList.add('shake')
		})
	}

	const ths = []
	const makeHeaders = (num) => {
		for (let currentRound = 0; currentRound < num; currentRound++) {
			ths.push(
				<th colSpan="3" key={`round${currentRound}`} className="text-center right-border-bold">
					{`Round ${parseInt(currentRound, 10) + 1}`}
					<button
						onClick={() => {
							console.log('randomize round', currentRound)
							const shuffledRoles = getShuffledRolesInRound(currentRound)
							const newPlayers = players.map((player, index) => {
								player.roles[currentRound] = shuffledRoles[index]
								return player
							})
							console.log({ old: players })
							console.log({ newPlayers })
							addAnimationClassToAllRoles(currentRound)
							setPlayers(newPlayers)
							checkIfRoundsOver()
						}}
						className="btn btn-outline-light  randomize-button"
					>
						🔄
					</button>
				</th>
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
