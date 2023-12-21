import './Box.css'
import { IBoxProps } from './IBoxProps'

const Box = ({
	children,
	type = 'flex',
	styles
}: IBoxProps) => {
	return (
		<div
			className={type}
			style={styles}
		>
			{children}
		</div>
	)
}

export default Box