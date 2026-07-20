

type ColorCardProps = {
    listNumber: number
    hexcode: string
}

export default function ColorCard({listNumber, hexcode}: ColorCardProps) {
		return (
			<div className="color-card" style={{ background: hexcode }}>
				<p>
					<span>{listNumber}</span> {hexcode}
				</p>
			</div>
		)
	}