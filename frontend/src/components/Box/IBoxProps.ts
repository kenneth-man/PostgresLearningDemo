import { ReactNode } from 'react';
import { boxType, alignItems, justifyContent, justifyItems, alignContent } from '../../models/types';

interface baseBox {
	children: ReactNode
	justifyContent?: justifyContent
	alignItems?: alignItems
	styles?: Object
}

interface flexBox {
	type: Extract<boxType, 'flex'>
}

interface gridBox {
	type: Extract<boxType, 'grid'>
	cols: number
	rows: number
	justifyItems?: justifyItems
	alignContent?: alignContent
}

export type boxProps = baseBox & (flexBox | gridBox)