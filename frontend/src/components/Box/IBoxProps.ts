import { ReactNode } from 'react';
import { boxType } from '../../models/types';

export interface IBoxProps {
	children: ReactNode
	type?: boxType
	styles?: Object
}