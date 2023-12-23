import { IBoxRouteProps } from '../models/interfaces';
import { deleteRoute, insertRoute, replaceRoute, tablesRoute, updateRoute, wildCardRoute } from './strings';

export const homeRoutes: IBoxRouteProps[] = [
	{
		title: 'WildCard',
		route: wildCardRoute
	},
	{
		title: 'Tables',
		route: tablesRoute
	},
	{
		title: 'Delete',
		route: deleteRoute
	},
	{
		title: 'Update',
		route: updateRoute
	},
	{
		title: 'Insert',
		route: insertRoute
	},
	{
		title: 'Replace',
		route: replaceRoute
	},
]