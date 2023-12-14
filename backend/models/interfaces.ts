import { z } from 'zod'
import { Direction, Sex } from './types'

export const IReqParams = z.object({
	params: z.object({
		table: z.string(),
		id: z.string(),
		column: z.string(),
		direction: Direction,
	})
})

export const ICustomer = z.object({
	id: z.string(),
	first_name: z.string(),
	last_name: z.string(),
	email: z.string(),
	ip_address: z.string(),
	sex: Sex,
	pet: z.string(),
	education: z.string(),
	phrase: z.string(),
	company: z.string(),
	car: z.string(),
	fav_colour: z.string(),
})