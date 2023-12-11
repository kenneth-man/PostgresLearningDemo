import {
	Context as AppContext,
	createContext,
} from 'react'
import { IContextStateProps } from './IContextStateProps'
import { fetchApi } from '../api/base'

export const Context: AppContext<
	IContextStateProps | null
> = createContext<IContextStateProps | null>(null)

const ContextProvider = () => {
	(async () => {
		const res = await fetchApi('/wildCard/test/1')
		console.log(res)
	})()

	return (
		<Context.Provider
			value={{}}
		>
			<div></div>
		</Context.Provider>
	)
}

export default ContextProvider
