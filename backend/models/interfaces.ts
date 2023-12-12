export interface IReqParams {
	params: {
		table: string
		id: string
		column: string
		direction: 'ASC' | 'DESC'
	}
}