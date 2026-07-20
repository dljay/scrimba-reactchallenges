import React from "react"
import type { Orientation, EnemyPosition } from "../data/initialEnemyData"

interface EnemyProps {
	currentImage: string
	position: EnemyPosition
	orientation: Orientation
}

export default function Enemy(props: EnemyProps) {
	return (
		<div
			className="enemy"
			style={{
				top: `${props.position.top}px`,
				left: `${props.position.left}px`,
				transform: props.orientation === "left" ? "scaleX(-1)" : undefined,
			}}
		>
			<img src={props.currentImage} />
		</div>
	)
}
