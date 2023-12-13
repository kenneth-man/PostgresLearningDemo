export const convertQueryParams = (queryParams: Object) => {
	if (Object.keys(queryParams).length === 0) return ''

	const entries = Object.entries(queryParams).map(([key, value]) => `${key}='${value}'`)

	return `WHERE ${entries.join(' AND ')}`
}