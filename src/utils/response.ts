import type { Response } from 'express'
import type { IMessage } from '../types/IResponse'

function sendErrorResponse(res: Response, message: IMessage) {
  return res.status(404).json({
    success: false,
    message,
  })
}

function sendSuccessResponse(res: Response, message: IMessage, data?: object) {
  return res.status(200).json({
    success: true,
    message: message,
    data: data,
  })
}

export { sendErrorResponse as getErrorResponse, sendSuccessResponse as getSuccessResponse }
