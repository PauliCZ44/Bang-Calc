import React, { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

const Togglable = (props) => {
	const [visible, setVisible] = useState(false)
	const [autoAnimate] = useAutoAnimate()

	const toggleVisibility = () => {
		setVisible(!visible)
	}

	const btnClass =
		'btn btn-md btn-light btn-block border border-dark wooden-bg-light western-font western-font-small shadow-grey'

	return (
		<>
			<button type="button" onClick={toggleVisibility} className={btnClass}>
				<span className="font-weight-bold">{!visible ? props.buttonLabel : 'Hide this help'}</span>
			</button>
			<div ref={autoAnimate}>{visible && props.children}</div>
		</>
	)
}

export default Togglable
