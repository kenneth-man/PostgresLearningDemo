import { Response } from 'express';

export const badRequestResponse = (res: Response, message?: string) => res
	.status(400)
	.json({ error: message || 'Bad request' });

export const unauthorizedResponse = (res: Response, message?: string) => res
	.status(401)
	.json({ error: message || 'Unauthorized' });

export const forbiddenResponse = (res: Response, message?: string) => res
	.status(403)
	.json({ error: message || 'Forbidden request' });

export const notFoundResponse = (res: Response, message?: string) => res
	.status(404)
	.json({ error: message || 'Not found' });