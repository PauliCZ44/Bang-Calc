/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import Togglable from '../Togglable'
import RIP from '../../assets/img/RIP.png'
import Duel from '../../assets/img/Duel.png'

const Intro = () => (
	<section className="container-sm max-width-800">
		<p className="py-3 py-md-5 text-align-justify">
			This is a <strong>calculator</strong> for score in <strong>board game BANG!. </strong>
			Accordign do wikipedia
			<span className="font-italic">
				{' '}
				&quot;<strong>Bang! </strong>is a Wild West-themed social deduction card game designed by
				Emiliano Sciarra and released by Italian publisher DV Giochi in 2002.&quot;
			</span>
			The game is known worldwide as <strong>Bang!</strong>, except in France, where it was known as
			Wanted! until September 2009. This scoring system is based on this{' '}
			<a href="http://www.bang.cz/en/rules-and-faq/special-rules/64-official-tournament-scoring-system.html">
				Official tournament scoring system.{' '}
			</a>
			At the end of each game, each player gains an amount of points based on that table. It is not
			important who eliminated a specific player.
		</p>
		<article className="my-3 text-center">
			<Togglable buttonLabel="How does it work?">
				<p className="text-align-center text-center mt-2">
					<span className="font-weight-bold">First, </span>
					choose number of players with buttons. Number of players should not be chandged between
					games, as table might be not precise.
				</p>
				<p>
					<span className="font-weight-bold">Second,</span> choose number of rounds you want to
					play. Or you can add more rounds whenewer you want. If you remove round, wath out for data
					loss.
				</p>
				<p>
					<span className="font-weight-bold">Third,</span> choose roles for your players ba dragging
					the roles. Also, you can randomize the roles (Although assingning of the roles shouldnt be
					done by any of the players!). You can also change names right in the tables.
				</p>
				<p>
					<span className="font-weight-bold">Lastly,</span> select players that died in the
					particular round by toggling the RIP icon
					<img src={RIP} alt="Is RIP?" className="intro-icon" /> in the table. After this, score
					should be computed and displayed in table and also in second table for total scores. You
					can also compute scores manualy with special button.
				</p>
				<p>
					<span className="font-weight-bold">PS: </span>there is a special button
					<img src={Duel} alt="Is duel?" className="intro-icon" />
					that indicates if the Renegade made it to the duel with Sherrif. In that case toggle that
					button and Renegade will gain additional points, according to rules.
				</p>
			</Togglable>
		</article>
	</section>
)

export default Intro
