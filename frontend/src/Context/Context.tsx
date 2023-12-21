import {
	Context as AppContext,
	createContext,
} from 'react'
import { IContextStateProps } from './IContextStateProps'
import { fetchApi } from '../api/base'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import { Home } from '../pages'
import { deleteRoute, fourZeroFourRoute, homeRoute, insertRoute, replaceRoute, tablesRoute, updateRoute, wildCardRoute } from '../constants/strings'

export const Context: AppContext<
	IContextStateProps | null
> = createContext<IContextStateProps | null>(null)

const ContextProvider = () => {
	// (async () => {
	// 	const res = await fetchApi('/wildCard/test/1')
	// 	console.log(res)
	// })()

	return (
		<div className='app'>
			<Context.Provider
				value={{}}
			>
				<BrowserRouter>
					<Routes>
						<Route path={homeRoute} Component={Home}/>
						<Route path={wildCardRoute} Component={() => (<div style={{ padding: '1rem', color: 'black' }}>PLACEHOLDER</div>)}/>
						<Route path={tablesRoute} Component={() => (<div style={{ padding: '1rem', color: 'black' }}>PLACEHOLDER</div>)}/>
						<Route path={deleteRoute}Component={() => (<div style={{ padding: '1rem', color: 'black' }}>PLACEHOLDER</div>)}/>
						<Route path={updateRoute} Component={() => (<div style={{ padding: '1rem', color: 'black' }}>PLACEHOLDER</div>)}/>
						<Route path={insertRoute} Component={() => (<div style={{ padding: '1rem', color: 'black' }}>PLACEHOLDER</div>)}/>
						<Route path={replaceRoute} Component={() => (<div style={{ padding: '1rem', color: 'black' }}>PLACEHOLDER</div>)}/>
						<Route path={fourZeroFourRoute} Component={() => (<div style={{ padding: '1rem', color: 'black' }}>404</div>)}/>
					</Routes>
				</BrowserRouter>
			</Context.Provider>
		</div>
	)
}

export default ContextProvider
