import React from "react"

interface MessageProps {
	status: boolean | undefined
}

export default function Message({ status }: MessageProps) {
	let checkType: "neutral" | "correct" | "incorrect"
	let message: string

	if (status === undefined) {
		checkType = "neutral"
		message = "Enter verification code to continue."
	} else if (status) {
		checkType = "correct"
		message = "Verified!"
	} else {
		checkType = "incorrect"
		message = "Incorrect code."
	}

	return (
		<div className="message-container">
			<p className="message">{message}</p>
			<img src={`./images/${checkType}-check.svg`} className="check" />
		</div>
	)
}
