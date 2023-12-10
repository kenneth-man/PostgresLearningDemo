import { Response } from 'express'

export const tryCatch = async (callback: Function, res: Response) => {
	try {
		await callback()
	} catch(e: any) {
		const postgresErrorDocs = 'https://www.postgresql.org/docs/12/errcodes-appendix.html'
		const {
			severity = 'ERROR',
			message = 'Something went wrong',
			code = 'N/A'
		} = e

		return res.status(500).json({
			severity: severity,
			message,
			code,
			postgresErrorDocs
		})
	}
}