import {
	Context as AppContext,
	createContext
} from 'react';
import { IContextStateProps } from './IContextStateProps';

export const Context: AppContext<
	IContextStateProps | undefined
> = createContext<IContextStateProps | undefined>(undefined);

const ContextProvider = () => {
	return (
		<Context.Provider
			value={{}}
		>
			<div></div>
		</Context.Provider>
	);
};

export default ContextProvider;
