import type { Response } from "express"

import { HTTP_STATUS, RESPONSE_STATUS } from '../config/constants'

const success = (res: Response, data: any = null, message: string = 'Success', statusCode: number = HTTP_STATUS.OK) => {
  return res.status(statusCode).json([{
    status: RESPONSE_STATUS.SUCCESS,
    message,
    data,
    timestamp: new Date().toISOString(),
  }])
}

const created = (res: Response, data: any = null, message: string = 'Resource created successfully') => {
  return success(res, data, message, HTTP_STATUS.CREATED)
}

const noContent = (res: Response, message: string = 'Success') => {
  return res.status(HTTP_STATUS.NO_CONTENT).json([{
    status: RESPONSE_STATUS.SUCCESS,
    message,
    timestamp: new Date().toISOString(),
  }])
}

const paginated = (res: Response, data: any, pagination: any, message = 'Success') => {
  return res.status(HTTP_STATUS.OK).json([{
    status: RESPONSE_STATUS.SUCCESS,
    message,
    data,
    pagination: {
      page: pagination.page,
      limit: pagination.limit,
      total: pagination.total,
      totalPages: Math.ceil(pagination.total / pagination.limit),
      hasNext: pagination.page < Math.ceil(pagination.total / pagination.limit),
      hasPrev: pagination.page > 1,
    },
    timestamp: new Date().toISOString(),
  }])
}

export {
  success,
  created,
  noContent,
  paginated,
}
