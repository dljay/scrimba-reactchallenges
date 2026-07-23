import React from "react"

interface ButtonProps {
	type: "forward" | "backward"
	clickHandler: () => void
}

export default function Button(props: ButtonProps) {
	const arrow = (
		<div className="arrow-wrapper">
			<div className={`arrow ${props.type === "backward" && "reverse"} `}></div>
		</div>
	)

	return (
		<div className="button-container">
			<button onClick={props.clickHandler}>
				{props.type === "backward" && arrow}
				{props.type === "forward" ? "Next" : "Back"}
				{props.type === "forward" && arrow}
			</button>
		</div>
	)
}
