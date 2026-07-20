import React from "react"
import type { EnemyData, Orientation } from "../data/initialEnemyData"

export default function runGame(
	gameRunning: boolean,
	setEnemiesData: React.Dispatch<React.SetStateAction<EnemyData[]>>
) {
	React.useEffect(() => {
		let interval: ReturnType<typeof setInterval> | undefined
		if (gameRunning) {
			interval = setInterval(() => {
				setEnemiesData((prevPositions) => {
					return prevPositions.map((enemy) => {
						let nextOrientation: Orientation = enemy.orientation
						let nextPosition = enemy.position.left
						let nextCurrentImage = enemy.currentImage
						let nextAltImage = enemy.altImage
						let leftBoundary = enemy.position.top === 165 ? 37 : 112
						let rightBoundary = enemy.position.top === 165 ? 292 : 202

						if (
							enemy.position.left > leftBoundary &&
							enemy.orientation === "left"
						) {
							nextOrientation = "left"
							nextPosition = enemy.position.left - 1
						} else if (
							enemy.position.left === leftBoundary &&
							enemy.orientation === "left"
						) {
							nextOrientation = "right"
							nextPosition = enemy.position.left - 1
						} else if (
							enemy.position.left < rightBoundary &&
							enemy.orientation === "right"
						) {
							nextOrientation = "right"
							nextPosition = enemy.position.left + 1
						} else if (
							enemy.position.left === rightBoundary &&
							enemy.orientation === "right"
						) {
							nextOrientation = "left"
							nextPosition = enemy.position.left - 1
						}

						if (enemy.position.left % 10 === 0) {
							nextCurrentImage = enemy.altImage
							nextAltImage = enemy.currentImage
						}

						return {
							...enemy,
							orientation: nextOrientation,
							currentImage: nextCurrentImage,
							altImage: nextAltImage,
							position: { ...enemy.position, left: nextPosition },
						}
					})
				})
			}, 20)
		}
		return () => clearInterval(interval)
	}, [gameRunning])
}
