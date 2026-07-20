import React from "react"

interface ButtonProps {
	stateProps: {
		gameRunning: boolean
		setGameRunning: React.Dispatch<React.SetStateAction<boolean>>
	}
}

export default function Button({ stateProps }: ButtonProps) {
	return (
		<div className="button-container">
			<button
				onClick={() => stateProps.setGameRunning(!stateProps.gameRunning)}
			>
				{stateProps.gameRunning ? "Pause" : "Play"}
			</button>
		</div>
	)
}
