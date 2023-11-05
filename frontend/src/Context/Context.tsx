import {
	Context as AppContext,
	createContext,
	useEffect,
	useState
} from 'react'
import { Client } from 'pg'
import { IContextStateProps } from './IContextStateProps'

export const Context: AppContext<
	IContextStateProps | undefined
> = createContext<IContextStateProps | undefined>(undefined)

const ContextProvider = () => {
	// const [client] = useState<Client>(
	// 	new Client({
	// 		host: __PGHOST__,
	// 		port: Number(__PGPORT__),
	// 		database: __PGDATABASE__,
	// 		user: __PGUSER__,
	// 		password: __PGPASSWORD__,
	// 	})
	// )

	// useEffect(() => {
	// 	(async () => {
	// 		try {
	// 			await client.connect()
	// 			console.log('client connected successfully')
	// 		} catch (error: any) {
	// 			console.error('client failed to connect: ', error)
	// 			throw new Error(error.message)
	// 		}
	// 	})()
	// }, [])

	return (
		<Context.Provider
			value={{}}
		>
			<div></div>
		</Context.Provider>
	)
}

export default ContextProvider
