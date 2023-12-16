import { Request } from 'express'
import { z } from 'zod'
import { IReqParams } from './interfaces'

export type ReqParamsSchema = z.infer<typeof IReqParams>
export type GetByIdReq = Request<Pick<ReqParamsSchema['params'], 'table' | 'id'>>
export type GetOrderedByReq = Request<Pick<ReqParamsSchema['params'], 'table' | 'column' | 'direction'>>
export type GetTableReq = Request<Pick<ReqParamsSchema['params'], 'table'>>
export type InsertRowReq = Request<Pick<ReqParamsSchema['params'], 'table'>>
export const Direction = z.enum(['ASC', 'DESC'])
export const Sex = z.enum(['Male', 'Female'])