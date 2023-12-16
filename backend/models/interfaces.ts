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
	id: z.string().nullable(),
	first_name: z.string().nullable(),
	last_name: z.string().nullable(),
	email: z.string().nullable(),
	ip_address: z.string().nullable(),
	sex: Sex.nullable(),
	pet: z.string().nullable(),
	education: z.string().nullable(),
	phrase: z.string().nullable(),
	company: z.string().nullable(),
	car: z.string().nullable(),
	fav_colour: z.string().nullable(),
})

export const ITest = z.object({
	id: z.string().nullable(),
	first_name: z.string().nullable(),
	last_name: z.string().nullable(),
})