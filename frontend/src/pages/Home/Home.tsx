import { Link } from 'react-router-dom'
import { Box, Page } from '../../components'
import { homeRoutes } from '../../constants/data'
import './Home.css'

const Home = () => {
	return (
		<Page
			className='space-y-10'
		>
			<h1>Home</h1>

			<Box
				type='grid'
				cols={2}
				rows={3}
				justifyItems='center'
			>
				{
					homeRoutes.map((route, index) => (
						<Link
							key={index}
							to={route.route}
							className='link'
						>
							{route.title}
						</Link>
					))
				}		
			</Box>
		</Page>
	)
}

export default Home