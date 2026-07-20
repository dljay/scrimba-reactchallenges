import { nanoid } from "nanoid"

export type Orientation = "left" | "right"

export interface EnemyPosition {
	top: number
	left: number
}

export interface EnemyData {
	id: string
	currentImage: string
	altImage: string
	orientation: Orientation
	position: EnemyPosition
}

const initialEnemyData: EnemyData[] = [
	{
		id: nanoid(),
		currentImage: "./images/enemy1A.png",
		altImage: "./images/enemy1B.png",
		orientation: "left",
		position: {
			top: 210,
			left: 157,
		},
	},
	{
		id: nanoid(),
		currentImage: "./images/enemy2A.png",
		altImage: "./images/enemy2B.png",
		orientation: "right",
		position: {
			top: 105,
			left: 187,
		},
	},
	{
		id: nanoid(),
		currentImage: "./images/enemy3A.png",
		altImage: "./images/enemy3B.png",
		orientation: "right",
		position: {
			top: 165,
			left: 165,
		},
	},
]

export default initialEnemyData
