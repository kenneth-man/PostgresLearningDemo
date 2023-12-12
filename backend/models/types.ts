import { Request } from 'express'
import { IReqParams } from './interfaces'

export type GetByIdReq = Request<Pick<IReqParams['params'], 'table' | 'id'>>
export type GetOrderedByReq = Request<Pick<IReqParams['params'], 'table' | 'column' | 'direction'>>
export type GetTableReq = Request<Pick<IReqParams['params'], 'table'>>