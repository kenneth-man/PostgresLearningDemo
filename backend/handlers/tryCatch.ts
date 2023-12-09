import { Response } from 'express'

export const tryCatch = async (callback: Function, res: Response) => {
	try {
		await callback()
	} catch(e: any) {
		return res.status(400).json({ error: e.message || 'Something went wrong' })
	}
}