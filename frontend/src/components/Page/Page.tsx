import { IPageProps } from './IPageProps'
import './Page.css'

const Page = ({
	children,
	styles
}: IPageProps) => {
	return (
		<div
			className='page'
			style={styles}
		>
			{children}
		</div>
	)
}

export default Page