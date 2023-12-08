import { Request } from 'express'

export type IReqParams = Request & {
	params: {
		db: string,
		id: string,
	}
}