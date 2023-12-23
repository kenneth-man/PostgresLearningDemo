import { IPageProps } from './IPageProps'
import './Page.css'

const Page = ({
	children,
	className,
	styles
}: IPageProps) => {
	return (
		<div
			className={`page ${className}`}
			style={styles}
		>
			{children}
		</div>
	)
}

export default Page